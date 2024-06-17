import { MysInfo } from '#MysTool/mys'
import { Character, Material, Meta, Player, Weapon } from '#MysTool/profile'
import { Base, common } from '#MysTool/utils'
import _ from 'lodash'

export default class Calculator extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'calculator/character'
    this.tips = [
      '示例1：#gs雾切之回光养成90\n参数为武器等级',
      '示例2：#gs刻晴 雾切之回光养成81 9 9 9 90\n参数为角色、普攻、战技、终结技、武器等级',
      '示例3：#gs刻晴养成81 9 9 9 90\n参数为角色、普攻、战技、终结技、武器等级(此时默认计算角色所装备的武器)',
      '示例4：#gs刻晴养成60-90 5-9 10 9 50-90\n参数为角色、普攻、战技、终结技、武器等级（可从某个等级升至某个等级）',
      '示例5：#gs刻晴 七七养成81 9 9 9 90|90 8 8 9 90\n参数为角色、普攻、战技、终结技、武器等级（可以使用|分割多个角色的等级也可只使用同一等级）',
      '请在角色名、武器名及各等级间使用,，.或空格分割。\n多角色武器养成自行参考上述示例，武器请跟在对应角色后一人最多一把！'
    ]
    this.MaterialType = {
      other: '特殊材料',
      weekly: '周本掉落',
      boss: '角色培养素材',
      gem: '角色突破素材',
      talent: '角色天赋素材',
      weapon: '武器突破素材',
      monster: '精英敌人掉落',
      normal: '普通敌人掉落',
      specialty: '区域特产'
    }
    this.elemID = { pyro: 1, anemo: 2, geo: 3, dendro: 4, cryo: 7, electro: 5, hydro: 6 }
  }

  /** @type {MysInfo} */
  mysInfo

  help () {
    this.e.reply(common.makeForward(this.tips))
  }

  /**角色养成计算 */
  async character_count (calculator) {
    this.mysInfo = await MysInfo.init({ e: this.e, apis: 'compute', game: this.game, option: { log: false } })
    if (!this.mysInfo?.ckInfo?.ck) return false

    /** 
     * @type {{
     * role:import('#MysTool/profile').Character[]
     * weapon:import('#MysTool/profile').Weapon[]
     * }}
     */
    const { roles, weapons, set } = calculator

    if (roles.length > 0) {
      this.character = await this.mysInfo.getData('character')
      if (this.character?.retcode !== 0) return false
    }

    const body = []
    const avatar = []
    for (const i in roles.length > 0 ? roles : weapons) {
      const item = roles.length > 0 ? roles[i] : weapons[i]
      /** 获取设置参数 */
      const setSkill = await this.getSet(set[i] || set[0], ...item)

      const data = await this.getBody(setSkill, ...item)
      if (!data) continue

      body.push(data.body)
      avatar.push([data.item[0], data.body])
    }

    /** 计算 */
    const computes = await this.computes(body, avatar)
    if (!computes) return false

    return await this.renderImg({
      uid: this.mysInfo.uid,
      ...computes
    })
  }

  /** 背包材料 */
  async getMaterialPack () {
    this.model = 'calculator/materialPack'
    this.mysInfo = await MysInfo.init({ e: this.e, apis: 'compute', game: this.game, option: { log: false } })
    if (!this.mysInfo?.ckInfo?.ck) return false

    const AllChar = Meta.getData(this.game, 'char', 'allchars')
    const AllWeapon = Meta.getData(this.game, 'weapon', 'allweapons')

    const body = []
    AllChar.data.forEach(char => {
      body.push(this.makeAvatarBody(
        char, char.skill_list.map(id => {
          return {
            group_id: id,
            level_current: 1,
          }
        }),
        { min: [1], max: [90, 10, 10, 10] }
      ))
    })
    _.forEach(AllWeapon.data, (item) => {
      body.push({
        weapon: this.makeWeaponBody(item, 1, item.star < 3 ? 70 : 90)
      })
    })

    if (this.mysInfo.hoyolab) {
      body.forEach(item => {
        item.lang = 'zh-cn'
      })
    }

    const computes = await this.mysInfo.getData('compute', { body, needTime: true, cacheCd: 3600 })
    if (computes?.retcode !== 0) return false
    const { data, resDataTime = '' } = computes
    const materials = _.fromPairs(Object.values(this.MaterialType).map((type) => [type, []]))
    const itemsImgs = { imgs: {}, icons: {} }

    data.overall_consume.forEach(item => {
      const { name, icon } = item

      if (Number(item.num) - Number(item.lack_num) > 0) {
        const material = Material.get(name, this.game)
        if (!material) {
          logger.info(`找不到材料图片:${logger.red(name)}，请联系开发者添加！`)
          itemsImgs.icons[name] = icon
        } else {
          itemsImgs.imgs[name] = material.icon
          materials[this.MaterialType[material.type]].push({
            name: item.name,
            level: item.level,
            num: Number(item.num) - Number(item.lack_num)
          })
        }
      }
    })

    _.forEach(materials, (items) => {
      items = _.sortBy(items, ['id']).reverse()
    })

    const player = Player.create(this.mysInfo.uid, this.game)
    return await this.renderImg({
      materials,
      itemsImgs,
      resDataTime,
      uid: this.mysInfo.uid,
      info: player.getData('name,level,face'),
    })
  }

  async getSet (set, role) {
    const MaxSkill = '90,10,10,10,90'.split(',')
    if (!role && set?.[0]) set = ['', '', '', '', set[0]]

    if (_.isEmpty(set)) {
      return { min: [-1, -1, -1, -1, -1], max: MaxSkill }
    } else {
      const min = [...MaxSkill]
      const max = [...MaxSkill]
      MaxSkill.forEach((v, i) => {
        min[i] = (set[i]?.[1] && set[i]?.[0]) ? set[i][0] : -1
        max[i] = Math.min(v, set[i]?.[1] || set[i]?.[0] || v)
      })

      return { min, max }
    }
  }

  async getBody (setSkill, role, weapon) {
    let body = {}
    const { min, max } = setSkill

    /** 角色技能 */
    let char = this.character?.data?.avatars?.find?.(item => item.id === role.id)
    if (!char && [10000005, 10000007, 20000000].some(id => id == role.id)) {
      char = this.character?.data?.avatars?.find?.(item => [10000005, 10000007, 20000000].some(id => id == item.id))
      if (char) role = Character.get({ ...role, id: char.id }, this.game)
    }
    if (role) {
      let skillList = Object.values(role.detail.talent).map(item => {
        return {
          group_id: item.id,
          level_current: 1,
        }
      })
      if (char?.element?.toLowerCase?.() == role.elem) {
        /** 角色存在获取技能数据 */
        const detail = await this.mysInfo.getData('detail', { avatar_id: role.id })
        if (detail?.retcode !== 0) return false

        skillList = skillList.map(v => {
          return detail.data.skill_list.find((item) => Number(item.group_id) === Number(v.group_id))
        })
      }

      body = this.makeAvatarBody(role, skillList, setSkill, char)
    }

    if (this.mysInfo.hoyolab) {
      body.lang = 'zh-cn'
    }

    if (weapon?.id || char?.weapon?.id) {
      const w = {
        id: Number(weapon?.id || char.weapon.id),
        rarity: Number(weapon?.star || char.weapon.rarity),
        level: (weapon ? 1 : char.weapon.level) ?? 1
      }
      if (w.rarity < 3) {
        min[4] = min[4] > 0 ? Math.min(min[4], 70) : -1
        max[4] = Math.min(max[4], 70)
      }

      body.weapon = this.makeWeaponBody(w, min[4], max[4])
    }

    return { body, item: [role, weapon] }
  }

  makeAvatarBody (role, skillList, setSkill, char = {}) {
    const { min, max } = setSkill
    const body = {
      avatar_id: Number(role.id),
      avatar_level_current: min[0] > 0 ? min[0] : (char.level || 1),
      avatar_level_target: max[0],
      skill_list: [
        {
          id: Number(skillList[0].group_id),
          level_current: min[1] > 0 ? min[1] : skillList[0].level_current,
          level_target: max[1]
        },
        {
          id: Number(skillList[1].group_id),
          level_current: min[2] > 0 ? min[2] : skillList[1].level_current,
          level_target: max[2]
        },
        {
          id: Number(skillList[2].group_id),
          level_current: min[3] > 0 ? min[3] : skillList[2].level_current,
          level_target: max[3]
        }
      ]
    }
    if ([10000005, 10000007, 20000000].some(id => id == role.id)) {
      body.element_attr_id = this.elemID[role.elem] || 2
    }
    return body
  }

  makeWeaponBody (weapon, min, max) {
    return {
      id: Number(weapon.id),
      level_current: min > 0 ? min : weapon.level,
      level_target: max
    }
  }

  async computes (body, avatarData) {
    const computes = await this.mysInfo.getData('compute', { body })
    if (computes?.retcode !== 0) return false
    const { data } = computes
    const avatars = []

    const formart = (num) => {
      return num > 10000 ? (num / 10000).toFixed(1) + ' w' : num
    }
    const overall = data.overall_consume.map(val => {
      this.checkImg(val)
      const tem = {
        name: val.name,
        level: val.level,
        num: val.num,
        lack_num: 0 - Number(val.lack_num)
      }
      if (tem.lack_num > 0) {
        tem.lack_num = '<p style="color:green">+' + tem.lack_num + '</p>'
      } else if (tem.lack_num < 0) {
        tem.lack_num = '<p style="color:red">' + tem.lack_num + '</p>'
      } else {
        tem.lack_num = '<p>' + tem.lack_num + '</p>'
      }
      return tem
    })

    const available = _.sortBy(data.available_material.map(val => {
      this.checkImg(val)
      return {
        name: val.name,
        level: val.level,
        num: val.num
      }
    }), ['level', 'num']).reverse()

    const talentKey = ['a', 'e', 'q']
    data.items.forEach((item, idx) => {
      const [role1, body] = avatarData[idx]
      const role = Character.get(role1._id, 'gs')

      const avatar = {
        name: role?.name,
        star: role?.star,
        level: [body.avatar_level_current, body.avatar_level_target],
        mona: {},
        exper: {},
        skillList: body.skill_list,
        skills: {}
      }
      if (role?.getImgs) {
        avatar.imgs = role.getImgs()
      }
      if (body.weapon?.id) {
        const weapon = Weapon.get(body.weapon.id, 'gs')
        avatar.weaponInfo = {
          name: weapon.name,
          star: weapon.star,
          level: [body.weapon.level_current, body.weapon.level_target],
          icon: weapon.icon
        }
      }

      for (const key of ['avatar', 'avatar_skill', 'weapon']) {
        const v = item[key + '_consume']
        if (!v || v.length === 0) continue
        avatar[key] = []
        v.forEach(val => {
          if (val.name === '摩拉') {
            avatar.mona[key] = val.num
          } if (['大英雄的经验', '精锻用魔矿'].includes(val.name)) {
            avatar.exper[key] = val.num
          } if (val.name === '智识之冕') {
            avatar.skillPlus = val.num
          } else {
            avatar[key].push({
              name: val.name,
              level: val.level,
              _num: val.num,
              num: formart(val.num)
            })
          }
        })

        avatar[key] = _.sortBy(avatar[key], ['level', '_num']).reverse()
      }

      const talent = _.keyBy(Object.values(role.detail.talent), 'id')
      if (item.skills_consume?.length > 0) {
        item.skills_consume.forEach((val, i) => {
          const info = {
            ...val.skill_info,
            name: talent[val.skill_info.id].name,
            key: talentKey[i]
          }
          const list = []
          val.consume_list.forEach(v => {
            list.push({
              name: v.name,
              level: v.level,
              _num: v.num,
              num: formart(v.num)
            })
          })
          avatar.skills[info.id] = { info, list: _.sortBy(list, ['level', '_num']).reverse() }
        })
      }
      avatar.skillList.forEach(val => {
        val.info = { name: talent[val.id].name }
      })
      avatar.calendar = this.calendar(item.calendar)
      avatars.push(avatar)
    })

    return { avatars, available, overall, itemsImgs: this.itemsImgs }
  }

  calendar (data) {
    if (!data) return false
    const day = ['一', '二', '三', '四', '五', '六', '日']
    return {
      name: data.dungeon_name,
      time: '每周' + data.drop_day.sort((a, b) => {
        return Number(a) - Number(b)
      }).map(d => day[Number(d) - 1]).join('/') + '开启',
    }
  }

  checkImg (data) {
    const { name, icon } = data
    if (!this.itemsImgs) this.itemsImgs = { imgs: {}, icons: {} }

    if (!this.itemsImgs.imgs[name] && !this.itemsImgs.icons[name]) {
      const material = Material.get(name, this.game)
      if (!material) {
        logger.info(`找不到材料图片:${logger.red(name)}，请联系开发者添加！`)
        this.itemsImgs.icons[name] = icon
      } else {
        this.itemsImgs.imgs[name] = material.icon
      }
    }
  }
}
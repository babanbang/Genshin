import { MysInfo } from '#MysTool/mys'
import { Character, Player } from '#MysTool/profile'
import { Base } from '#MysTool/utils'
import lodash from 'lodash'

export default class Profile extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'profile/detail'
  }

  async refresh () {
    this.model = 'profile/list'
    this.e.MysUid = this.e.MysUid || await new MysInfo(this.e).getUid()
    if (!this.e.MysUid) {
      this.e.reply('请先绑定原神UID~')
      return false
    }

    const player = Player.create(this.e.MysUid, this.game)
    await player.refreshProfile(this.e)

    if (player._updateAvatar.length > 0) {
      const ret = {}
      lodash.forEach(player._updateAvatar, (id) => {
        let char = Character.get(id, this.game)
        if (char) {
          ret[char.name] = true
        }
      })
      if (!lodash.isEmpty(ret)) {
        return await this.list(ret)
      }
    }

    this.e._isReplyed || this.e.reply('获取角色面板数据失败，请确认角色已在游戏内橱窗展示，并开放了查看详情。设置完毕后请5分钟后再进行请求~')
    return false
  }

  async list (newChar = {}) {
    this.model = 'profile/list'
    this.e.MysUid = this.e.MysUid || await new MysInfo(this.e).getUid()
    if (!this.e.MysUid) {
      this.e.reply('请先绑定原神UID~')
      return false
    }

    const player = Player.create(this.e.MysUid, this.game)

    const chars = []
    const profiles = player.getProfiles()
    lodash.forEach(profiles,
      /** @param {import('#MysTool/profile').Avatar} profile */
      (profile) => {
        const char = profile.char
        const imgs = char.getImgs(profile.costume)
        chars.push({
          ...char.getData('id,name,elem,star'),
          face: imgs.qFace || imgs.face,
          level: profile.level || 1,
          cons: profile.cons,
          isNew: newChar?.[char.name]
        })
      })
    if (lodash.isEmpty(chars)) {
      this.e._isReplyed || this.e.reply('请先更新角色面板数据~')
      return false
    }

    return await this.renderImg({
      uid: player.uid,
      elem: 'hydro',
      avatars: lodash.sortBy(chars, ['isNew', 'star', 'id', 'level']),
      updateTime: player.getUpdateTime(),
      hasNew: lodash.isObject(newChar) && !lodash.isEmpty(newChar),
      servName: player.getProfileServName()
    })
  }

  async detail (uid, profile) {
    const player = Player.create(uid, this.game)

    const data = await player.getProfileDetail(profile)

    const keys = ['hp', 'atk', 'def', 'mastery', 'cpct', 'cdmg', 'recharge', 'dmg', 'heal']
    const actual = keys.map(k => Number(data.attr[k]?.replace(/%|,/g, '') || 0))

    return await this.renderImg({
      ...data, actual: JSON.stringify(actual)
    }, { wait: 'networkidle2', nowk: true })
  }
}

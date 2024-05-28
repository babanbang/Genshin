import { Base } from '#Mys.tool'
import { Player, Character } from '#Mys.profile'
import { MysInfo } from '#Mys.api'
import _ from 'lodash'

export default class Profile extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'profile/detail'
  }

  async refresh () {
    this.model = 'profile/list'
    this.e.MysUid = this.e.MysUid || await new MysInfo(this.e).getUid()
    if (!this.e.MysUid) return false

    const player = Player.create(this.e.MysUid, 'gs')
    await player.refreshProfile(this.e)

    if (player._updateAvatar.length > 0) {
      const ret = {}
      _.forEach(player._updateAvatar, (id) => {
        let char = Character.get(id)
        if (char) {
          ret[char.name] = true
        }
      })
      if (!_.isEmpty(ret)) {
        return await this.list(ret)
      }
    }

    this.e._isReplyed || this.e.reply('获取角色面板数据失败，请确认角色已在游戏内橱窗展示，并开放了查看详情。设置完毕后请5分钟后再进行请求~')
    return false
  }

  async list (newChar = {}) {
    this.model = 'profile/list'
    this.e.MysUid = this.e.MysUid || await new MysInfo(this.e).getUid()
    if (!this.e.MysUid) return false

    const player = Player.create(this.e.MysUid, 'gs')

    const chars = []
    const profiles = player.getProfiles()
    _.forEach(profiles,
      /** @param {import('#Mys.profile').Avatar} profile */
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
    if (_.isEmpty(chars)) {
      this.e._isReplyed || this.e.reply('请先更新角色面板数据~')
      return false
    }

    return await this.renderImg({
      uid: player.uid,
      elem: 'hydro',
      avatars: _.sortBy(chars, ['isNew', 'star', 'level', 'id']),
      updateTime: player.getUpdateTime(),
      hasNew: _.isObject(newChar) && !_.isEmpty(newChar),
      servName: player.getProfileServName()
    })
  }

  async detail () {
    const player = Player.create(this.e.MysUid, 'gs')

    const data = await player.getProfileDetail(this.e._profile)

    const keys = ['hp', 'atk', 'def', 'mastery', 'cpct', 'cdmg', 'recharge', 'dmg', 'heal']
    const actual = keys.map(k => Number(data.attr[k]?.replace(/%|,/g, '') || 0))

    return await this.renderImg({
      ...data, actual: JSON.stringify(actual)
    }, { wait: 'networkidle2', nowk: true })
  }
}

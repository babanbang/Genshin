import { Base } from "#MysTool/utils"
import { MysInfo } from "#MysTool/mys"
import { Player, Character } from "#MysTool/profile"

export default class Combat extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'combat/combat'
  }

  async get () {
    const res = await MysInfo.get(this.e, 'combat', { detail: true, UidType: 'ck' })
    if (res?.retcode !== 0) return false

    const player = new Player(this.e.MysUid, this.game)
    if (this.e.selfUid && (!player.name || !player.level || !player.face)) {
      const ret = await MysInfo.get(this.e, 'index', { UidType: 'ck' })
      if (res?.retcode === 0) {
        player.setBasicData(ret.data.role, true)
      }
    }

    const { data } = res.data
    if (!data?.[0]?.has_detail_data) {
      return '暂无幻想真镜剧诗挑战数据！'
    }

    const { detail, stat, schedule } = data[0]

    detail.rounds_data.forEach(round => {
      round.avatars.forEach(avatar => {
        const char = Character.get(avatar)
        if (char) {
          avatar.icon = char.face
          avatar.elem = char.elem
        } else {
          avatar.elem = avatar.element.toLowerCase()
        }
      })
      round.finish = this.dealTime(round.finish_date_time)
    })

    detail.backup_avatars.forEach(avatar => {
      const char = Character.get(avatar)
      if (char) {
        avatar.icon = char.face
        avatar.elem = char.elem
        delete avatar.image
      } else {
        avatar.elem = avatar.element.toLowerCase()
      }
    })

    for (const i of ['start', 'end']) {
      schedule[i] = this.dealTime(schedule[i + '_date_time'])
    }

    return await this.renderImg({
      role: player.getData('name,level,face'),
      detail, stat, schedule
    }, { nowk: true })
  }

  dealTime (time) {
    return `${time.year}.${time.month}.${time.day} ${time.hour}:${time.minute}:${time.second}`
  }
}
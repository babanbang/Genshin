import { plugin } from '#Karin'
import { MysUtil } from '#MysTool/mys'
import DailyNote from '../model/dailyNote.js'

const reg = MysUtil.reg.gs
export class gs_dailyNote extends plugin {
  constructor () {
    super({
      name: '原神体力查询',
      dsc: '原神体力查询',
      event: 'message',
      priority: 200,
      rule: [
        {
          reg: new RegExp(`^${reg}?(宝箱|成就|尘歌壶|家园|声望|(探险|探索)(度)?)((18|[1-9])[0-9]{8})*$`, 'i'),
          fnc: 'dailyNote'
        }
      ],
      handler: [
        {
          key: 'mys.gs.dailyNote',
          fnc: 'AllDailyNote'
        }
      ]
    })
  }

  /** 体力查询 */
  async dailyNote () {
    return await new DailyNote(this.e).get()
  }

  async AllDailyNote () {
    return await new DailyNote(this.e).get(true)
  }
}
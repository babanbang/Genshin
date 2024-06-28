import { plugin } from '#Karin'
import { MysUtil } from '#MysTool/mys'
import Explore from '../model/explore.js'

const reg = MysUtil.reg.gs
export class gs_explore extends plugin {
  constructor () {
    super({
      name: '原神探索查询',
      dsc: '原神探索信息查询',
      event: 'message',
      priority: 200,
      rule: [
        {
          reg: new RegExp(`^${reg}?(查询)?(体力|树脂)$`, 'i'),
          fnc: 'Explore'
        }
      ]
    })
  }

  /** 探险 */
  async Explore () {
    const img = await new Explore(this.e).get()
    if (img) this.reply(img)
    return true
  }
}

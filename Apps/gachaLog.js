import { plugin } from '#Karin'
import GachaLog from '../model/gachaLog.js'
import { MysUtil } from '#MysTool/mys'
import { Data } from '#MysTool/utils'

const reg = MysUtil.reg.gs
export class gs_GachaLog extends plugin {
  constructor () {
    super({
      name: '原神抽卡记录',
      dsc: '抽卡记录数据统计',
      event: 'message',
      priority: 200,
      rule: [
        {
          reg: new RegExp(`${reg}?抽卡记录$`, 'i'),
          fnc: "getLog"
        },
      ],
      handler: [
        {
          key: 'mys.gs.gachaLog',
          fnc: 'upLog'
        }
      ]
    })
  }

  init () {
    Data.createDir(Data.gamePath('gs') + 'GachaData/', { root: true })
  }


  async getLog () {
    const img = await new GachaLog(this.e).upLog({})
    if (!img) return

    this.reply(img)
  }
  async upLog ({ params }) {
    const img = await new GachaLog(this.e).upLog(params)
    if (!img) return

    this.reply(img)
  }
}
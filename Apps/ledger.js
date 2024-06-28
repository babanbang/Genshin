import { plugin } from '#Karin'
import { MysUtil } from '#MysTool/mys'
import { Data } from '#MysTool/utils'
import Ledger from '../model/ledger.js'

const reg = MysUtil.reg.gs
export class gs_ledger extends plugin {
  constructor () {
    super({
      name: '开拓月历查询',
      dsc: '崩坏：星穹铁道开拓月历查询',
      event: 'message',
      priority: 200,
      rule: [
        {
          reg: new RegExp(`^${reg}?(原石|札记)(查询)?([0-9]年)?([0-9]|[一二两三四五六七八九十]+)*月*$`, 'i'),
          fnc: 'ledger'
        }
      ]
    })
  }
  async init () {
    Data.createDir(Data.gamePath('gs') + 'LedgerData/', { root: true })
  }

  /** #sr开拓月历 */
  async ledger () {
    const img = await new Ledger(this.e).get()
    if (img) this.reply(img)
    return true
  }
}
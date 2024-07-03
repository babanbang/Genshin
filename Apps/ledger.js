import karin from 'node-karin'
import { MysUtil } from '#MysTool/mys'
import Ledger from '../model/ledger.js'

const reg = MysUtil.reg.gs
export const ledger = karin.command(
  new RegExp(`^${reg}?(原石|札记)(查询)?([0-9]年)?([0-9]|[一二两三四五六七八九十]+)*月*$`, 'i'),
  async (e) => {
    const img = await new Ledger(e).get()
    if (img) e.reply(img)
    return true
  },
  { name: '原石札记查询', priority: 200 }
)
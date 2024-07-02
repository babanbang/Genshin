import karin from 'node-Karin'
import { MysUtil } from '#MysTool/mys'
import Calculator from '../model/calculator.js'

const reg = MysUtil.reg.gs
export const MaterialPack = karin.command(
  new RegExp(`^${reg}?(我的)?(材料|素材)?背包$`, 'i'),
  async (e) => {
    const img = await new Calculator(e).getMaterialPack()
    if (img) e.reply(img)
    return true
  },
  { name: '原神背包材料查询', priority: 200 }
)

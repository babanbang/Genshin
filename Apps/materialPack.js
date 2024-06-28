import { plugin } from '#Karin'
import { MysUtil } from '#MysTool/mys'
import Calculator from '../model/calculator.js'

const reg = MysUtil.reg.gs
export class gs_MaterialPack extends plugin {
  constructor () {
    super({
      name: '原神背包材料',
      dsc: '原神背包材料',
      event: 'message',
      priority: 200,
      rule: [
        {
          reg: new RegExp(`^${reg}?(我的)?(材料|素材)?背包$`, 'i'),
          fnc: 'materialPack'
        }
      ]
    })
  }

  async materialPack () {
    const img = await new Calculator(this.e).getMaterialPack()
    if (img) this.reply(img)
    return true
  }
}

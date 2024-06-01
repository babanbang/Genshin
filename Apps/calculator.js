import { plugin } from '#Karin'
import { MysUtil } from '#Mys.api'
import Calculator from '../model/calculator.js'

const reg = MysUtil.reg.gs
export class gs_calculator extends plugin {
  constructor () {
    super({
      name: '原神养成计算',
      dsc: '角色养成材料计算器',
      event: 'message',
      priority: 200,
      rule: [
        {
          reg: new RegExp(`^${reg}养成计算`, 'i'),
          fnc: 'count'
        }
      ]
    })
  }

  /** 养成计算 */
  async count () {
    if (!this.e.calculator) {
      return new Calculator(this.e).help()
    }
    const img = await new Calculator(this.e).character_count()
    if (!img) return

    this.reply(img)
  }
}
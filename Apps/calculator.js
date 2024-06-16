import { plugin } from '#Karin'
import Calculator from '../model/calculator.js'

export class gs_calculator extends plugin {
  constructor () {
    super({
      name: '原神养成计算',
      dsc: '角色养成材料计算器',
      event: 'message',
      priority: 200,
      handler: [
        {
          key: 'mys.gs.calculator.help',
          fnc: 'help'
        },
        {
          key: 'mys.gs.calculator',
          fnc: 'count'
        }
      ]
    })
  }

  help () {
    return new Calculator(this.e).help()
  }

  /** 养成计算 */
  async count ({ calculator }) {
    const img = await new Calculator(this.e).character_count(calculator)
    if (!img) return

    this.reply(img)
  }
}
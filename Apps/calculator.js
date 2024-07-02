import karin from 'node-karin'
import '../index.js'
import Calculator from '../model/calculator.js'

export const calculator_help = karin.handler(
  'mys.gs.calculator.help',
  (e) => new Calculator(e).help(),
  { name: '原神养成计算帮助', priority: 200 }
)

export const calculator = karin.handler(
  'mys.gs.calculator',
  async ({ e, calculator }) => {
    const img = await new Calculator(e).character_count(calculator)
    if (img) e.reply(img)
    return true
  },
  { name: '原神养成计算', priority: 200 }
)

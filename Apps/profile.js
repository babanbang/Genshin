import { plugin } from '#Karin'
import { MysUtil } from '#Mys.api'
import Profile from '../model/profile.js'

const reg = MysUtil.reg.gs
export class gs_profile extends plugin {
  constructor () {
    super({
      name: '原神角色面板',
      dsc: '原神角色面板查询',
      event: 'message',
      priority: 300,
      rule: [
        {
          reg: new RegExp(`${reg}?(全部面板更新|更新全部面板|获取游戏角色详情|更新面板|面板更新)\\s*((18|[1-9])[0-9]{8})?$`, 'i'),
          fnc: 'Refresh'
        },
        {
          reg: new RegExp(`${reg}?面板(列表)?\\s*((18|[1-9])[0-9]{8})?$`, 'i'),
          fnc: 'List'
        },
        {
          reg: /^#gs([^#gs]+)\s*(详细|详情|面板|面版|圣遗物|伤害([1-9]+\d*)?)\s*((18|[1-9])[0-9]{8})*(.*[换变改].*)?$/,
          fnc: 'Detail'
        }
      ]
    })
  }

  /** 更新角色面板 */
  async Refresh () {
    const img = await new Profile(this.e).refresh()
    if (!img) return

    this.reply(img)
  }

  /** 角色面板列表 */
  async List () {
    const img = await new Profile(this.e).list()
    if (!img) return

    this.reply(img)
  }

  /** 角色面板 */
  async Detail () {
    const img = await new Profile(this.e).detail()
    if (!img) return

    this.reply(img)
  }
}

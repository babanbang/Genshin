import { plugin } from '#Karin'
import { MysUtil } from '#MysTool/mys'
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
          reg: new RegExp(`^${reg}?(全部面板更新|更新全部面板|获取游戏角色详情|更新面板|面板更新)\\s*((18|[1-9])[0-9]{8})?$`, 'i'),
          fnc: 'Refresh'
        },
        {
          reg: new RegExp(`^${reg}?面板(列表)?\\s*((18|[1-9])[0-9]{8})?$`, 'i'),
          fnc: 'List'
        }
      ],
      handler: [
        {
          key: 'mys.gs.profile',
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
  async Detail ({ profile }) {
    const img = await new Profile(this.e).detail(profile)
    if (!img) return

    this.reply(img)
  }
}

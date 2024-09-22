import { karin, KarinMessage } from 'node-karin'
import { MysUtil } from 'karin-plugin-mystool'
import { Role_list } from '../model'

const reg = MysUtil.reg.gs

/** 角色列表 */
export const role_List = karin.command(
  new RegExp(`^${reg}(角色|查询角色|角色查询)((18|[1-9])[0-9]{8})*$`, 'i'),
  async (e) => {
    const img = await new Role_list(e).roleList()
    if (img) e.reply(img)
    return true
  },
  { name: '原神角色信息查询', priority: 200 }
)

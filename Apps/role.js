import karin from 'node-Karin'
import { MysUtil } from '#MysTool/mys'
import Role from '../model/role.js'

const reg = MysUtil.reg.gs

/** 角色列表 */
async function roleList (e, refreshTalent = false) {
  const img = await new Role(e).roleList(refreshTalent)
  if (img) e.reply(img)
  return true
}

export const role_List = karin.command(
  new RegExp(`^${reg}?(角色|查询|查询角色|角色查询)((18|[1-9])[0-9]{8})*$|^${reg}?uid(\\+|\\s)*(18|[1-9])[0-9]{8}$|^#(18|[1-9])[0-9]{8}`, 'i'),
  async (e) => await roleList(e),
  { name: '原神角色信息查询', priority: 200 }
)

export const role_refreshTalent = karin.command(
  new RegExp(`^${reg}?(刷新|更新)(角色)?天赋(数据)?((18|[1-9])[0-9]{8})*$`, 'i'),
  async (e) => await roleList(e, true),
  { name: '刷新原神角色天赋信息', priority: 200 }
)

import { MysUtil } from "#MysTool/mys"
import karin from "node-karin"
import Combat from '../model/combat.js'

const reg = MysUtil.reg.gs
export const role_combat = karin.command(
  new RegExp(`^${reg}?(查询)?(幻想真镜)?剧诗$`, 'i'),
  async (e) => {
    const img = await new Combat(e).get()
    if (img) e.reply(img)
    return true
  }
)
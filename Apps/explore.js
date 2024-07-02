import karin from 'node-Karin'
import { MysUtil } from '#MysTool/mys'
import Explore from '../model/explore.js'

const reg = MysUtil.reg.gs
export const explore = karin.command(
  new RegExp(`^${reg}?(宝箱|成就|尘歌壶|家园|声望|(探险|探索)(度)?)((18|[1-9])[0-9]{8})*$`, 'i'),
  async (e) => {
    const img = await new Explore(e).get()
    if (img) e.reply(img)
    return true
  },
  { name: '原神探索查询', priority: 200 }
)

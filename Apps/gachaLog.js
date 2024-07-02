import karin from 'node-Karin'
import GachaLog from '../model/gachaLog.js'
import { MysUtil } from '#MysTool/mys'

const reg = MysUtil.reg.gs

export const GachaLog_getLog = karin.command(
  new RegExp(`^${reg}?(抽卡|抽奖|角色|武器|集录|常驻|up|新手|全部)+池*(记录|祈愿|分析)$`, 'i'),
  async (e) => {
    const img = await new GachaLog(e).getLog()
    if (img) e.reply(img)
    return true
  },
  { name: '原神抽卡记录查询', priority: 200 }
)

export const GachaLog_upLogBysk = karin.command(
  new RegExp(`^${reg}?(更新|刷新)抽卡(记录|祈愿|分析)$`, 'i'),
  async (e) => {
    const msg = await new GachaLog(e).upLogBysk()
    if (msg) e.bot.sendForwardMessage(e.contact, msg)
    return true
  },
  { name: '更新原神抽卡记录', priority: 200 }
)

export const GachaLog_exportLog = karin.command(
  new RegExp(`^${reg}?(强制)?导出抽卡(记录|祈愿|分析)$`, 'i'),
  async (e) => {
    if (e.isGroup && !e.msg.includes("强制")) {
      e.reply("建议私聊导出，若你确认要在此导出，请发送【#gs强制导出抽卡记录】", { at: true })
      return true
    }

    return await new GachaLog(e).exportJson()
  },
  { name: '导出原神抽卡记录', priority: 200 }
)

export const gachaLog_hander = karin.handler(
  'mys.gs.gachaLog',
  async ({ e, params }) => {
    const msg = await new GachaLog(e).upLog(params)
    if (msg) e.bot.sendForwardMessage(e.contact, msg)
    return true
  },
  { priority: 200 }
)

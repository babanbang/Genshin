import karin from 'node-karin'
import { MysUtil } from '#MysTool/mys'
import DailyNote from '../model/dailyNote.js'

const reg = MysUtil.reg.gs

export const dailyNote = karin.command(
  new RegExp(`^${reg}?(查询)?(体力|树脂)$`, 'i'),
  async (e) => await new DailyNote(e).get(),
  { name: '原神体力查询', priority: 200 }
)

export const dailyNoteAll = karin.handler(
  'mys.gs.dailyNote',
  async (e) => await new DailyNote(e).getNoteImgs(this.e.user_id),
  { priority: 200 }
)

// export const Task = karin.task(
//   '原神体力推送任务',
//   Cfg.getConfig('cron', 'gs').dailyNoteTask || '0 * * * * ?',
//   () => {
//     new DailyNote().dailyNoteTask()
//     return true
//   }
// )

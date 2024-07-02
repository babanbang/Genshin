import karin from 'node-karin'
import { MysUtil } from '#MysTool/mys'
import DailyNote from '../model/dailyNote.js'

const reg = MysUtil.reg.gs

// export const dailyNote = karin.command(
//   new RegExp(`^${reg}?(查询)?(体力|树脂)$`, 'i'),
//   async (e) => await new DailyNote(e).get(),
//   { name: '原神体力查询', priority: 200 }
// )

// export const dailyNoteAll = karin.handler(
//   'mys.gs.dailyNote',
//   async (e) => await new DailyNote(e).get(true),
//   { priority: 200 }
// )
export {}
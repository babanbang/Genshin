import { MysApi, MysInfo, MysUtil } from '#MysTool/mys'
import { Base, Data } from '#MysTool/utils'
import { common } from 'node-karin'
import lodash from 'lodash'
import moment from 'moment'

const reg = MysUtil.reg.gs
let ledgerTasking = false
export default class Ledger extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'ledger/ledger'

    this.nowYear = new Date().getFullYear()
    this.nowMonth = new Date().getMonth() + 1
    this.monthArr = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].splice(this.nowMonth - 1, 3)

    this.color = ['#73a9c6', '#d56565', '#70b2b4', '#bd9a5a', '#739970', '#7a6da7', '#597ea0', '#AFEEEE']
  }
  /** @type {MysInfo} */
  mysInfo

  async get () {
    const { year, month } = this.getMonth()
    if (!this.month) return false

    this.mysInfo = await MysInfo.init({ e: this.e, apis: 'ledger', game: this.game, UidType: 'ck' })
    if (!this.mysInfo?.uid) return false

    let ledgerInfo
    this.isnowMonth = MysUtil.checkMonth(year, month, 0)
    if (!this.mysInfo.ckInfo.ck || !this.isnowMonth) {
      const dataPath = Data.gamePath(this.game) + 'LedgerData/' + this.mysInfo.uid + '.json'
      ledgerInfo = Data.readJSON(dataPath, { root: true })?.[year]?.[month]
      if (!ledgerInfo && !MysUtil.checkMonth(year, month)) {
        this.e.reply(`本地无${year}年${month}月数据！`)
        return false
      }
    }

    if (!ledgerInfo) {
      const res = await this.mysInfo.getData('ledger', { month: this.month })
      if (res?.retcode !== 0) return false

      this.saveLedger({ uid: this.mysInfo.uid, data: res.data })
      ledgerInfo = res.data
    }

    return this.renderImg(this.dealData(ledgerInfo), { nowk: true })
  }

  async ledgerTask (manual) {
    if (ledgerTasking && manual) {
      this.e.reply('任务正在执行中，请稍后再试')
      return false
    }
    const { cks, uids } = await MysInfo.getBingUser(this.game, 'ck')
    let finishTime = moment().add(uids.length * 1.5, 's').format('MM-DD HH:mm:ss')
    const startMsg = `开始任务：保存原石数据，完成前请勿重复执行\n札记ck：${uids.length}个\n预计需要：${this.countTime(uids.length)}\n完成时间：${finishTime}`

    logger.mark(startMsg)
    if (manual) {
      this.e.reply(startMsg)
    }
    ledgerTasking = true

    this.mysInfo = await MysInfo.init()
    this.mysInfo.isTask = true
    for (const uid in cks) {
      this.mysInfo.mysApi = new MysApi(cks[i])
      await this.saveLedger({ uid }, true)
      await common.sleep(1000)
    }

    if (manual) {
      this.e.reply(`原石任务完成`)
    }
    return true
  }

  getMonth () {
    const time = this.e.msg.replace(new RegExp(`^${reg}?(原石|札记)(查询)?`, 'i'), '').replace(/月/g, '').trim().split('年')

    let month = Number(time[1] || time[0])
    const monthData = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    if (month && isNaN(month)) {
      for (let i in monthData) {
        if (month == monthData[i]) {
          month = Number(i) + 1
          break
        }
      }
    }
    if (!month || isNaN(month) || month < 1 || month > 12) {
      month = this.nowMonth
    }
    let year = this.nowYear
    if (time[1] && time[0]) {
      let newYear = Number('20' + String(time[0]).slice(-2))
      if (newYear && newYear > 2023 && newYear < year) {
        year = newYear
      }
    }

    this.year = year
    this.month = month
    return { year, month }
  }

  dealData (ledgerInfo) {
    if (!this.isnowMonth) {
      ledgerInfo.change = {}
      for (let i of ['primogems', 'mora']) {
        ledgerInfo.change[i] = this.calculateChange(
          ledgerInfo.month_data['current_' + i],
          ledgerInfo.month_data['last_' + i]
        )
      }
    }

    ledgerInfo.color = []
    ledgerInfo.month_data.group_by.forEach((item) => {
      item.color = this.color[item.action_id]
      ledgerInfo.color.push(item.color)
    })

    ledgerInfo.group_by = JSON.stringify(ledgerInfo.month_data.group_by)
    ledgerInfo.color = JSON.stringify(ledgerInfo.color)

    return {
      uid: this.mysInfo.uid,
      day: `${this.year}年${this.month}月`,
      icon: lodash.random(0, 60),
      nowDay: moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss'),
      ...ledgerInfo,
      isnowMonth: this.isnowMonth
    }
  }

  calculateChange (currentMonth, lastMonth) {
    const percentageChange = ((currentMonth - lastMonth) / lastMonth) * 100;
    if (percentageChange > 0) {
      return `增加了<strong>${percentageChange.toFixed(2)}%</strong>`
    } else if (percentageChange < 0) {
      return `减少了<strong>${Math.abs(percentageChange).toFixed(2)}%</strong>`
    } else {
      return '毫无变化'
    }
  }

  async saveLedger (params) {
    const { uid, data = '' } = params
    if (!uid) return false

    const dataPath = Data.gamePath(this.game) + 'LedgerData/' + uid + '.json'
    const ledgerData = Data.readJSON(dataPath, { root: true }) || {}

    // 获取前三个月
    for (const month of this.monthArr) {
      let year = this.nowYear
      if (this.nowMonth <= 2 && month >= 11) {
        year--
      }

      if (!ledgerData[year]) ledgerData[year] = {}

      if (ledgerData[year][month]?.isUpdate && this.nowMonth !== month) continue

      let ledgerInfo = {}
      if (this.nowMonth === month && data?.data_month == this.month) {
        ledgerInfo = data
      } else {
        const res = await this.mysInfo.getData('ledger', { month })
        if (res?.retcode != 0) continue
        ledgerInfo = res.data
      }

      if (this.nowMonth !== month) {
        ledgerInfo.isUpdate = true
      }

      ledgerData[year][month] = ledgerInfo
      await common.sleep(100)
    }

    logger.mark(`[札记查询][自动保存] uid:${uid} 数据已保存`)

    Data.writeJSON(dataPath, ledgerData, { root: true })
    return ledgerData
  }
}

import { MysInfo } from "#MysTool/mys"
import { User } from "#MysTool/user"
import { Base } from "#MysTool/utils"
import lodash from "lodash"
import moment from "moment"
import { common } from "node-karin"

export default class DailyNote extends Base {
  constructor (e = {}) {
    super(e, 'gs')
    this.model = 'dailyNote/note'
    this.week = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ]
  }

  async get () {
    const sendMsg = []
    this.e.reply('正在查询中，请稍等...', { at: true })

    const _reply = this.e.reply
    this.e.reply = (msg) => {
      if (Array.isArray(msg)) {
        sendMsg.push(...msg)
      } else {
        sendMsg.push(msg)
      }
    }

    sendMsg.push(...await this.getNoteImgs(this.e.user_id))

    if (sendMsg.length > 2) {
      this.e.bot.sendForwardMessage(this.e.contact, common.makeForward(sendMsg))
    } else {
      _reply(sendMsg)
    }
    return true
  }

  async dailyNoteTask () {

  }

  async getNoteImgs (user_id) {
    const ImgList = []

    const user = await User.create(user_id, this.game)
    const mysInfo = new MysInfo(this.e, this.game)

    const uids = user.getUidList(this.game, { type: 'all' })
    if (!uids.length) return ['请先绑定cookie或stoken']

    for (const uid of uids) {
      const mys = user.getUidData({ game: this.game, uid })
      mysInfo.setMysApi(mys)

      if (mys.sk && !mysInfo.hoyolab) {
        const noteData = await this.getWidgetData(mysInfo)
        if (noteData?.retcode == 0) {
          ImgList.push(await this.renderImg({ uid, ...this.dealData(noteData.data, true) }))
          continue
        }
      }

      if (mys.ck) {
        const noteData = await mysInfo.getData('dailyNote')
        if (noteData?.retcode == 0) {
          ImgList.push(await this.renderImg({ uid, ...this.dealData(noteData.data) }))
        } else {
          ImgList.push(`UID:${uid} 查询失败`)
        }
        continue
      }

      ImgList.push(`UID:${uid} 请先绑定cookie或stoken`)
    }

    return ImgList
  }

  /**@param {MysInfo} mysInfo  */
  async getWidgetData (mysInfo, task = false) {
    const User = await this.getUserData(mysInfo)
    const noteData = await mysInfo.getData('widget', { useSK: true }, !task)

    if (User.main) {
      let retry = 0
      let ret = await this.changeRole(mysInfo, User.main)
      while (ret?.retcode === 1003 && retry < 3) {
        ret = await this.changeRole(mysInfo, User.main)
        retry++
      }
    }

    return noteData
  }

  /**@param {MysInfo} mysInfo  */
  async getUserData (mysInfo) {
    const Roles = await mysInfo.getData('getUserGameRolesByStoken', { option: { nolog: true } }, false)

    if (Roles?.data?.list?.length > 0) {
      const RoleList = Roles.data.list.filter(role => role.game_biz == mysInfo.game_biz)

      if (RoleList.length > 0) {
        if (RoleList.length === 1) return { data: RoleList[0] }

        const main = RoleList.find(role => role.is_chosen) || RoleList[0]
        if (main.game_uid === mysInfo.mysApi.uid) return { data: main }

        const data = RoleList.find(role => role.game_uid == mysInfo.mysApi.uid)
        if (!await this.changeRole(mysInfo, data)) {
          logger.error(`切换小组件查询UID:${mysInfo.mysApi.uid}失败`)
          return { data }
        }

        return { data, main }
      }
    }
    return {}
  }

  /**@param {MysInfo} mysInfo  */
  async changeRole (mysInfo, data) {
    await common.sleep(lodash.random(200, 500))
    const ret = await mysInfo.getData('getActionTicket', { option: { nolog: true } }, false)
    if (!ret?.data?.ticket) return false

    await common.sleep(lodash.random(1000, 1500))
    const res = await mysInfo.getData('changeGameRole', {
      action_ticket: ret.data.ticket,
      game_biz: data.game_biz,
      game_uid: data.game_uid,
      region: data.region,
      option: { nolog: true }
    }, false)

    return res?.retcode == 0
  }

  dealData (data, widget = false) {
    const ImgData = {}
    const nowDay = moment(new Date()).format('DD')

    /** 树脂 */
    if (data.resin_recovery_time > 0) {
      let resinMaxTime = new Date().getTime() + data.resin_recovery_time * 1000
      let maxDate = new Date(resinMaxTime)

      resinMaxTime = moment(maxDate).format('HH:mm')
      ImgData.resinMaxTimeMb2 = this.dateTime(maxDate) + moment(maxDate).format('hh:mm')

      if (moment(maxDate).format('DD') !== nowDay) {
        ImgData.resinMaxTimeMb2Day = '明天'
        resinMaxTime = `明天 ${resinMaxTime}`
      } else {
        ImgData.resinMaxTimeMb2Day = '今天'
        resinMaxTime = ` ${resinMaxTime}`
      }
      ImgData.resinMaxTime = resinMaxTime
    }

    if (widget && data.expeditions?.length >= 1) {
      let remainedTime = lodash(data.expeditions).map('remained_time').min()

      if (remainedTime > 0) {
        remainedTime = moment().unix() + Number(remainedTime)
        let remainedDate = moment.unix(remainedTime)
        remainedTime = remainedDate.format('HH:mm')

        if (remainedDate.date() != nowDay) {
          remainedTime = `明天 ${remainedTime}`
        } else {
          remainedTime = ` ${remainedTime}`
        }
        ImgData.remainedTime = remainedTime
      }
    }

    /** 宝钱 */
    if (!data.home_coin_recovery_time && data.current_home_coin < data.max_home_coin) {
      data.home_coin_recovery_time = Math.floor((data.max_home_coin - data.current_home_coin) / 30 * 3600)
    }

    if (data.home_coin_recovery_time > 0) {
      const coinDate = new Date(new Date().getTime() + data.home_coin_recovery_time * 1000)
      const coinDay = Math.floor(data.home_coin_recovery_time / 3600 / 24)

      if (coinDay > 0) {
        const chnNumChar = ['零', '明', '后', '三', '四', '五', '六', '七', '八', '九']
        const coinHour = Math.floor((data.home_coin_recovery_time / 3600) % 24)
        const coinMin = Math.floor((data.home_coin_recovery_time / 60) % 60)

        ImgData.coinTime = `${coinDay}天${coinHour}小时${coinMin}分钟`
        let dayTime = (24 - moment(new Date()).format('HH') + moment(coinDate).diff(new Date(), 'hours')) / 24
        ImgData.coinTimeMb2Day = chnNumChar[dayTime.toFixed(0)] + '天'
        ImgData.coinTimeMb2 = this.dateTime(coinDate) + moment(coinDate).format('hh:mm')
      } else {
        ImgData.coinTimeMb2 = moment(coinDate).format('hh:mm')
        if (moment(coinDate).format('DD') !== nowDay) {
          ImgData.coinTimeMb2Day = '明天'
          ImgData.coinTime = `明天 ${moment(coinDate).format('hh:mm')}`
        } else {
          ImgData.coinTimeMb2Day = '今天'
          ImgData.coinTime = moment(coinDate).format('hh:mm', coinDate)
        }
      }
    }

    /** 参量质变仪 */
    if (data.transformer?.obtained) {
      data.transformer.reached = data.transformer.recovery_time.reached
      let recoveryTime = ''

      if (data.transformer.recovery_time.Day > 0) {
        recoveryTime += `${data.transformer.recovery_time.Day}天`
      }

      if (data.transformer.recovery_time.Hour > 0) {
        recoveryTime += `${data.transformer.recovery_time.Hour}小时`
      }

      if (data.transformer.recovery_time.Minute > 0) {
        recoveryTime += `${data.transformer.recovery_time.Minute}分钟`
      }

      data.transformer.recovery_time = recoveryTime
    }

    return {
      ...ImgData,
      dayMb2: moment(new Date()).format('yyyy年MM月DD日 HH:mm') + ' ' + this.week[new Date().getDay()],
      day: moment().format('MM-DD HH:mm') + ' ' + this.week[moment().day()],
      ...data
    }
  }

  dateTime (time) {
    return moment(time).format('HH') < 6
      ? '凌晨'
      : moment(time).format('HH') < 12
        ? '上午'
        : moment(time).format(
          'HH') < 17.5
          ? '下午'
          : moment(time).format('HH') < 19.5
            ? '傍晚'
            : moment(time).format('HH') < 22
              ? '晚上'
              : '深夜'
  }
}
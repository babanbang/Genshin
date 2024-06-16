import { common } from '#Karin'
import { MysApi } from '#MysTool/mys'
import { Character, Weapon } from '#MysTool/profile'
import { Base, common as Common, Data, Cfg } from '#MysTool/utils'
import _ from 'lodash'

const pool = [
  { type: 301, typeName: "角色" },
  { type: 302, typeName: "武器" },
  { type: 500, typeName: "集录" },
  { type: 200, typeName: "常驻" },
  { type: 100, typeName: "新手" },
]
const UP = {}

export default class Role extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'gacha/log'
  }

  initPool () {
    if (!_.isEmpty(UP)) return

    for (const item of pool) {
      if ([200, 100].includes(Number(item.type))) continue
      UP[item.type] = Cfg.readYaml(`resources/gachaPool/${item.type}.yaml`, this.game)
    }
  }

  GachaPath (type) {
    return Data.gamePath(this.game) + `GachaData/${this.uid}/${type}.json`
  }

  get GachaUserPath () {
    return Data.gamePath(this.game) + `GachaData/${this.uid}/user.json`
  }

  getIcon (name, type = "role") {
    if (type === "role" || type === "角色") {
      let char = Character.get(name, this.game)
      return char?.imgs?.face || ""
    } else if (type === "weapon" || type === "武器") {
      let weapon = Weapon.get(name, this.game)
      return weapon?.imgs?.icon || ""
    }
    return ""
  }

  async upLog (params) {
    // const msgs = []
    // this.uid = params.uid

    // const gacha = {}
    // this.mysApi = new MysApi({ uid: this.uid, server: params.region, game: this.game }, { log: false })
    // for (const { type, typeName } of pool) {
    //   this.type = type
    //   this.typeName = typeName
    //   const { list, ids } = this.readJson()
    //   const { data = [], err = '' } = await this.getAllLog(params.authkey, ids)

    //   if (err) {
    //     msgs.push(err)
    //   } else {
    //     /** 数据合并 */
    //     let num = data.length
    //     if (num > 0) {
    //       gacha[type] = data.concat(list)
    //     }
    //     msgs.push(`[${this.typeName}]记录获取成功，更新${num}条`)
    //   }
    // }
    // msgs.push(`\n抽卡记录更新完成，您还可回复\n【#gs全部记录】统计全部抽卡数据\n【#gs武器记录】统计武器池数据\n【#gs角色统计】按卡池统计数据\n【#gs导出记录】导出记录数据`)

    // if (!this.uid) {
    //   this.e.reply('抽卡记录暂无数据，请等待有数据后再尝试更新！')
    //   return false
    // }

    // const user = await Data.readJSON(this.GachaUserPath, { root: true }) || { master: [], ban: [] }
    // if (!user.master.some(item => item == this.e.user_id)) {
    //   user.master.push(this.e.user_id)
    //   _.pull(user.ban, this.e.user_id)
    //   Data.writeJSON(this.GachaUserPath, user, { root: true })
    // }

    this.uid = 109750261
    const gacha = await Data.readJSON(Data.gamePath(this.game) + `GachaData/data.json`, { root: true })

    const data = {}
    _.forEach(gacha, (val, key) => {
      Data.writeJSON(this.GachaPath(key), val, { root: true })
      data[key] = { ...this.analyse(val, key), ...pool.find(item => item.type == key) }
    })

    // const sendMsg = [msgs.join('\n')]
    const img = await this.renderImg({ uid: this.uid, gachaData: Object.values(data) })
    // if (img) sendMsg.push(img)

    // return Common.makeForward(sendMsg)
  }

  async getAllLog (authkey, ids = '', page = 1, endId = 0) {
    const res = await this.mysApi.getData('gacha', {
      gacha_type: this.type, page, end_id: endId, authkey,
    })

    if (res?.retcode != 0) {
      return { err: `获取${this.typeName}记录失败` }
    }

    if (!res?.data?.list || res.data.list.length <= 0) {
      logger.mark(`[UID:${this.uid}] 获取${this.typeName}记录完成，共${Number(page) - 1}页`)
      return {}
    }

    this.uid = res.data.list[0].uid

    let data = []
    for (let val of res.data.list) {
      if (ids.get(String(val.id))) {
        logger.mark(`[UID:${this.uid}] 获取${this.typeName}记录完成，暂无新记录`)
        return { data }
      } else {
        data.push(val)
        endId = val.id
      }
    }
    page++

    /** 延迟下防止武器记录获取失败 */
    await common.sleep(1000)

    const ret = await this.getAllLog(authkey, ids, page, endId)
    data = data.concat(ret.data || [])

    return { data, err: ret.err }
  }

  readJson () {
    const ids = new Map()
    if (!this.uid) return { list: [], ids }

    const logJson = []
    logJson.push(...(Data.readJSON(this.GachaPath, { root: true }) || []))
    for (let val of logJson) {
      if (val.id) ids.set(String(val.id), val.id)
    }

    return { list: logJson, ids }
  }

  /** 统计计算记录 */
  analyse (gacha, type) {
    const fiveLog = []
    const fourLog = []
    let fiveNum = 0
    let fourNum = 0
    let fiveLogNum = 0
    let fourLogNum = 0
    let noFiveNum = 0
    let noFourNum = 0
    let wai = 0 // 歪
    let weaponNum = 0
    let weaponFourNum = 0
    let allNum = gacha.length
    let bigNum = 0

    for (const val of gacha) {
      if (val.rank_type == 4) {
        fourNum++
        if (noFourNum == 0) {
          noFourNum = fourLogNum
        }
        fourLogNum = 0
        if (fourLog[val.name]) {
          fourLog[val.name]++
        } else {
          fourLog[val.name] = 1
        }
        if (val.item_type == "武器") {
          weaponFourNum++
        }
      }
      fourLogNum++

      if (val.rank_type == 5) {
        fiveNum++
        if (fiveLog.length > 0) {
          if (fiveLog[fiveLog.length - 1].nums === 4) {
            fiveLog.push({
              ...fiveLog[fiveLog.length - 1],
              nums: [fiveLogNum]
            })
          } else {
            fiveLog[fiveLog.length - 1].nums.push(fiveLogNum)
          }
        } else {
          noFiveNum = fiveLogNum
        }

        fiveLogNum = 0
        let isUp = false
        // 歪了多少个
        if (val.item_type != "角色") {
          weaponNum++
        }

        if (this.checkIsUp(val, type)) {
          isUp = true
        } else {
          wai++
        }

        if (fiveLog[fiveLog.length - 1]?.name !== val.name || fiveLog[fiveLog.length - 1]?.nums === 4) {
          fiveLog.push({
            name: val.name,
            icon: this.getIcon(val.name, val.item_type),
            item_type: val.item_type,
            nums: [],
            isUp
          })
        }

      }
      fiveLogNum++
    }

    if (fiveLog.length > 0) {
      fiveLog[fiveLog.length - 1].nums.push(fiveLogNum)

      // 删除未知五星
      for (let i in fiveLog) {
        if (fiveLog[i].name == "未知") {
          allNum = allNum - fiveLog[i].nums.reduce((a, b) => a + b)
          fiveLog.splice(i, 1)
          fiveNum--
        } else {
          // 上一个五星是不是常驻
          let lastKey = Number(i) + 1
          if (fiveLog[lastKey] && !fiveLog[lastKey].isUp) {
            fiveLog[i].minimum = true
            bigNum++
          } else {
            fiveLog[i].minimum = false
          }
        }
      }
    } else {
      // 没有五星
      noFiveNum = allNum
    }

    // 四星最多
    let four = []
    for (let i in fourLog) {
      four.push({
        name: i,
        num: fourLog[i]
      })
    }
    four = four.sort((a, b) => { return b.num - a.num })

    if (four.length <= 0) {
      four.push({ name: "无", num: 0 })
    }

    let fiveAvg = 0
    let fourAvg = 0
    if (fiveNum > 0) {
      fiveAvg = Math.round((allNum - noFiveNum) / fiveNum)
    }
    if (fourNum > 0) {
      fourAvg = Math.round((allNum - noFourNum) / fourNum)
    }
    // 有效抽卡
    let isvalidNum = 0

    if (fiveNum > 0 && fiveNum > wai) {
      if (fiveLog.length > 0 && !fiveLog[0].isUp) {
        isvalidNum = Math.round((allNum - noFiveNum - fiveLog[0].nums[0]) / (fiveNum - wai))
      } else {
        isvalidNum = Math.round((allNum - noFiveNum) / (fiveNum - wai))
      }
    }

    // 小保底不歪概率
    let noWaiRate = 0
    if (fiveNum > 0) {
      noWaiRate = (fiveNum - bigNum - wai) / (fiveNum - bigNum)
      noWaiRate = (noWaiRate * 100).toFixed(1)
    }

    //最非，最欧
    let maxValue = '-'
    let minValue = '-'

    const filteredFiveLog = fiveLog.filter(item => item.nums.length > 0)
    if (filteredFiveLog.length > 0) {
      maxValue = Math.max(...filteredFiveLog.map(item => Math.max(...item.nums)))
      minValue = Math.min(...filteredFiveLog.map(item => Math.min(...item.nums)))
    }

    let upYs = isvalidNum * 160
    if (upYs >= 10000) {
      upYs = (upYs / 10000).toFixed(2) + "w"
    } else {
      upYs = upYs.toFixed(0)
    }

    let line = []
    // 新手池、常驻池
    if ([200, 100].includes(Number(type))) {
      line = [[
        { lable: "五星平均", num: fiveAvg, unit: "抽" },
        { lable: "四星平均", num: fourAvg, unit: "抽" },
        { lable: "四星最多", num: four[0].num, unit: four[0].name.slice(0, 4) },
      ], [
        { lable: "最非", num: maxValue, unit: "抽" },
        { lable: "最欧", num: minValue, unit: "抽" },
        { lable: `五星武器`, num: weaponNum, unit: "个" },
        { lable: "<strong>五星</strong>/四星", num: `<strong>${fiveNum}</strong>/${fiveNum}`, unit: "" },
      ]]
    } else {
      line = [[
        { lable: "五星平均", num: fiveAvg, unit: "抽" },
        { lable: "小保底不歪", num: noWaiRate + "%", unit: "" },
        { lable: "最非", num: maxValue, unit: "抽" }
      ], [
        { lable: "UP平均", num: isvalidNum, unit: "抽" },
        { lable: "UP花费", num: upYs, unit: "" },
        { lable: "最欧", num: minValue, unit: "抽" },
        { lable: "<strong>限定</strong>/五星", num: `<strong>${fiveNum - wai}</strong>/${fiveNum}`, unit: "" },
      ]]
    }

    return {
      allNum,
      noFiveNum,
      noFourNum,
      firstTime: gacha[gacha.length - 1]?.time.substring(0, 16),
      lastTime: gacha[0]?.time.substring(0, 16),
      fiveLog,
      fiveAvg,
      line
    }
  }

  checkIsUp (role, type) {
    this.initPool()

    if ([200, 100].includes(Number(type))) return false
    let logTime = new Date(role.time).getTime()

    return UP[type].some(item => {
      if (!item.five?.includes?.(role.name)) return false

      let start = new Date(item.from).getTime()
      let end = new Date(item.to).getTime()
      return logTime >= start && logTime <= end
    })
  }
}
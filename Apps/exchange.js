import { plugin } from '#Karin'
import { common } from '#MysTool/utils'
import { MysApi } from '#MysTool/mys'

const reg = MysUtil.reg.gs
export class gs_exchange extends plugin {
  constructor () {
    super({
      name: '原神直播兑换码',
      dsc: '原神前瞻直播兑换码',
      event: 'message',
      priority: 1000,
      rule: [
        {
          reg: new RegExp(`^${reg}?(直播|前瞻)?兑换码$`, 'i'),
          fnc: 'getCode'
        }
      ]
    })
    this.uid = '75276550'
  }

  async getCode () {
    this.now = parseInt(Date.now() / 1000)
    let actid = await this.getActId()
    if (!actid) {
      logger.info('[兑换码] 未获取到actId')
      return true
    }
    this.actId = actid

    /** index info */
    let index = await this.getData('index')
    if (!index || !index.data) {
      return true
    }
    if (index.data === null) {
      return await this.reply(`错误：\n${index.message}`)
    }

    let index_data = index.data.live
    let title = index_data['title']
    this.code_ver = index_data['code_ver']
    if (index_data.remain > 0) {
      return await this.reply(`暂无${title}直播兑换码`, true)
    }

    let code = await this.getData('code')
    if (!code || !code.data?.code_list) {
      logger.info('[兑换码] 未获取到兑换码')
      return true
    }
    let codes = []

    for (let val of code.data.code_list) {
      if (val.code) {
        codes.push([val.code, segment.button([
          { text: '兑换', callback: `#兑换码使用${val.code}` },
        ])])
      }
    }

    let msg = [`兑换码过期时间: \n${this.deadline}`, ...codes]
    msg = await common.makeForwardMsg(this.e, msg, `${title}-直播兑换码`)
    await this.reply(msg)
  }

  async getData (type) {
    let url = {
      index: `https://api-takumi.mihoyo.com/event/miyolive/index`,
      code: `https://api-takumi-static.mihoyo.com/event/miyolive/refreshCode?version=${this.code_ver}&time=${this.now}`,
      actId: `https://bbs-api.mihoyo.com/painter/api/user_instant/list?offset=0&size=20&uid=${this.uid}`,
    }

    let response
    try {
      response = await fetch(url[type], {
        method: 'get',
        headers: {
          'x-rpc-act_id': this.actId
        }
      })
    } catch (error) {
      logger.error(error.toString())
      return false
    }

    if (!response.ok) {
      logger.error(`[兑换码接口错误][${type}] ${response.status} ${response.statusText}`)
      return false
    }
    const res = await response.json()
    return res
  }

  // 获取 "act_id"
  async getActId () {
    let ret = await this.getData('actId')
    if (ret.error || ret.retcode !== 0) {
      return ''
    }

    for (const p of ret.data.list) {
      let post
      try {
        post = p.post.post
      } catch (e) {
        logger.error('活动数据获取异常')
        logger.error(e)
      }
      if (!post) {
        continue
      }
      let date = new Date(post.created_at * 1000)
      date.setDate(date.getDate() + 3)
      this.deadline = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 12:00:00`
      let structured_content = post.structured_content
      let result = structured_content.match(/{\"link\":\"https:\/\/webstatic.mihoyo.com\/bbs\/event\/live\/index.html\?act_id=(.*?)\\/)
      if (result) {
        return result[1]
      }
    }
  }
}

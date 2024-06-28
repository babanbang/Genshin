import { Base, common } from "#MysTool/utils";
import { MysInfo } from "#MysTool/mys";

export default class DailyNote extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'dailyNote/note'
    this.mysInfo = new MysInfo(this.e, this.game)
  }

  async get () {
    const sendMsg = []
    const _reply = this.e.reply
    this.e.reply = (msg) => sendMsg.push(msg)

    sendMsg.push(...await this.getNoteImgs())

    if (sendMsg.length > 2) {
      this.e.replyForward(common.makeForward(sendMsg))
    } else {
      _reply(sendMsg)
    }
    return true
  }

  async getNoteImgs () {
    const ImgList = []
    const mysUsers = (await MysInfo.getMysUsers(this.e, this.game)).filter(mysUser => !mysUser.ck && !mysUser.sk)

    for (const mysUser of mysUsers) {
      const mys = mysUser.getCkData()
      const uids = mysUser.getUids(this.game)

      for (const uid of uids) {
        let data = {}
        mysInfo.setMysApi({
          uid, ...mys
        })
        if (mys.sk) {
          data = await this.getWidgetData()
        }
      }
    }

    return ImgList
  }

  async getWidgetData () {

  }
}
import { ApiTool, MysTool } from "#MysTool/mys"

ApiTool.setApiMap('gs', function (data) {
  return {
    /** 首页宝箱 */
    index: {
      url: `${MysTool.record_api}game_record/app/genshin/api/index`,
      query: `role_id=${this.uid}&server=${this.server}`
    },
    /** 角色详情 */
    character: {
      url: `${MysTool.record_api}game_record/app/genshin/api/character`,
      body: { role_id: this.uid, server: this.server }
    },
    /** 深渊 */
    spiralAbyss: {
      url: `${MysTool.record_api}game_record/app/genshin/api/spiralAbyss`,
      query: `role_id=${this.uid}&schedule_type=${data.schedule_type || 1}&server=${this.server}`
    },
    /** 详情 */
    detail: {
      url: `${MysTool.web_api}event/e20200928calculate/v1/sync/avatar/detail`,
      query: `uid=${this.uid}&region=${this.server}&avatar_id=${data.avatar_id}`
    },
    /** 札记 */
    ledger: {
      url: `${MysTool.hk4_api}event/ys_ledger/monthInfo`,
      query: `month=${data.month}&bind_uid=${this.uid}&bind_region=${this.server}`
    },
    /** 养成计算器 */
    compute: {
      url: `${MysTool.web_api}event/e20200928calculate/v3/batch_compute`,
      body: { items: data.body, region: this.server, uid: this.uid }
    },
    /** 角色技能 */
    avatarSkill: {
      url: `${MysTool.web_api}event/e20200928calculate/v1/avatarSkill/list`,
      query: `avatar_id=${data.avatar_id}`
    },
    gacha: {
      url: `${MysTool.hk4_gacha_api}gacha_info/api/getGachaLog`,
      query: `authkey_ver=1&lang=zh-cn&authkey=${data.authkey}&gacha_type=${data.gacha_type}&page=${data.page}&size=20&end_id=${data.end_id}&game_biz=${this.game_biz}`,
      HeaderType: 'noHeader'
    }
  }
}, 'mys')

ApiTool.setApiMap('gs', function (data) {
  return {
    /** 首页宝箱 */
    index: {
      url: `${MysTool.os_bbs_api}game_record/app/genshin/api/index`,
      query: `role_id=${this.uid}&server=${this.server}`
    },
    /** 角色详情 */
    character: {
      url: `${MysTool.os_bbs_api}game_record/app/genshin/api/character`,
      body: { role_id: this.uid, server: this.server }
    },
    /** 深渊 */
    spiralAbyss: {
      url: `${MysTool.os_bbs_api}game_record/app/genshin/api/spiralAbyss`,
      query: `role_id=${this.uid}&schedule_type=${data.schedule_type || 1}&server=${this.server}`
    },
    /** 详情 */
    detail: {
      url: `https://sg-public-api.hoyoverse.com/event/calculateos/sync/avatar/detail`,
      query: `uid=${this.uid}&region=${this.server}&avatar_id=${data.avatar_id}`
    },
    /** 札记 */
    ledger: {
      url: `${MysTool.os_hk4_api}event/ysledgeros/month_info`,
      query: `month=${data.month}&bind_uid=${this.uid}&bind_region=${this.server}`
    },
    /** 养成计算器 */
    compute: {
      url: `${MysTool.web_api}event/e20200928calculate/v3/batch_compute`,
      body: { ...data.body, region: this.server, uid: this.uid }
    },
    /** 角色技能 */
    avatarSkill: {
      url: `${MysTool.web_api}event/e20200928calculate/v1/avatarSkill/list`,
      query: `avatar_id=${data.avatar_id}`
    },
    gacha: {
      url: `${MysTool.os_hk4_api}gacha_info/api/getGachaLog`,
      query: `authkey_ver=1&lang=zh-cn&authkey=${data.authkey}&gacha_type=${data.gacha_type}&page=${data.page}&size=20&end_id=${data.end_id}&game_biz=${this.game_biz}`,
      HeaderType: 'noHeader'
    }
  }
}, 'hoyolab')
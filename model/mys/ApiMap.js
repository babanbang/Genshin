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
    gacha: {
      url: `${MysTool.hk4_gacha_api}gacha_info/api/getGachaLog`,
      query: `authkey_ver=1&lang=zh-cn&authkey=${data.authkey}&gacha_type=${data.gacha_type}&page=${data.page}&size=20&end_id=${data.end_id}&game_biz=${this.game_biz}`,
      HeaderType: 'noHeader'
    },
    combat: {
      url: `${MysTool.record_api}game_record/app/genshin/api/role_combat`,
      query: `need_detail=${data.detail}&role_id=${this.uid}&server=${this.server}`
    }
  }
}, 'mys')

ApiTool.setApiMap('gs', function (data) {
  return {
    /** 首页宝箱 */
    index: {
      url: `${MysTool.os_record_api}game_record/app/genshin/api/index`,
      query: `role_id=${this.uid}&server=${this.server}`
    },
    /** 角色详情 */
    character: {
      url: `${MysTool.os_record_api}game_record/app/genshin/api/character`,
      body: { role_id: this.uid, server: this.server }
    },
    /** 深渊 */
    spiralAbyss: {
      url: `${MysTool.os_record_api}game_record/app/genshin/api/spiralAbyss`,
      query: `role_id=${this.uid}&schedule_type=${data.schedule_type || 1}&server=${this.server}`
    },
    /** 详情 */
    detail: {
      url: `${MysTool.os_public_api}event/calculateos/sync/avatar/detail`,
      query: `uid=${this.uid}&region=${this.server}&avatar_id=${data.avatar_id}`
    },
    /** 札记 */
    ledger: {
      url: `${MysTool.os_hk4_api}event/ysledgeros/month_info`,
      query: `month=${data.month}&bind_uid=${this.uid}&bind_region=${this.server}`
    },
    gacha: {
      url: `${MysTool.os_hk4_api}gacha_info/api/getGachaLog`,
      query: `authkey_ver=1&lang=zh-cn&authkey=${data.authkey}&gacha_type=${data.gacha_type}&page=${data.page}&size=20&end_id=${data.end_id}&game_biz=${this.game_biz}`,
      HeaderType: 'noHeader'
    },
    combat: {
      url: `${MysTool.record_api}game_record/app/genshin/api/role_combat`,
      query: `need_detail=${data.detail}&role_id=${this.uid}&server=${this.server}`
    }
  }
}, 'hoyolab')

ApiTool.setApiMap('gs', function (data) {
  return {
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
    authKey: {
      url: `${MysTool.web_api}binding/api/genAuthKey`,
      body: {
        'auth_appid': data.auth_appid ?? 'webview_gacha',
        'game_biz': 'hk4e_cn',
        'game_uid': this.uid * 1,
        'region': this.server,
      },
      HeaderType: 'authKey'
    }
  }
}, 'other')
import { ReqCharList, ReqBaseAvatarInfo, ReqWeaponInfo } from "@/types";
import { defineMysApi, BaseMysResData, MysTool, NormalHeader, MysReq, GameList } from "karin-plugin-mystool";

const record_api = (type: string) => ((mysReq: MysReq<GameList>) => {
	if (mysReq.hoyolab) {
		return `${MysTool.os_record_api}game_record/genshin/api/${type}`
	} else {
		return `${MysTool.record_api}game_record/app/genshin/api/${type}`
	}
})

export const getIndex = defineMysApi<
	BaseMysResData & {
		data: {
			role: {
				nickname: string
				level: number
				/** 头像 */
				game_head_icon: string
			}
			avatars: ReqBaseAvatarInfo & {
				card_image: string
				is_chosen: boolean
			}[]
			stats: {
				/** 活跃天数 */
				active_day_number: number
				/** 成就数量 */
				achievement_number: number
				/** 风神瞳 */
				anemoculus_number: number
				/** 岩神瞳 */
				geoculus_number: number
				/** 获得角色数量 */
				avatar_number: number
				/** 解锁传送点 */
				way_point_number: number
				/** 解锁秘境 */
				domain_number: number
				/** 深渊 */
				spiral_abyss: string,
				/** 珍贵宝箱 */
				precious_chest_number: number
				/** 华丽宝箱 */
				luxurious_chest_number: number
				/** 精致宝箱 */
				exquisite_chest_number: number
				/** 普通宝箱 */
				common_chest_number: number
				/** 雷神瞳 */
				electroculus_number: number
				/** 奇馈宝箱 */
				magic_chest_number: number
				/** 草神瞳 */
				dendroculus_number: number
				/** 水神瞳 */
				hydroculus_number: number
				/** 火神瞳 */
				pyroculus_number: number
			}
			world_explorations: {
				name: string
				/** 声望等级 */
				level: number
				/** 总探索度 千分比 */
				exploration_percentage: number
				offerings?: {
					name: string
					level: number
				}[]
				area_exploration_list?: {
					name: string
					/** 区域探索度 千分比 */
					exploration_percentage: number
				}[]
				boss_list?: {
					name: string
					/** 击杀次数 */
					kill_num: number
				}[]
				/** 纳塔专属 */
				natan_reputation?: {
					tribal_list: {
						name: string
						level: number
					}[]
				}
				/** 七天神像等级 */
				seven_statue_level: number
			}[]
			homes: {
				name: string
				level: number
				/** 获得摆设数 */
				item_num: number
				/** 历史访客数 */
				visit_num: number
				/** 最高洞天仙力 */
				comfort_num: number
				comfort_level_name: string
			}[]
		}
	}
>(
	{
		urlKey: 'getIndex', Method: 'GET',
		url: record_api('index'),
		query: (mysReq, data) => `role_id=${mysReq.uid}&server=${mysReq.server.region}`,
		header: NormalHeader
	}
)

export const getCharList = defineMysApi<
	ReqCharList
>(
	{
		urlKey: 'getCharList', Method: 'POST',
		url: record_api('character/list'),
		body: (mysReq, data) => ({ role_id: mysReq.uid, server: mysReq.server.region, sort_type: 1 }),
		header: NormalHeader
	}
)

export const getSpiralAbyss = defineMysApi<
	BaseMysResData & {
		data: {}
	},
	{ type: number }
>(
	{
		urlKey: 'getSpiralAbyss', Method: 'GET',
		url: record_api('spiralAbyss'),
		query: (mysReq, data) => `role_id=${mysReq.uid}&schedule_type=${data.type}&server=${mysReq.server.region}`,
		header: NormalHeader
	}
)

export const getCharacterDetail = defineMysApi<
	BaseMysResData & {
		data: {
			list: {
				base: ReqBaseAvatarInfo
				weapon: ReqWeaponInfo & {
					/** 突破等级 */
					promote_level: number
				}
				/** 圣遗物 */
				relics: {
					id: number
					/** 位置 */
					pos: number
					level: number
					main_property: {
						property_type: number
						value: number
					}
					sub_property_list: {
						property_type: number
						value: string | number
						times: number
					}[]
				}[]
				costumes: {
					id: number
				}[]
				skills: {
					skill_id: number
					/** 2为固有天赋 */
					skill_type: 1 | 2
					level: number
				}[]
			}[]
		}
	},
	{ ids: string[] }
>(
	{
		urlKey: 'getCharacterDetail', Method: 'GET',
		url: record_api('character/detail'),
		body: (mysReq, data) => ({
			role_id: mysReq.uid,
			character_id: data.ids,
			server: mysReq.server.region
		}),
		header: NormalHeader
	}
)

export const getLedgerInfo = defineMysApi<
	BaseMysResData & {},
	{ month: number }
>(
	{
		urlKey: 'getLedgerInfo', Method: 'GET',
		url: (mysReq, data) => {
			if (mysReq.hoyolab) {
				return `${MysTool.os_public_api}event/calculateos/sync/avatar/detail`
			} else {
				return `${MysTool.hk4_api}event/ys_ledger/monthInfo`
			}
		},
		query: (mysReq, data) => `month=${data.month}&bind_uid=${mysReq.uid}&bind_region=${mysReq.server.region}`,
		header: NormalHeader
	}
)

export const getRoleCombat = defineMysApi<
	BaseMysResData & {
		data: {
			data: {
				detail: {
					rounds_data: {
						avatars: {
							avatar_id: number
							level: number
							/** 角色类型 1: 自己 2：试用 3：助演 */
							avatar_type: number
							element: string
						}[]
						/** 神秘收获 */
						choice_cards: {
							name: string
							desc: string
							icon: string
						}[]
						/** 奇妙助益 */
						buffs: {
							name: string
							desc: string
							icon: string
						}[]
						/** 完成时间戳 */
						finish_time: number
						/** 敌人详情 */
						enemies: {
							name: string
							level: number
							icon: string
						}[]
					}[]
					backup_avatars: {
						avatar_id: number
						level: number
						/** 角色类型 1: 自己 2：试用 3：助演 */
						avatar_type: number
						element: string
					}[]
					fight_statisic: {
						/** 击败最多敌人 */
						max_defeat_avatar: {
							avatar_id: number
							value: number
						}
						/** 单次最高伤害 */
						max_damage_avatar: {
							avatar_id: number
							value: number
						}
						/** 最高承受伤害 */
						max_take_damage_avatar: {
							avatar_id: number
							value: number
						}
						/** 消耗幻剧之花 */
						total_coin_consumed: {
							value: number
						}
						/** 最快完成演出队伍 */
						shortest_avatar_list: {
							avatar_id: number
						}[]
					}
					total_use_time: number
				}
				stat: {
					/** 难度模式 */
					difficulty_id: number
					/** 最高幕 */
					max_round_id: number
					/** 完成等级 */
					heraldry: number
					/** 明星挑战星章 顺序 */
					get_medal_round_list: (1 | 0)[]
					/** 幻剧之花数量 */
					coin_num: number
					/** 场外观众声援 */
					avatar_bonus_num: number
					/** 助演角色支援其他玩家 */
					rent_cnt: number
				}
				schedule: {
					start_time: number
					end_time: number
				}
				has_data: boolean
			}[]
		}
	},
	{ detail: boolean }
>(
	{
		urlKey: 'getRoleCombat', Method: 'GET',
		url: record_api('role_combat'),
		query: (mysReq, data) => `need_detail=${data.detail}&role_id=${mysReq.uid}&server=${mysReq.server.region}`,
		header: NormalHeader
	}
)

export const getDailyNote = defineMysApi<
	BaseMysResData & {
		data: {

		}
	}
>(
	{
		urlKey: 'getDailyNote', Method: 'GET',
		url: record_api('dailyNote'),
		query: (mysReq, data) => `role_id=${mysReq.uid}&server=${mysReq.server.region}`,
		header: NormalHeader
	}
)
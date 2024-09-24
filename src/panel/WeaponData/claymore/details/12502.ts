import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 狼的末路 */
export const metaData: WeaponDetailInfo = {
	desc: "狼的骑士所使的大剑。原本只是城中铁匠赠予的厚重的铁片，却在他与狼的情谊中，获得神话般的力量。",
	attr: {
		atk: new Map([
			["1", 45.94],
			["20", 121.73],
			["40", 235.2],
			["50", 308.42],
			["60", 382.43],
			["70", 456.99],
			["80", 532.23],
			["90", 608.07],
			["20+", 152.83],
			["40+", 266.3],
			["50+", 339.62],
			["60+", 413.53],
			["70+", 488.09],
			["80+", 563.33]
		]),
		bonusKey: AttrKeys.atk + "Pct",
		bonusData: new Map([
			["1", 10.8],
			["20", 19.08],
			["40", 27.81],
			["50", 32.17],
			["60", 36.54],
			["70", 40.89],
			["80", 45.25],
			["90", 49.62],
			["20+", 19.08],
			["40+", 27.81],
			["50+", 32.17],
			["60+", 36.54],
			["70+", 40.89],
			["80+", 45.25]
		])
	},
	materials: {
		[MaterialType.weapon]: "狮牙斗士的理想",
		[MaterialType.monster]: "混沌炉心",
		[MaterialType.normal]: "禁咒绘卷"
	},
	affixData: {
		title: "如狼般狩猎者",
		desc: "攻击力提高$[0]；攻击命中生命值低于30%的敌人时，队伍中所有成员的攻击力提高$[1]，持续12秒。该效果30秒只能触发一次。",
		datas: {
			"0": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			],
		"1": [
				"40%",
				"50%",
				"60%",
				"70%",
				"80%"
			]
		}
	}
}
import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 忍冬之果 */
export const metaData: WeaponDetailInfo = {
	desc: "具有某种冰冷意志的奇特果实，散发着微弱的苦涩气息。",
	attr: {
		atk: new Map([
			["1", 42.4],
			["20", 108.93],
			["40", 204.83],
			["50", 265.86],
			["60", 326.78],
			["70", 387.66],
			["80", 448.68],
			["90", 509.61],
			["20+", 134.83],
			["40+", 230.83],
			["50+", 291.76],
			["60+", 352.68],
			["70+", 413.66],
			["80+", 474.58]
		]),
		bonusKey: AttrKeys.atk + "Pct",
		bonusData: new Map([
			["1", 9],
			["20", 15.9],
			["40", 23.18],
			["50", 26.81],
			["60", 30.45],
			["70", 34.07],
			["80", 37.71],
			["90", 41.35],
			["20+", 15.9],
			["40+", 23.18],
			["50+", 26.81],
			["60+", 30.45],
			["70+", 34.07],
			["80+", 37.71]
		])
	},
	materials: {
		[MaterialType.weapon]: "狮牙斗士的理想",
		[MaterialType.monster]: "混沌炉心",
		[MaterialType.normal]: "原素花蜜"
	},
	affixData: {
		title: "霜葬",
		desc: "普通攻击与重击命中敌人时，有$[0]概率在敌人上方生成恒冰晶核并坠落，造成$[1]攻击力的范围伤害。若敌人处于冰元素影响下，则造成$[2]攻击力的伤害。该效果每10秒至多触发一次。",
		datas: {
			"0": [
				"60%",
				"70%",
				"80%",
				"90%",
				"100%"
			],
		"1": [
				"80%",
				"95%",
				"110%",
				"125%",
				"140%"
			],
		"2": [
				"200%",
				"240%",
				"280%",
				"320%",
				"360%"
			]
		}
	}
}
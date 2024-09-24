import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 宗室长弓 */
export const metaData: WeaponDetailInfo = {
	desc: "曾支配蒙德的旧日贵族的长弓。经过无数世代，弓弦仍十分有力，击发迅猛。",
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
		[MaterialType.normal]: "禁咒绘卷"
	},
	affixData: {
		title: "专注",
		desc: "攻击造成伤害时，暴击率提升$[0]，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。",
		datas: {
			"0": [
				"8%",
				"10%",
				"12%",
				"14%",
				"16%"
			]
		}
	}
}
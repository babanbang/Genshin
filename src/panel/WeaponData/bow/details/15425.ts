import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 静谧之曲 */
export const metaData: WeaponDetailInfo = {
	desc: "受到治疗后，造成的伤害提升16%，持续8秒。角色处于队伍后台也能触发。",
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
		[MaterialType.weapon]: "悠古弦音的回响",
		[MaterialType.monster]: "初生的浊水幻灵",
		[MaterialType.normal]: "历战的箭簇"
	},
	affixData: {
		title: "深海弦振",
		desc: "受到治疗后，造成的伤害提升$[0]，持续8秒。角色处于队伍后台也能触发。",
		datas: {
			"0": [
				"16%",
				"20%",
				"24%",
				"28%",
				"32%"
			]
		}
	}
}
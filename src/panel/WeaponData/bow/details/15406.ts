import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 试作澹月 */
export const metaData: WeaponDetailInfo = {
	desc: "黑岩厂中秘藏的原型长弓。放矢之姿有如透过薄暮的月光。",
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
		[MaterialType.weapon]: "雾海云间的转还",
		[MaterialType.monster]: "雾虚灯芯",
		[MaterialType.normal]: "攫金鸦印"
	},
	affixData: {
		title: "离簇不归",
		desc: "重击若命中要害，则提升10%移动速度与$[0]攻击力，持续10秒。",
		datas: {
			"0": [
				"36%",
				"45%",
				"54%",
				"63%",
				"72%"
			]
		}
	}
}
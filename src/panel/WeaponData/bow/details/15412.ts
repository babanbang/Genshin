import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 幽夜华尔兹 */
export const metaData: WeaponDetailInfo = {
	desc: "有着如同罪与幻想之夜一般颜色的弓。",
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
		bonusKey: AttrKeys.phy,
		bonusData: new Map([
			["1", 11.26],
			["20", 19.9],
			["40", 28.99],
			["50", 33.54],
			["60", 38.09],
			["70", 42.63],
			["80", 47.18],
			["90", 51.73],
			["20+", 19.9],
			["40+", 28.99],
			["50+", 33.54],
			["60+", 38.09],
			["70+", 42.63],
			["80+", 47.18]
		])
	},
	materials: {
		[MaterialType.weapon]: "高塔孤王的碎梦",
		[MaterialType.monster]: "黑晶号角",
		[MaterialType.normal]: "攫金鸦印"
	},
	affixData: {
		title: "极夜二重奏",
		desc: "普通攻击命中敌人后的5秒内，元素战技造成的伤害提升$[0]；元素战技命中敌人后的5秒内，普通攻击造成的伤害提升$[1]。",
		datas: {
			"0": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			],
		"1": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			]
		}
	}
}
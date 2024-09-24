import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 虹的行迹 */
export const metaData: WeaponDetailInfo = {
	desc: "以玉石锻成的锋锐长枪，在日耀中能隐隐映出虹色的光芒。",
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
		bonusKey: AttrKeys.def + "Pct",
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
		[MaterialType.weapon]: "谵妄圣主的神面",
		[MaterialType.monster]: "秘源真芯",
		[MaterialType.normal]: "龙冠武士的金哨"
	},
	affixData: {
		title: "流水与泉的约定",
		desc: "施放元素战技时，防御力提升$[0]，持续15秒。",
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
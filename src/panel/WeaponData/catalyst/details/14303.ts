import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 异世界行记 */
export const metaData: WeaponDetailInfo = {
	desc: "廉价的幻想小说，不具备参考价值。作为法器的力量当然也来自幻想。",
	attr: {
		atk: new Map([
			["1", 38.74],
			["20", 93.75],
			["40", 169.27],
			["50", 216.1],
			["60", 262.72],
			["70", 309.01],
			["80", 355.28],
			["90", 401.29],
			["20+", 113.25],
			["40+", 188.67],
			["50+", 235.6],
			["60+", 282.12],
			["70+", 328.51],
			["80+", 374.68]
		]),
		bonusKey: AttrKeys.recharge,
		bonusData: new Map([
			["1", 8.5],
			["20", 15.02],
			["40", 21.89],
			["50", 25.32],
			["60", 28.76],
			["70", 32.18],
			["80", 35.62],
			["90", 39.05],
			["20+", 15.02],
			["40+", 21.89],
			["50+", 25.32],
			["60+", 28.76],
			["70+", 32.18],
			["80+", 35.62]
		])
	},
	materials: {
		[MaterialType.weapon]: "狮牙斗士的理想",
		[MaterialType.monster]: "混沌炉心",
		[MaterialType.normal]: "不祥的面具"
	},
	affixData: {
		title: "能量沐浴",
		desc: "获得元素微粒或元素晶球时，恢复$[0]生命值。",
		datas: {
			"0": [
				"1%",
				"1.25%",
				"1.5%",
				"1.75%",
				"2%"
			]
		}
	}
}
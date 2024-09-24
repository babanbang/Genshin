import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 石英大剑 */
export const metaData: WeaponDetailInfo = {
	desc: "古朴厚重的大剑，由坚固的黑色石英雕琢打磨而成，上面有着鎏金的花纹，尽显优雅庄严。",
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
		bonusKey: AttrKeys.mastery,
		bonusData: new Map([
			["1", 30.6],
			["20", 54.07],
			["40", 78.8],
			["50", 91.16],
			["60", 103.52],
			["70", 115.85],
			["80", 128.21],
			["90", 140.58],
			["20+", 54.07],
			["40+", 78.8],
			["50+", 91.16],
			["60+", 103.52],
			["70+", 115.85],
			["80+", 128.21]
		])
	},
	materials: {
		[MaterialType.weapon]: "",
		[MaterialType.monster]: "",
		[MaterialType.normal]: ""
	},
	affixData: {
		title: "余热",
		desc: "触发超载、融化、燃烧、蒸发、烈绽放或火元素扩散反应后的12秒内，攻击力提高$[0]。",
		datas: {
			"0": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			]
		}
	}
}
import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 磐岩结绿 */
export const metaData: WeaponDetailInfo = {
	desc: "由纯净的翠玉精琢细雕而成的仪礼宝剑，挥舞时剑风中似有叹息之声。",
	attr: {
		atk: new Map([
			["1", 44.34],
			["20", 110.17],
			["40", 209.82],
			["50", 275.46],
			["60", 341.46],
			["70", 407.81],
			["80", 474.55],
			["90", 541.83],
			["20+", 141.27],
			["40+", 240.92],
			["50+", 306.66],
			["60+", 372.56],
			["70+", 438.91],
			["80+", 505.65]
		]),
		bonusKey: AttrKeys.cpct,
		bonusData: new Map([
			["1", 9.6],
			["20", 16.96],
			["40", 24.72],
			["50", 28.6],
			["60", 32.48],
			["70", 36.35],
			["80", 40.22],
			["90", 44.1],
			["20+", 16.96],
			["40+", 24.72],
			["50+", 28.6],
			["60+", 32.48],
			["70+", 36.35],
			["80+", 40.22]
		])
	},
	materials: {
		[MaterialType.weapon]: "雾海云间的转还",
		[MaterialType.monster]: "雾虚灯芯",
		[MaterialType.normal]: "攫金鸦印"
	},
	affixData: {
		title: "护国的无垢之心",
		desc: "生命值提升$[0]。此外，基于装备该武器的角色生命值上限的$[1]，获得攻击力加成。",
		datas: {
			"0": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			],
		"1": [
				"1.2%",
				"1.5%",
				"1.8%",
				"2.1%",
				"2.4%"
			]
		}
	}
}
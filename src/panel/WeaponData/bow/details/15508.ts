import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 若水 */
export const metaData: WeaponDetailInfo = {
	desc: "色泽流移难测的长弓，在光下显现着如水的润蓝。",
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
		bonusKey: AttrKeys.cdmg,
		bonusData: new Map([
			["1", 19.2],
			["20", 33.93],
			["40", 49.44],
			["50", 57.2],
			["60", 64.95],
			["70", 72.69],
			["80", 80.45],
			["90", 88.2],
			["20+", 33.93],
			["40+", 49.44],
			["50+", 57.2],
			["60+", 64.95],
			["70+", 72.69],
			["80+", 80.45]
		])
	},
	materials: {
		[MaterialType.weapon]: "孤云寒林的神体",
		[MaterialType.monster]: "幽邃刻像",
		[MaterialType.normal]: "浮游晶化核"
	},
	affixData: {
		title: "洗濯诸类之形",
		desc: "生命值提升$[0]。周围存在敌人时，装备该武器的角色造成的伤害都会提升$[1]，不论该角色处于场上或是处于队伍后台。",
		datas: {
			"0": [
				"16%",
				"20%",
				"24%",
				"28%",
				"32%"
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
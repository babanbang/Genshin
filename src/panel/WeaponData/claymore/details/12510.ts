import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 赤角石溃杵 */
export const metaData: WeaponDetailInfo = {
	desc: "依据过去的主人的说法，这是何等鬼怪精妖都能打跑的大杵「赤角石见石溃金涂金啮御狮子」。",
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
		[MaterialType.weapon]: "鸣神御灵的勇武",
		[MaterialType.monster]: "隐兽鬼爪",
		[MaterialType.normal]: "名刀镡"
	},
	affixData: {
		title: "御伽大王御伽话",
		desc: "防御力提高$[0]；普通攻击与重击造成的伤害值提高，提高数值相当于防御力的$[1]。",
		datas: {
			"0": [
				"28%",
				"35%",
				"42%",
				"49%",
				"56%"
			],
		"1": [
				"40%",
				"50%",
				"60%",
				"70%",
				"80%"
			]
		}
	}
}
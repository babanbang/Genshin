import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 有乐御簾切 */
export const metaData: WeaponDetailInfo = {
	desc: "曾由著名的风雅之士有乐斋亲自监制的名剑，传说在过去数百年间不尝斩过活物。",
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
		[MaterialType.weapon]: "远海夷地的金枝",
		[MaterialType.monster]: "混沌真眼",
		[MaterialType.normal]: "名刀镡"
	},
	affixData: {
		title: "锦之花与龛中剑",
		desc: "普通攻击造成的伤害提升$[0]，元素战技造成的伤害提升$[1]；队伍中附近的角色在场上造成岩元素伤害后，上述效果进一步提升100%，持续15秒。此外，装备者的防御力提升$[2]。",
		datas: {
			"0": [
				"16%",
				"20%",
				"24%",
				"28%",
				"32%"
			],
		"1": [
				"24%",
				"30%",
				"36%",
				"42%",
				"48%"
			],
		"2": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			]
		}
	}
}
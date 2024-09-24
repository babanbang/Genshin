import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 昭心 */
export const metaData: WeaponDetailInfo = {
	desc: "幽暗的琉璃宝珠，传说中拥有洞察人心清白的力量。",
	attr: {
		atk: new Map([
			["1", 41.07],
			["20", 99.26],
			["40", 183.68],
			["50", 238.34],
			["60", 292.62],
			["70", 346.65],
			["80", 400.66],
			["90", 454.36],
			["20+", 125.16],
			["40+", 209.68],
			["50+", 264.24],
			["60+", 318.52],
			["70+", 372.65],
			["80+", 426.56]
		]),
		bonusKey: AttrKeys.atk + "Pct",
		bonusData: new Map([
			["1", 12],
			["20", 21.2],
			["40", 30.9],
			["50", 35.75],
			["60", 40.6],
			["70", 45.43],
			["80", 50.28],
			["90", 55.13],
			["20+", 21.2],
			["40+", 30.9],
			["50+", 35.75],
			["60+", 40.6],
			["70+", 45.43],
			["80+", 50.28]
		])
	},
	materials: {
		[MaterialType.weapon]: "雾海云间的转还",
		[MaterialType.monster]: "雾虚灯芯",
		[MaterialType.normal]: "不祥的面具"
	},
	affixData: {
		title: "回响",
		desc: "普通攻击与重击命中时，有50%几率发射一枚昭心法球，造成$[0]攻击力伤害，至多在敌人之间弹射4次。该效果每$[1]秒至多触发一次。",
		datas: {
			"0": [
				"240%",
				"270%",
				"300%",
				"330%",
				"360%"
			],
		"1": [
				"12",
				"11",
				"10",
				"9",
				"8"
			]
		}
	}
}
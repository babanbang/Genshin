import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 斫峰之刃 */
export const metaData: WeaponDetailInfo = {
	desc: "传说中象征着某一则特定契约的利刃，曾经斩落过山岳的尖端。",
	attr: {
		atk: new Map([
			["1", 45.94],
			["20", 121.73],
			["40", 235.2],
			["50", 308.42],
			["60", 382.43],
			["70", 456.99],
			["80", 532.23],
			["90", 608.07],
			["20+", 152.83],
			["40+", 266.3],
			["50+", 339.62],
			["60+", 413.53],
			["70+", 488.09],
			["80+", 563.33]
		]),
		bonusKey: AttrKeys.atk + "Pct",
		bonusData: new Map([
			["1", 10.8],
			["20", 19.08],
			["40", 27.81],
			["50", 32.17],
			["60", 36.54],
			["70", 40.89],
			["80", 45.25],
			["90", 49.62],
			["20+", 19.08],
			["40+", 27.81],
			["50+", 32.17],
			["60+", 36.54],
			["70+", 40.89],
			["80+", 45.25]
		])
	},
	materials: {
		[MaterialType.weapon]: "孤云寒林的神体",
		[MaterialType.monster]: "督察长祭刀",
		[MaterialType.normal]: "不祥的面具"
	},
	affixData: {
		title: "金璋皇极",
		desc: "护盾强效提升$[0]。攻击命中后的8秒内，攻击力提升$[1]。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。",
		datas: {
			"0": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			],
		"1": [
				"4%",
				"5%",
				"6%",
				"7%",
				"8%"
			]
		}
	}
}
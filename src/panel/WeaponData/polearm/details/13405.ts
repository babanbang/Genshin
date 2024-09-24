import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 决斗之枪 */
export const metaData: WeaponDetailInfo = {
	desc: "血红色的锋利长枪，过去是某位角斗士无比珍视的宝物。枪芒上曾沾染了无数野兽与人的鲜血。",
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
		bonusKey: AttrKeys.cpct,
		bonusData: new Map([
			["1", 8],
			["20", 14.14],
			["40", 20.6],
			["50", 23.83],
			["60", 27.06],
			["70", 30.29],
			["80", 33.52],
			["90", 36.75],
			["20+", 14.14],
			["40+", 20.6],
			["50+", 23.83],
			["60+", 27.06],
			["70+", 30.29],
			["80+", 33.52]
		])
	},
	materials: {
		[MaterialType.weapon]: "凛风奔狼的怀乡",
		[MaterialType.monster]: "地脉的新芽",
		[MaterialType.normal]: "原素花蜜"
	},
	affixData: {
		title: "角斗士",
		desc: "身边至少有2个敌人时，获得$[0]攻击力提升与$[1]防御力提升；身边的敌人少于2个时，获得$[2]攻击力提升。",
		datas: {
			"0": [
				"16%",
				"20%",
				"24%",
				"28%",
				"32%"
			],
		"1": [
				"16%",
				"20%",
				"24%",
				"28%",
				"32%"
			],
		"2": [
				"24%",
				"30%",
				"36%",
				"42%",
				"48%"
			]
		}
	}
}
import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 天空之翼 */
export const metaData: WeaponDetailInfo = {
	desc: "象征风龙身为风之神眷属的大弓。释弦时的鸣声是风之神的偏爱，蕴含苍空与长风的力量。",
	attr: {
		atk: new Map([
			["1", 47.54],
			["20", 133.29],
			["40", 260.56],
			["50", 341.43],
			["60", 423.4],
			["70", 506.22],
			["80", 589.85],
			["90", 674.33],
			["20+", 164.39],
			["40+", 291.66],
			["50+", 372.63],
			["60+", 454.5],
			["70+", 537.32],
			["80+", 620.95]
		]),
		bonusKey: AttrKeys.cpct,
		bonusData: new Map([
			["1", 4.8],
			["20", 8.48],
			["40", 12.36],
			["50", 14.3],
			["60", 16.24],
			["70", 18.17],
			["80", 20.11],
			["90", 22.05],
			["20+", 8.48],
			["40+", 12.36],
			["50+", 14.3],
			["60+", 16.24],
			["70+", 18.17],
			["80+", 20.11]
		])
	},
	materials: {
		[MaterialType.weapon]: "凛风奔狼的怀乡",
		[MaterialType.monster]: "地脉的新芽",
		[MaterialType.normal]: "历战的箭簇"
	},
	affixData: {
		title: "回响长天的诗歌",
		desc: "暴击伤害提高$[0]；攻击命中时有$[1]概率造成125%攻击力的小范围物理伤害，该效果每$[2]秒只能触发一次。",
		datas: {
			"0": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			],
		"1": [
				"60%",
				"70%",
				"80%",
				"90%",
				"100%"
			],
		"2": [
				"4",
				"3.5",
				"3",
				"2.5",
				"2"
			]
		}
	}
}
import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 流浪乐章 */
export const metaData: WeaponDetailInfo = {
	desc: "记载着歌谱的厚重记事簿。尽管遭受了虫蛀和风化，残留的手迹仍透露出力量。",
	attr: {
		atk: new Map([
			["1", 42.4],
			["20", 108.93],
			["40", 204.83],
			["50", 265.86],
			["60", 326.78],
			["70", 387.66],
			["80", 448.68],
			["90", 509.61],
			["20+", 134.83],
			["40+", 230.83],
			["50+", 291.76],
			["60+", 352.68],
			["70+", 413.66],
			["80+", 474.58]
		]),
		bonusKey: AttrKeys.cdmg,
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
		[MaterialType.weapon]: "凛风奔狼的怀乡",
		[MaterialType.monster]: "地脉的新芽",
		[MaterialType.normal]: "不祥的面具"
	},
	affixData: {
		title: "登场乐",
		desc: "角色登场时，随机获得一个主题曲，持续10秒。每30秒只能触发一次。宣叙调：攻击力提升$[0]；咏叹调：全元素伤害提升$[1];间奏曲：元素精通提升$[2]。",
		datas: {
			"0": [
				"60%",
				"75%",
				"90%",
				"105%",
				"120%"
			],
		"1": [
				"48%",
				"60%",
				"72%",
				"84%",
				"96%"
			],
		"2": [
				"240",
				"300",
				"360",
				"420",
				"480"
			]
		}
	}
}
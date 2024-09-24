import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 雪葬的星银 */
export const metaData: WeaponDetailInfo = {
	desc: "储存在壁画之间的古老大剑。由星银铸成，似乎拥有斩开冰雪的力量。",
	attr: {
		atk: new Map([
			["1", 43.73],
			["20", 118.57],
			["40", 225.99],
			["50", 293.36],
			["60", 360.9],
			["70", 428.69],
			["80", 496.72],
			["90", 564.78],
			["20+", 144.47],
			["40+", 251.99],
			["50+", 319.26],
			["60+", 386.8],
			["70+", 454.69],
			["80+", 522.62]
		]),
		bonusKey: AttrKeys.phy,
		bonusData: new Map([
			["1", 7.51],
			["20", 13.26],
			["40", 19.33],
			["50", 22.36],
			["60", 25.4],
			["70", 28.42],
			["80", 31.45],
			["90", 34.49],
			["20+", 13.26],
			["40+", 19.33],
			["50+", 22.36],
			["60+", 25.4],
			["70+", 28.42],
			["80+", 31.45]
		])
	},
	materials: {
		[MaterialType.weapon]: "高塔孤王的碎梦",
		[MaterialType.monster]: "黑晶号角",
		[MaterialType.normal]: "史莱姆原浆"
	},
	affixData: {
		title: "霜葬",
		desc: "普通攻击与重击命中敌人时，有$[0]概率在敌人上方生成恒冰晶核并坠落，造成$[1]攻击力的范围伤害。若敌人处于冰元素影响下，则造成$[2]攻击力的伤害。该效果每10秒至多触发一次。",
		datas: {
			"0": [
				"60%",
				"70%",
				"80%",
				"90%",
				"100%"
			],
		"1": [
				"80%",
				"95%",
				"110%",
				"125%",
				"140%"
			],
		"2": [
				"200%",
				"240%",
				"280%",
				"320%",
				"360%"
			]
		}
	}
}
import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 原木刀 */
export const metaData: WeaponDetailInfo = {
	desc: "从兰那罗的故事中得到的武器。具有刀的形制，能够贯穿森林的敌人。",
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
		bonusKey: AttrKeys.recharge,
		bonusData: new Map([
			["1", 6.67],
			["20", 11.78],
			["40", 17.17],
			["50", 19.86],
			["60", 22.55],
			["70", 25.24],
			["80", 27.93],
			["90", 30.63],
			["20+", 11.78],
			["40+", 17.17],
			["50+", 19.86],
			["60+", 22.55],
			["70+", 25.24],
			["80+", 27.93]
		])
	},
	materials: {
		[MaterialType.weapon]: "谧林涓露的金符",
		[MaterialType.monster]: "混沌锚栓",
		[MaterialType.normal]: "织金红绸"
	},
	affixData: {
		title: "森林的瑞佑",
		desc: "触发燃烧、原激化、超激化、蔓激化、绽放、超绽放或烈绽放后，将在角色周围产生至多存在10秒的「种识之叶」。拾取种识之叶的角色元素精通提升$[0]点，持续12秒。每20秒至多通过这种方式产生一枚种识之叶。角色处于队伍后台时也能触发。种识之叶的效果无法叠加。",
		datas: {
			"0": [
				"60",
				"75",
				"90",
				"105",
				"120"
			]
		}
	}
}
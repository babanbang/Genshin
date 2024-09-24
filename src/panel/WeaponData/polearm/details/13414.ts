import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 喜多院十文字 */
export const metaData: WeaponDetailInfo = {
	desc: "曾经在八酝岛守望「祟神」的枪法名士所用的特殊长枪。",
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
		bonusKey: AttrKeys.mastery,
		bonusData: new Map([
			["1", 24],
			["20", 42.41],
			["40", 61.8],
			["50", 71.5],
			["60", 81.19],
			["70", 90.86],
			["80", 100.56],
			["90", 110.26],
			["20+", 42.41],
			["40+", 61.8],
			["50+", 71.5],
			["60+", 81.19],
			["70+", 90.86],
			["80+", 100.56]
		])
	},
	materials: {
		[MaterialType.weapon]: "今昔剧画之鬼人",
		[MaterialType.monster]: "混沌真眼",
		[MaterialType.normal]: "攫金鸦印"
	},
	affixData: {
		title: "名士振舞",
		desc: "元素战技造成的伤害提升$[0]。元素战技命中后，角色流失3点元素能量，并在此后的6秒内，每2秒恢复$[1]点元素能量。该效果每10秒至多触发一次，角色处于队伍后台也能触发。",
		datas: {
			"0": [
				"6%",
				"7.5%",
				"9%",
				"10.5%",
				"12%"
			],
		"1": [
				"3",
				"3.5",
				"4",
				"4.5",
				"5"
			]
		}
	}
}
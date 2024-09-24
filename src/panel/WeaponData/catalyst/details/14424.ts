import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 遗祀玉珑 */
export const metaData: WeaponDetailInfo = {
	desc: "处于队伍后台超过5秒后，生命值上限提升32%，元素精通提升40点。装备者登场并留在场上10秒后，该效果将失效。",
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
		[MaterialType.weapon]: "孤云寒林的神体",
		[MaterialType.monster]: "雾虚灯芯",
		[MaterialType.normal]: "禁咒绘卷"
	},
	affixData: {
		title: "碧玉流转",
		desc: "处于队伍后台超过5秒后，生命值上限提升$[0]，元素精通提升$[1]点。装备者登场并留在场上10秒后，该效果将失效。",
		datas: {
			"0": [
				"32%",
				"40%",
				"48%",
				"56%",
				"64%"
			],
		"1": [
				"40",
				"50",
				"60",
				"70",
				"80"
			]
		}
	}
}
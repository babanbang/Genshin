import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 匣里灭辰 */
export const metaData: WeaponDetailInfo = {
	desc: "金龙缠绕的长枪，轻快锐利无比。大抵真能轻易屠龙。",
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
		bonusKey: AttrKeys.mastery,
		bonusData: new Map([
			["1", 48],
			["20", 84.82],
			["40", 123.6],
			["50", 142.99],
			["60", 162.38],
			["70", 181.73],
			["80", 201.12],
			["90", 220.51],
			["20+", 84.82],
			["40+", 123.6],
			["50+", 142.99],
			["60+", 162.38],
			["70+", 181.73],
			["80+", 201.12]
		])
	},
	materials: {
		[MaterialType.weapon]: "雾海云间的转还",
		[MaterialType.monster]: "雾虚灯芯",
		[MaterialType.normal]: "禁咒绘卷"
	},
	affixData: {
		title: "踏火止水",
		desc: "对处于水元素或火元素影响下的敌人，造成的伤害提高$[0]。",
		datas: {
			"0": [
				"20%",
				"24%",
				"28%",
				"32%",
				"36%"
			]
		}
	}
}
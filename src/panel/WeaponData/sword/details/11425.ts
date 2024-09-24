import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 海渊终曲 */
export const metaData: WeaponDetailInfo = {
	desc: "施放元素战技时，攻击力提升12%，持续12秒，并赋予生命值上限25%的生命之契，该效果每10秒至多触发一次。生命之契清除时，基于清除值的2.4%提升至多150点攻击力，持续12秒。生命之契：基于其数值，吸收角色受到的治疗，在吸收了同等回复量数值的治疗后清除。",
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
		bonusKey: AttrKeys.atk + "Pct",
		bonusData: new Map([
			["1", 6],
			["20", 10.6],
			["40", 15.45],
			["50", 17.87],
			["60", 20.3],
			["70", 22.72],
			["80", 25.14],
			["90", 27.56],
			["20+", 10.6],
			["40+", 15.45],
			["50+", 17.87],
			["60+", 20.3],
			["70+", 22.72],
			["80+", 25.14]
		])
	},
	materials: {
		[MaterialType.weapon]: "纯圣露滴的真粹",
		[MaterialType.monster]: "初生的浊水幻灵",
		[MaterialType.normal]: "名刀镡"
	},
	affixData: {
		title: "最终的崇高",
		desc: "施放元素战技时，攻击力提升$[0]，持续12秒，并赋予生命值上限25%的生命之契，该效果每10秒至多触发一次。生命之契清除时，基于清除值的$[1]提升至多$[2]点攻击力，持续12秒。生命之契：基于其数值，吸收角色受到的治疗，在吸收了同等回复量数值的治疗后清除。",
		datas: {
			"0": [
				"12%",
				"15%",
				"18%",
				"21%",
				"24%"
			],
		"1": [
				"2.4%",
				"3%",
				"3.6%",
				"4.2%",
				"4.8%"
			],
		"2": [
				"150",
				"187.5",
				"225",
				"262.5",
				"300"
			]
		}
	}
}
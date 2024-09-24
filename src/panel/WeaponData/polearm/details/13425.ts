import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 公义的酬报 */
export const metaData: WeaponDetailInfo = {
	desc: "受到治疗时，恢复8点能量，该效果每10秒至多触发一次，角色处于队伍后台时也能触发。",
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
		bonusKey: AttrKeys.hp + "Pct",
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
		[MaterialType.weapon]: "无垢之海的金杯",
		[MaterialType.monster]: "异界生命核",
		[MaterialType.normal]: "奇械机芯齿轮"
	},
	affixData: {
		title: "枪尖一点",
		desc: "受到治疗时，恢复$[0]点能量，该效果每10秒至多触发一次，角色处于队伍后台时也能触发。",
		datas: {
			"0": [
				"8",
				"10",
				"12",
				"14",
				"16"
			]
		}
	}
}
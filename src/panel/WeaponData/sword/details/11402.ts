import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 笛剑 */
export const metaData: WeaponDetailInfo = {
	desc: "细剑的锈迹下透露出原本华丽的装饰，挥舞时轻若无物。",
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
		bonusKey: AttrKeys.atk + "Pct",
		bonusData: new Map([
			["1", 9],
			["20", 15.9],
			["40", 23.18],
			["50", 26.81],
			["60", 30.45],
			["70", 34.07],
			["80", 37.71],
			["90", 41.35],
			["20+", 15.9],
			["40+", 23.18],
			["50+", 26.81],
			["60+", 30.45],
			["70+", 34.07],
			["80+", 37.71]
		])
	},
	materials: {
		[MaterialType.weapon]: "凛风奔狼的怀乡",
		[MaterialType.monster]: "地脉的新芽",
		[MaterialType.normal]: "史莱姆原浆"
	},
	affixData: {
		title: "和弦",
		desc: "普通攻击或重击命中时，会获得一个和音。积攒了5个和音后，释放音律的力量，对周围的敌人造成$[0]攻击力的伤害。和音最多存在30秒，每0.5秒至多获得1个和音。",
		datas: {
			"0": [
				"100%",
				"125%",
				"150%",
				"175%",
				"200%"
			]
		}
	}
}
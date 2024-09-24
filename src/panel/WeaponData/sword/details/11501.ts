import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 风鹰剑 */
export const metaData: WeaponDetailInfo = {
	desc: "西风骑士团的灵魂。历经千年仍在呼唤你卷起正义之风，祓除奸邪，一如上一位挥舞此剑的女杰。",
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
		bonusKey: AttrKeys.phy,
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
		[MaterialType.weapon]: "高塔孤王的碎梦",
		[MaterialType.monster]: "黑晶号角",
		[MaterialType.normal]: "历战的箭簇"
	},
	affixData: {
		title: "西风之鹰的抗争",
		desc: "攻击力提高$[0]；受到伤害时触发：高扬抗争旗号的西风鹰之魂苏醒，恢复等同于攻击力的$[1]的生命值，并对周围的敌人造成$[2]攻击力的伤害。该效果每15秒只能触发一次。",
		datas: {
			"0": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			],
		"1": [
				"100%",
				"115%",
				"130%",
				"145%",
				"160%"
			],
		"2": [
				"200%",
				"230%",
				"260%",
				"290%",
				"320%"
			]
		}
	}
}
import { MaterialType, WeaponDetailInfo } from "@/types";

/** 银剑 */
export const metaData: WeaponDetailInfo = {
	desc: "能退魔的银剑。大家都知道，其实用料是银合金而不是纯银。",
	attr: {
		atk: new Map([
			["1", 32.93],
			["20", 79.69],
			["40", 139.01],
			["50", 173.92],
			["60", 208.67],
			["70", 243.23],
			["20+", 91.39],
			["40+", 150.61],
			["50+", 185.62],
			["60+", 220.37]
		]),
		bonusData: new Map([
			
		])
	},
	materials: {
		[MaterialType.weapon]: "高塔孤王的断片",
		[MaterialType.monster]: "黑铜号角",
		[MaterialType.normal]: "锐利的箭簇"
	},
	affixData: {
		title: "",
		desc: "",
		datas: {
			
		}
	}
}
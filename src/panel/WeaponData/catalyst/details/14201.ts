import { MaterialType, WeaponDetailInfo } from "@/types";

/** 口袋魔导书 */
export const metaData: WeaponDetailInfo = {
	desc: "精心编纂，只留下考试重点的魔导参考小册。",
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
		[MaterialType.normal]: "污秽的面具"
	},
	affixData: {
		title: "",
		desc: "",
		datas: {
			
		}
	}
}
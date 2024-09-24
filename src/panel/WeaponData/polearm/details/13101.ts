import { MaterialType, WeaponDetailInfo } from "@/types";

/** 新手长枪 */
export const metaData: WeaponDetailInfo = {
	desc: "笔直得像旗杆一般的长枪，挥舞起来颇具气势。足以应付大多数情况。",
	attr: {
		atk: new Map([
			["1", 23.25],
			["20", 56.25],
			["40", 101.57],
			["50", 129.62],
			["60", 157.59],
			["70", 185.43],
			["20+", 67.95],
			["40+", 113.17],
			["50+", 141.32],
			["60+", 169.29]
		]),
		bonusData: new Map([
			
		])
	},
	materials: {
		[MaterialType.weapon]: "狮牙斗士的镣铐",
		[MaterialType.monster]: "混沌回路",
		[MaterialType.normal]: "封魔绘卷"
	},
	affixData: {
		title: "",
		desc: "",
		datas: {
			
		}
	}
}
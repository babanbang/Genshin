import { MaterialType, WeaponDetailInfo } from "@/types";

/** 无锋剑 */
export const metaData: WeaponDetailInfo = {
	desc: "少年人的梦想、踏上旅途的兴奋——如果这两种珍贵的品质还不够锋利，那就用勇气补足吧。",
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
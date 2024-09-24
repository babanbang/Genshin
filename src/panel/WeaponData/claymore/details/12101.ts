import { MaterialType, WeaponDetailInfo } from "@/types";

/** 训练大剑 */
export const metaData: WeaponDetailInfo = {
	desc: "仅仅是削出了剑形的厚重铁片。在意志强韧的人手里，也有劈开磐石的力量。",
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
		[MaterialType.weapon]: "凛风奔狼的断牙",
		[MaterialType.monster]: "地脉的枯叶",
		[MaterialType.normal]: "史莱姆清"
	},
	affixData: {
		title: "",
		desc: "",
		datas: {
			
		}
	}
}
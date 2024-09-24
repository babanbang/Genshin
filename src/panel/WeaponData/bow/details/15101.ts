import { MaterialType, WeaponDetailInfo } from "@/types";

/** 猎弓 */
export const metaData: WeaponDetailInfo = {
	desc: "猎手演奏的音乐由两种音色组成。弓弦颤动的声音，和羽箭破空的低啸。",
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
		[MaterialType.normal]: "藏银鸦印"
	},
	affixData: {
		title: "",
		desc: "",
		datas: {
			
		}
	}
}
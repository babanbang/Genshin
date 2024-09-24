import { MaterialType, WeaponDetailInfo } from "@/types";

/** 历练的猎弓 */
export const metaData: WeaponDetailInfo = {
	desc: "饱经磨炼又精心护养的弓，经历了漫长的岁月。仿佛会主动配合射手的动作一般好使。",
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
import { MaterialType, WeaponDetailInfo } from "@/types";

/** 佣兵重剑 */
export const metaData: WeaponDetailInfo = {
	desc: "沉重坚实的古旧大剑，饱经战火与岁月的洗练。",
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
		[MaterialType.normal]: "史莱姆清"
	},
	affixData: {
		title: "",
		desc: "",
		datas: {
			
		}
	}
}
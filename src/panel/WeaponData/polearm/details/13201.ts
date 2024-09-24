import { MaterialType, WeaponDetailInfo } from "@/types";

/** 铁尖枪 */
export const metaData: WeaponDetailInfo = {
	desc: "一头有尖，可攻可守的护身武器。在旅者当中十分流行。",
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
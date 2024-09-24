import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 龙脊长枪 */
export const metaData: WeaponDetailInfo = {
	desc: "利用龙之牙制成的长枪。有着奇异的温暖触感。",
	attr: {
		atk: new Map([
			["1", 41.07],
			["20", 99.26],
			["40", 183.68],
			["50", 238.34],
			["60", 292.62],
			["70", 346.65],
			["80", 400.66],
			["90", 454.36],
			["20+", 125.16],
			["40+", 209.68],
			["50+", 264.24],
			["60+", 318.52],
			["70+", 372.65],
			["80+", 426.56]
		]),
		bonusKey: AttrKeys.phy,
		bonusData: new Map([
			["1", 15.01],
			["20", 26.53],
			["40", 38.66],
			["50", 44.72],
			["60", 50.79],
			["70", 56.84],
			["80", 62.91],
			["90", 68.97],
			["20+", 26.53],
			["40+", 38.66],
			["50+", 44.72],
			["60+", 50.79],
			["70+", 56.84],
			["80+", 62.91]
		])
	},
	materials: {
		[MaterialType.weapon]: "凛风奔狼的怀乡",
		[MaterialType.monster]: "雾虚灯芯",
		[MaterialType.normal]: "尉官的徽记"
	},
	affixData: {
		title: "霜葬",
		desc: "普通攻击与重击命中敌人时，有$[0]概率在敌人上方生成恒冰晶核并坠落，造成$[1]攻击力的范围伤害。若敌人处于冰元素影响下，则造成$[2]攻击力的伤害。该效果每10秒至多触发一次。",
		datas: {
			"0": [
				"60%",
				"70%",
				"80%",
				"90%",
				"100%"
			],
		"1": [
				"80%",
				"95%",
				"110%",
				"125%",
				"140%"
			],
		"2": [
				"200%",
				"240%",
				"280%",
				"320%",
				"360%"
			]
		}
	}
}
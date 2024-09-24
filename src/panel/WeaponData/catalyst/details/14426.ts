import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 无垠蔚蓝之歌 */
export const metaData: WeaponDetailInfo = {
	desc: "一本装帧精美的诗集，其中收录了不少有关天空、蒲公英等蒙德人偏爱的诗歌。",
	attr: {
		atk: new Map([
			["1", 43.73],
			["20", 118.57],
			["40", 225.99],
			["50", 293.36],
			["60", 360.9],
			["70", 428.69],
			["80", 496.72],
			["90", 564.78],
			["20+", 144.47],
			["40+", 251.99],
			["50+", 319.26],
			["60+", 386.8],
			["70+", 454.69],
			["80+", 522.62]
		]),
		bonusKey: AttrKeys.recharge,
		bonusData: new Map([
			["1", 6.67],
			["20", 11.78],
			["40", 17.17],
			["50", 19.86],
			["60", 22.55],
			["70", 25.24],
			["80", 27.93],
			["90", 30.63],
			["20+", 11.78],
			["40+", 17.17],
			["50+", 19.86],
			["60+", 22.55],
			["70+", 25.24],
			["80+", 27.93]
		])
	},
	materials: {
		[MaterialType.weapon]: "凛风奔狼的怀乡",
		[MaterialType.monster]: "石化的骨片",
		[MaterialType.normal]: "攫金鸦印"
	},
	affixData: {
		title: "蔚蓝深空",
		desc: "普通攻击或重击命中敌人后的6秒内，普通攻击造成的伤害提升$[0]，重击造成的伤害提升$[1]。该效果至多叠加3次，每0.3秒至多触发一次。",
		datas: {
			"0": [
				"8%",
				"10%",
				"12%",
				"14%",
				"16%"
			],
		"1": [
				"6%",
				"7.5%",
				"9%",
				"10.5%",
				"12%"
			]
		}
	}
}
import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 试作古华 */
export const metaData: WeaponDetailInfo = {
	desc: "黑岩厂中秘藏的古老大刀。挥舞时，仿佛连空间本身也要被一刀两断。",
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
		bonusKey: AttrKeys.atk + "Pct",
		bonusData: new Map([
			["1", 6],
			["20", 10.6],
			["40", 15.45],
			["50", 17.87],
			["60", 20.3],
			["70", 22.72],
			["80", 25.14],
			["90", 27.56],
			["20+", 10.6],
			["40+", 15.45],
			["50+", 17.87],
			["60+", 20.3],
			["70+", 22.72],
			["80+", 25.14]
		])
	},
	materials: {
		[MaterialType.weapon]: "漆黑陨铁的一块",
		[MaterialType.monster]: "石化的骨片",
		[MaterialType.normal]: "不祥的面具"
	},
	affixData: {
		title: "粉碎",
		desc: "普通攻击和重击命中时，有50%的概率对小范围内的敌人造成$[0]攻击力的额外伤害。该效果每15秒只能触发一次。",
		datas: {
			"0": [
				"240%",
				"300%",
				"360%",
				"420%",
				"480%"
			]
		}
	}
}
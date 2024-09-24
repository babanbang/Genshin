import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 勘探钻机 */
export const metaData: WeaponDetailInfo = {
	desc: "受到治疗或进行治疗时，将赋予一枚团结标记，持续30秒，至多拥有三枚团结标记。施放元素战技或元素爆发时，将消耗所有的团结标记，产生持续10秒的「抗争」效果：每枚消耗的团结标记提高3%攻击力与7%所有元素伤害加成。每15秒至多触发一次抗争效果；角色处于队伍后台时也能获得团结标记。",
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
		[MaterialType.weapon]: "悠古弦音的回响",
		[MaterialType.monster]: "役人的时时刻刻",
		[MaterialType.normal]: "奇械机芯齿轮"
	},
	affixData: {
		title: "石匠号子",
		desc: "受到治疗或进行治疗时，将赋予一枚团结标记，持续30秒，至多拥有三枚团结标记。施放元素战技或元素爆发时，将消耗所有的团结标记，产生持续10秒的「抗争」效果：每枚消耗的团结标记提高$[0]攻击力与$[1]所有元素伤害加成。每15秒至多触发一次抗争效果；角色处于队伍后台时也能获得团结标记。",
		datas: {
			"0": [
				"3%",
				"4%",
				"5%",
				"6%",
				"7%"
			],
		"1": [
				"7%",
				"8.5%",
				"10%",
				"11.5%",
				"13%"
			]
		}
	}
}
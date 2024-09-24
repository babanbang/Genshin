import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 图莱杜拉的回忆 */
export const metaData: WeaponDetailInfo = {
	desc: "深蓝宝石与纯银雕成的铃铛，回响之声清脆悠远。",
	attr: {
		atk: new Map([
			["1", 47.54],
			["20", 133.29],
			["40", 260.56],
			["50", 341.43],
			["60", 423.4],
			["70", 506.22],
			["80", 589.85],
			["90", 674.33],
			["20+", 164.39],
			["40+", 291.66],
			["50+", 372.63],
			["60+", 454.5],
			["70+", 537.32],
			["80+", 620.95]
		]),
		bonusKey: AttrKeys.cdmg,
		bonusData: new Map([
			["1", 9.6],
			["20", 16.96],
			["40", 24.72],
			["50", 28.6],
			["60", 32.48],
			["70", 36.35],
			["80", 40.22],
			["90", 44.1],
			["20+", 16.96],
			["40+", 24.72],
			["50+", 28.6],
			["60+", 32.48],
			["70+", 36.35],
			["80+", 40.22]
		])
	},
	materials: {
		[MaterialType.weapon]: "烈日威权的旧日",
		[MaterialType.monster]: "茁壮菌核",
		[MaterialType.normal]: "孢囊晶尘"
	},
	affixData: {
		title: "堙没的蓝宝石泪滴",
		desc: "普通攻击速度提升$[0]；施放元素战技后的14秒内：普通攻击造成的伤害每1秒提升$[1]；普通攻击命中敌人后，普通攻击造成的伤害提升$[2]，该效果每0.3秒至多触发1次。持续期间内，普通攻击造成的伤害至多通过上述效果提升至$[3]。角色退场时将移除效果，再次施放元素战技时会先移除原有的效果。",
		datas: {
			"0": [
				"10%",
				"12.5%",
				"15%",
				"17.5%",
				"20%"
			],
		"1": [
				"4.8%",
				"6%",
				"7.2%",
				"8.4%",
				"9.6%"
			],
		"2": [
				"9.6%",
				"12%",
				"14.4%",
				"16.8%",
				"19.2%"
			],
		"3": [
				"48%",
				"60%",
				"72%",
				"84%",
				"96%"
			]
		}
	}
}
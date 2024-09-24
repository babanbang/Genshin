import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 碎链 */
export const metaData: WeaponDetailInfo = {
	desc: "装饰着玉石的长弓，弦上似乎总是缠卷着轻柔的风。传说是在更古老的时代中由龙的工匠所锻。",
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
		[MaterialType.weapon]: "神合秘烟的启示",
		[MaterialType.monster]: "渊光鳍翅",
		[MaterialType.normal]: "横行霸者的利齿"
	},
	affixData: {
		title: "花与落羽的长歌",
		desc: "队伍中每有一名纳塔角色或与装备者元素类型不同的角色，装备者获得$[0]攻击力提升；上述角色不少于3名时，装备者的元素精通提升$[1]点。",
		datas: {
			"0": [
				"4.8%",
				"6%",
				"7.2%",
				"8.4%",
				"9.6%"
			],
		"1": [
				"24",
				"30",
				"36",
				"42",
				"48"
			]
		}
	}
}
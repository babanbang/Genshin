import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 松籁响起之时 */
export const metaData: WeaponDetailInfo = {
	desc: "如同翻弄草木的息吹一般轻盈的大剑，如同吹倒树木的飓风一般摧枯拉朽的武器。",
	attr: {
		atk: new Map([
			["1", 49.14],
			["20", 144.91],
			["40", 285.93],
			["50", 374.42],
			["60", 464.39],
			["70", 555.39],
			["80", 647.52],
			["90", 740.58],
			["20+", 176.01],
			["40+", 317.03],
			["50+", 405.62],
			["60+", 495.49],
			["70+", 586.49],
			["80+", 678.62]
		]),
		bonusKey: AttrKeys.phy,
		bonusData: new Map([
			["1", 4.5],
			["20", 7.95],
			["40", 11.59],
			["50", 13.41],
			["60", 15.22],
			["70", 17.04],
			["80", 18.86],
			["90", 20.67],
			["20+", 7.95],
			["40+", 11.59],
			["50+", 13.41],
			["60+", 15.22],
			["70+", 17.04],
			["80+", 18.86]
		])
	},
	materials: {
		[MaterialType.weapon]: "高塔孤王的碎梦",
		[MaterialType.monster]: "黑晶号角",
		[MaterialType.normal]: "不祥的面具"
	},
	affixData: {
		title: "揭旗的叛逆之歌",
		desc: "飘游风中的「千年的大乐章」的一部分。攻击力提高$[0]；普通攻击或重击命中敌人时，角色获得一枚低语之符，每0.3秒内至多触发一次。拥有4枚低语之符时，将消耗所有低语之符，使附近的队伍中所有角色获得持续12秒的「千年的大乐章·揭旗之歌」效果：普通攻击速度提高$[1]，攻击力提升$[2]。触发后20秒内，无法再次获得低语之符。「千年的大乐章」触发的多种数值效果中，同类数值效果不可叠加。",
		datas: {
			"0": [
				"16%",
				"20%",
				"24%",
				"28%",
				"32%"
			],
		"1": [
				"12%",
				"15%",
				"18%",
				"21%",
				"24%"
			],
		"2": [
				"20%",
				"25%",
				"30%",
				"35%",
				"40%"
			]
		}
	}
}
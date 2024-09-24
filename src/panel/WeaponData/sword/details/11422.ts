import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 东花坊时雨 */
export const metaData: WeaponDetailInfo = {
	desc: "稍微有些特别的油纸伞。尽管长久的旅行中已经习惯风雨，与之一同静赏雨景或许也有其中妙趣。",
	attr: {
		atk: new Map([
			["1", 42.4],
			["20", 108.93],
			["40", 204.83],
			["50", 265.86],
			["60", 326.78],
			["70", 387.66],
			["80", 448.68],
			["90", 509.61],
			["20+", 134.83],
			["40+", 230.83],
			["50+", 291.76],
			["60+", 352.68],
			["70+", 413.66],
			["80+", 474.58]
		]),
		bonusKey: AttrKeys.mastery,
		bonusData: new Map([
			["1", 36],
			["20", 63.61],
			["40", 92.7],
			["50", 107.24],
			["60", 121.79],
			["70", 136.3],
			["80", 150.84],
			["90", 165.38],
			["20+", 63.61],
			["40+", 92.7],
			["50+", 107.24],
			["60+", 121.79],
			["70+", 136.3],
			["80+", 150.84]
		])
	},
	materials: {
		[MaterialType.weapon]: "鸣神御灵的勇武",
		[MaterialType.monster]: "辉光棱晶",
		[MaterialType.normal]: "名刀镡"
	},
	affixData: {
		title: "怪谭·时雨心地一本足",
		desc: "攻击命中敌人后，会为命中的一名敌人施加「纸伞作祟」状态，持续10秒。该效果每15秒至多触发一次；持续期间该敌人被击败时，将清除该效果的冷却时间。装备者对处于「纸伞作祟」状态下的敌人造成的伤害提升$[0]。",
		datas: {
			"0": [
				"16%",
				"20%",
				"24%",
				"28%",
				"32%"
			]
		}
	}
}
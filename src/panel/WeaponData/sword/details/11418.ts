import { AttrKeys, MaterialType, WeaponDetailInfo } from "@/types";

/** 西福斯的月光 */
export const metaData: WeaponDetailInfo = {
	desc: "闪着月色光彩的古老双刃剑。据说其中寄寓着如今已经沉默的镇灵。",
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
		[MaterialType.weapon]: "谧林涓露的金符",
		[MaterialType.monster]: "辉光棱晶",
		[MaterialType.normal]: "织金红绸"
	},
	affixData: {
		title: "镇灵的低语",
		desc: "每10秒，产生如下效果：装备者的每点元素精通，都会为该角色提升$[0]元素充能效率，并基于该提升的30%为队伍中附近的其他角色提升元素充能效率，持续12秒，多件同名武器产生的此效果可以叠加。角色处于队伍后台时也能触发效果。",
		datas: {
			"0": [
				"0.036%",
				"0.045%",
				"0.054%",
				"0.063%",
				"0.072%"
			]
		}
	}
}
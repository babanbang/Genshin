import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 阿贝多 */
export const metaData = {
	info: {
		title: "白垩之子",
		allegiance: "西风骑士团",
		birth: "9-13",
		astro: "白垩之子座",
		desc: "西风骑士团首席炼金术士兼调查小队队长，被称做「白垩之子」的天才。",
		cncv: "Mace",
		jpcv: "野岛健儿",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 13226,
		[AttrKeys.atk]: 251.14,
		[AttrKeys.def]: 876.15
	},
	growAttr: {
		key: AttrKeys.dmg,
		value: 28.8
	},
	materials: {
		[MaterialType.gem]: "坚牢黄玉",
		[MaterialType.boss]: "玄岩之塔",
		[MaterialType.specialty]: "塞西莉亚花",
		[MaterialType.normal]: "禁咒绘卷",
		[MaterialType.talent]: "「诗文」的哲学",
		[MaterialType.weekly]: "吞天之鲸·只角"
	},
	talent: {
		[GsTalentType.a]: {
			id: 3831,
			name: "普通攻击·西风剑术·白",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续剑击。",
				"<h3>重击</h3>",
				"消耗一定体力，瞬间向前方挥出两剑。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"36.74%",
						"39.73%",
						"42.72%",
						"46.99%",
						"49.98%",
						"53.4%",
						"58.1%",
						"62.8%",
						"67.5%",
						"72.62%",
						"78.5%",
						"85.41%",
						"92.31%",
						"99.22%",
						"106.76%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"36.74%",
						"39.73%",
						"42.72%",
						"46.99%",
						"49.98%",
						"53.4%",
						"58.1%",
						"62.8%",
						"67.5%",
						"72.62%",
						"78.5%",
						"85.41%",
						"92.31%",
						"99.22%",
						"106.76%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"47.45%",
						"51.32%",
						"55.18%",
						"60.7%",
						"64.56%",
						"68.98%",
						"75.04%",
						"81.11%",
						"87.18%",
						"93.81%",
						"101.39%",
						"110.32%",
						"119.24%",
						"128.16%",
						"137.89%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"49.75%",
						"53.8%",
						"57.85%",
						"63.63%",
						"67.68%",
						"72.31%",
						"78.68%",
						"85.04%",
						"91.4%",
						"98.34%",
						"106.3%",
						"115.65%",
						"125.01%",
						"134.36%",
						"144.57%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"62.07%",
						"67.13%",
						"72.18%",
						"79.4%",
						"84.45%",
						"90.22%",
						"98.16%",
						"106.1%",
						"114.04%",
						"122.7%",
						"132.63%",
						"144.3%",
						"155.97%",
						"167.64%",
						"180.38%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"47.3% + 60.2%",
						"51.15% + 65.1%",
						"55% + 70%",
						"60.5% + 77%",
						"64.35% + 81.9%",
						"68.75% + 87.5%",
						"74.8% + 95.2%",
						"80.85% + 102.9%",
						"86.9% + 110.6%",
						"93.5% + 119%",
						"101.06% + 128.62%",
						"109.96% + 139.94%",
						"118.85% + 151.26%",
						"127.74% + 162.58%",
						"137.44% + 174.93%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"63.93%",
						"69.14%",
						"74.34%",
						"81.77%",
						"86.98%",
						"92.93%",
						"101.1%",
						"109.28%",
						"117.46%",
						"126.38%",
						"135.3%",
						"144.22%",
						"153.14%",
						"162.06%",
						"170.98%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"127.84% / 159.68%",
						"138.24% / 172.67%",
						"148.65% / 185.67%",
						"163.51% / 204.24%",
						"173.92% / 217.23%",
						"185.81% / 232.09%",
						"202.16% / 252.51%",
						"218.51% / 272.93%",
						"234.86% / 293.36%",
						"252.7% / 315.64%",
						"270.54% / 337.92%",
						"288.38% / 360.2%",
						"306.22% / 382.48%",
						"324.05% / 404.76%",
						"341.89% / 427.04%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 3832,
			name: "创生法·拟造阳华",
			desc: [
				"炼成阳华，造成岩元素范围伤害。",
				"<h3>阳华</h3>",
				"具有如下特性：",
				"·以阳华为中心的领域中的敌人受到伤害时，阳华将会生成刹那之花，绽放造成岩元素范围伤害，伤害基于阿贝多的防御力。",
				"·每2秒只能生成一次刹那之花。",
				"·角色处在阳华上时，阳华将会凝聚岩元素的力量，形成将角色托起至一定高度的晶台。同时只能存在一个晶台。",
				"·同时只能存在一个由阿贝多自己创造的阳华，视为岩元素创造物。",
				"<h3>长按</h3>",
				"可以调整技能生效位置。",
				"<i>这种岩花有着奇异的特性，和炼金术的目的一致。诞生自大地，却一直希望上升至高天，化作太阳。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"130.4%",
						"140.18%",
						"149.96%",
						"163%",
						"172.78%",
						"182.56%",
						"195.6%",
						"208.64%",
						"221.68%",
						"234.72%",
						"247.76%",
						"260.8%",
						"277.1%",
						"293.4%",
						"309.7%"
					]
				},
				{
					name: "刹那之花伤害",
					unit: "防御力",
					isSame: false,
					values: [
						"133.6%",
						"143.62%",
						"153.64%",
						"167%",
						"177.02%",
						"187.04%",
						"200.4%",
						"213.76%",
						"227.12%",
						"240.48%",
						"253.84%",
						"267.2%",
						"283.9%",
						"300.6%",
						"317.3%"
					]
				},
				{
					name: "持续时间",
					isSame: true,
					values: [
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒"
					]
				},
				{
					name: "技能冷却",
					isSame: true,
					values: [
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 3839,
			name: "诞生式·大地之潮",
			desc: [
				"岩晶在阿贝多的指示下涌动爆发，在阿贝多前方造成岩元素范围伤害。",
				"场上存在阿贝多自己创造的阳华时，会在阳华的领域内生成7朵生灭之花，猛烈绽放并造成岩元素范围伤害。",
				"爆发伤害与生灭之花的伤害不会生成刹那之花。",
				"<i>在白垩色王子的命令之下，大地的造物之潮翻涌了起来。</i>"
			],
			tables: [
				{
					name: "爆发伤害",
					isSame: false,
					values: [
						"367.2%",
						"394.74%",
						"422.28%",
						"459%",
						"486.54%",
						"514.08%",
						"550.8%",
						"587.52%",
						"624.24%",
						"660.96%",
						"697.68%",
						"734.4%",
						"780.3%",
						"826.2%",
						"872.1%"
					]
				},
				{
					name: "生灭之花伤害",
					unit: "每朵",
					isSame: false,
					values: [
						"72%",
						"77.4%",
						"82.8%",
						"90%",
						"95.4%",
						"100.8%",
						"108%",
						"115.2%",
						"122.4%",
						"129.6%",
						"136.8%",
						"144%",
						"153%",
						"162%",
						"171%"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				36.74,
				39.73,
				42.72,
				46.99,
				49.98,
				53.4,
				58.1,
				62.8,
				67.5,
				72.62,
				78.5,
				85.41,
				92.31,
				99.22,
				106.76
			],
			"二段伤害": [
				36.74,
				39.73,
				42.72,
				46.99,
				49.98,
				53.4,
				58.1,
				62.8,
				67.5,
				72.62,
				78.5,
				85.41,
				92.31,
				99.22,
				106.76
			],
			"三段伤害": [
				47.45,
				51.32,
				55.18,
				60.7,
				64.56,
				68.98,
				75.04,
				81.11,
				87.18,
				93.81,
				101.39,
				110.32,
				119.24,
				128.16,
				137.89
			],
			"四段伤害": [
				49.75,
				53.8,
				57.85,
				63.63,
				67.68,
				72.31,
				78.68,
				85.04,
				91.4,
				98.34,
				106.3,
				115.65,
				125.01,
				134.36,
				144.57
			],
			"五段伤害": [
				62.07,
				67.13,
				72.18,
				79.4,
				84.45,
				90.22,
				98.16,
				106.1,
				114.04,
				122.7,
				132.63,
				144.3,
				155.97,
				167.64,
				180.38
			],
			"重击伤害": [
				107.5,
				116.25,
				125,
				137.5,
				146.25,
				156.25,
				170,
				183.75,
				197.5,
				212.5,
				229.68,
				249.89999999999998,
				270.11,
				290.32,
				312.37
			],
			"重击伤害2": [
				[47.3, 60.2],
				[51.15, 65.1],
				[55, 70],
				[60.5, 77],
				[64.35, 81.9],
				[68.75, 87.5],
				[74.8, 95.2],
				[80.85, 102.9],
				[86.9, 110.6],
				[93.5, 119],
				[101.06, 128.62],
				[109.96, 139.94],
				[118.85, 151.26],
				[127.74, 162.58],
				[137.44, 174.93]
			],
			"下坠期间伤害": [
				63.93,
				69.14,
				74.34,
				81.77,
				86.98,
				92.93,
				101.1,
				109.28,
				117.46,
				126.38,
				135.3,
				144.22,
				153.14,
				162.06,
				170.98
			],
			"低空/高空坠地冲击伤害": [
				[127.84, 159.68],
				[138.24, 172.67],
				[148.65, 185.67],
				[163.51, 204.24],
				[173.92, 217.23],
				[185.81, 232.09],
				[202.16, 252.51],
				[218.51, 272.93],
				[234.86, 293.36],
				[252.7, 315.64],
				[270.54, 337.92],
				[288.38, 360.2],
				[306.22, 382.48],
				[324.05, 404.76],
				[341.89, 427.04]
			],
			"低空/高空坠地冲击伤害2": [
				[127.84, 159.68],
				[138.24, 172.67],
				[148.65, 185.67],
				[163.51, 204.24],
				[173.92, 217.23],
				[185.81, 232.09],
				[202.16, 252.51],
				[218.51, 272.93],
				[234.86, 293.36],
				[252.7, 315.64],
				[270.54, 337.92],
				[288.38, 360.2],
				[306.22, 382.48],
				[324.05, 404.76],
				[341.89, 427.04]
			]
		},
		[GsTalentType.e]: {
			"技能伤害": [
				130.4,
				140.18,
				149.96,
				163,
				172.78,
				182.56,
				195.6,
				208.64,
				221.68,
				234.72,
				247.76,
				260.8,
				277.1,
				293.4,
				309.7
			],
			"刹那之花伤害": [
				133.6,
				143.62,
				153.64,
				167,
				177.02,
				187.04,
				200.4,
				213.76,
				227.12,
				240.48,
				253.84,
				267.2,
				283.9,
				300.6,
				317.3
			]
		},
		[GsTalentType.q]: {
			"爆发伤害": [
				367.2,
				394.74,
				422.28,
				459,
				486.54,
				514.08,
				550.8,
				587.52,
				624.24,
				660.96,
				697.68,
				734.4,
				780.3,
				826.2,
				872.1
			],
			"生灭之花伤害": [
				72,
				77.4,
				82.8,
				90,
				95.4,
				100.8,
				108,
				115.2,
				122.4,
				129.6,
				136.8,
				144,
				153,
				162,
				171
			]
		}
	},
	cons: new Map([
		[1, {
			name: "伊甸之花",
			desc: [
				"阿贝多的创生法·拟造阳华生成的刹那之花绽放时，为阿贝多自己回复1.2点元素能量。"
			]
		}],
		[2, {
			name: "显生之宙",
			desc: [
				"创生法·拟造阳华的刹那之花绽放时，会为阿贝多赋予生灭计数效果，持续30秒：",
				"·施放诞生式·大地之潮时，清除所有生灭计数效果，并根据清除的层数，提高诞生式·大地之潮的爆发伤害与生灭之花造成的伤害；",
				"·每层生灭计数，会提高等同于阿贝多防御力的30%的伤害；",
				"·该效果至多叠加4次。"
			]
		}],
		[3, {
			name: "太阳之华",
			desc: [
				"创生法·拟造阳华的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "神性之陨",
			desc: [
				"处于阳华的领域中的队伍中当前场上角色，造成的下落攻击伤害提高30%。"
			]
		}],
		[5, {
			name: "冥古之潮",
			desc: [
				"诞生式·大地之潮的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "无垢之土",
			desc: [
				"处在阳华的领域中的队伍中当前场上角色，若处于结晶反应产生的护盾庇护下，造成的伤害提高17%。"
			]
		}]
	]),
	passive: [
		{
			name: "天才的发现",
			desc: [
				"合成武器突破素材时，有10%概率获得2倍产出。"
			],
		},
		{
			name: "白垩色的威压",
			desc: [
				"创生法·拟造阳华的刹那之花对生命值低于50%的敌人造成的伤害提高25%。"
			],
		},
		{
			name: "瓶中人的天慧",
			desc: [
				"施放诞生式·大地之潮时，使附近的队伍中角色的元素精通提高125点，持续10秒。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.dmg
		],
		details: new Map([
			["1", [1030, 19.55, 68.21, 0]],
			["20", [2671, 50.72, 176.93, 0]],
			["40", [5317, 100.97, 352.25, 0]],
			["50", [6839, 129.87, 453.07, 7.2]],
			["60", [8579, 162.91, 568.36, 14.4]],
			["70", [10119, 192.15, 670.34, 14.4]],
			["80", [11669, 221.57, 773.01, 21.6]],
			["90", [13226, 251.14, 876.15, 28.8]],
			["20+", [3554, 67.48, 235.41, 0]],
			["40+", [5944, 112.88, 393.8, 7.2]],
			["50+", [7675, 145.75, 508.47, 14.4]],
			["60+", [9207, 174.82, 609.91, 14.4]],
			["70+", [10746, 204.06, 711.9, 21.6]],
			["80+", [12296, 233.48, 814.56, 28.8]]
		])
	},
};
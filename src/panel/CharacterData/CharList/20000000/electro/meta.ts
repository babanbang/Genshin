import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType, GsElement } from "karin-plugin-mystool";

/** 旅行者 */
export const metaData = {
	info: {
		title: "异界的旅人",
		allegiance: "——",
		birth: "-",
		astro: "旅人座",
		desc: "从世界之外漂流而来的旅行者，被神带走血亲，自此踏上寻找七神之路。",
		cncv: "宴宁/鹿喑",
		jpcv: "悠木碧/堀江瞬",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 10875,
		[AttrKeys.atk]: 212.4,
		[AttrKeys.def]: 682.52
	},
	growAttr: {
		key: AttrKeys.atk + "Pct",
		value: 24
	},
	materials: {
		[MaterialType.gem]: "璀璨原钻",
		[MaterialType.specialty]: "风车菊",
		[MaterialType.normal]: "不祥的面具",
		[MaterialType.talent]: "「诗文」的哲学",
		[MaterialType.weekly]: "东风的吐息"
	},
	talent: {
		[GsTalentType.a]: {
			id: 1031,
			name: "普通攻击·异邦惊雷",
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
						"44.46%",
						"48.08%",
						"51.7%",
						"56.87%",
						"60.49%",
						"64.63%",
						"70.31%",
						"76%",
						"81.69%",
						"87.89%",
						"94.09%",
						"100.3%",
						"106.5%",
						"112.71%",
						"118.91%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"43.43%",
						"46.97%",
						"50.5%",
						"55.55%",
						"59.08%",
						"63.13%",
						"68.68%",
						"74.23%",
						"79.79%",
						"85.85%",
						"91.91%",
						"97.97%",
						"104.03%",
						"110.09%",
						"116.15%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"52.98%",
						"57.29%",
						"61.6%",
						"67.76%",
						"72.07%",
						"77%",
						"83.78%",
						"90.55%",
						"97.33%",
						"104.72%",
						"112.11%",
						"119.5%",
						"126.9%",
						"134.29%",
						"141.68%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"58.31%",
						"63.05%",
						"67.8%",
						"74.58%",
						"79.33%",
						"84.75%",
						"92.21%",
						"99.67%",
						"107.12%",
						"115.26%",
						"123.4%",
						"131.53%",
						"139.67%",
						"147.8%",
						"155.94%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"70.78%",
						"76.54%",
						"82.3%",
						"90.53%",
						"96.29%",
						"102.87%",
						"111.93%",
						"120.98%",
						"130.03%",
						"139.91%",
						"149.79%",
						"159.66%",
						"169.54%",
						"179.41%",
						"189.29%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"55.9% + 72.24%",
						"60.45% + 78.12%",
						"65% + 84%",
						"71.5% + 92.4%",
						"76.05% + 98.28%",
						"81.25% + 105%",
						"88.4% + 114.24%",
						"95.55% + 123.48%",
						"102.7% + 132.72%",
						"110.5% + 142.8%",
						"118.3% + 152.88%",
						"126.1% + 162.96%",
						"133.9% + 173.04%",
						"141.7% + 183.12%",
						"149.5% + 193.2%"
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
			id: 1032,
			name: "雷影剑",
			desc: [
				"斩出三道迅捷的雷影。雷影会对敌人造成雷元素伤害，并在命中敌人时，留下丰穰勾玉。",
				"初始至多产生2枚丰穰勾玉。施放技能时，会清除自己产生的丰穰勾玉。",
				"<h3>丰穰勾玉</h3>",
				"角色接近时，会吸收丰穰勾玉，获得以下效果：",
				"·恢复元素能量；",
				"·在持续时间内，提高元素充能效率。",
				"<i>和派蒙讨论过电的所有可能路径。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"78.66%",
						"84.56%",
						"90.46%",
						"98.33%",
						"104.23%",
						"110.13%",
						"118%",
						"125.86%",
						"133.73%",
						"141.6%",
						"149.46%",
						"157.33%",
						"167.16%",
						"176.99%",
						"186.83%"
					]
				},
				{
					name: "元素能量恢复",
					unit: "每个",
					isSame: false,
					values: [
						"3点",
						"3点",
						"3点",
						"3.5点",
						"3.5点",
						"3.5点",
						"4点",
						"4点",
						"4点",
						"4点",
						"4点",
						"4点",
						"4点",
						"4点",
						"4点"
					]
				},
				{
					name: "元素充能效率提升",
					isSame: true,
					values: [
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%",
						"20%"
					]
				},
				{
					name: "持续时间",
					isSame: true,
					values: [
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒"
					]
				},
				{
					name: "丰穰勾玉存在时间",
					isSame: true,
					values: [
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒",
						"13.5秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 1039,
			name: "雷轰电转",
			desc: [
				"唤来雷霆绕身的加护，击退周围的敌人并造成雷元素伤害。",
				"<h3>雷霆绕身</h3>",
				"当前场上自己角色的普通攻击或重击命中敌人时，会召唤威光落雷，对敌人造成雷元素伤害。",
				"威光落雷命中敌人时，会为该角色恢复元素能量。",
				"每0.5秒至多产生一次威光落雷。",
				"<i>和派蒙一起研究过丛云间忽闪的光。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"114.4%",
						"122.98%",
						"131.56%",
						"143%",
						"151.58%",
						"160.16%",
						"171.6%",
						"183.04%",
						"194.48%",
						"205.92%",
						"217.36%",
						"228.8%",
						"243.1%",
						"257.4%",
						"271.7%"
					]
				},
				{
					name: "威光落雷伤害",
					isSame: false,
					values: [
						"32.8%",
						"35.26%",
						"37.72%",
						"41%",
						"43.46%",
						"45.92%",
						"49.2%",
						"52.48%",
						"55.76%",
						"59.04%",
						"62.32%",
						"65.6%",
						"69.7%",
						"73.8%",
						"77.9%"
					]
				},
				{
					name: "元素能量恢复",
					isSame: false,
					values: [
						"0.8",
						"0.8",
						"0.8",
						"0.9",
						"0.9",
						"0.9",
						"1",
						"1",
						"1",
						"1",
						"1",
						"1",
						"1",
						"1",
						"1"
					]
				},
				{
					name: "持续时间",
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
					name: "冷却时间",
					isSame: true,
					values: [
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80"
					]
				}
			],
		}
	},
	talentElem: new Map([
		[10602, GsElement.electro],
		[10605, GsElement.electro]
	]),
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				44.46,
				48.08,
				51.7,
				56.87,
				60.49,
				64.63,
				70.31,
				76,
				81.69,
				87.89,
				94.09,
				100.3,
				106.5,
				112.71,
				118.91
			],
			"二段伤害": [
				43.43,
				46.97,
				50.5,
				55.55,
				59.08,
				63.13,
				68.68,
				74.23,
				79.79,
				85.85,
				91.91,
				97.97,
				104.03,
				110.09,
				116.15
			],
			"三段伤害": [
				52.98,
				57.29,
				61.6,
				67.76,
				72.07,
				77,
				83.78,
				90.55,
				97.33,
				104.72,
				112.11,
				119.5,
				126.9,
				134.29,
				141.68
			],
			"四段伤害": [
				58.31,
				63.05,
				67.8,
				74.58,
				79.33,
				84.75,
				92.21,
				99.67,
				107.12,
				115.26,
				123.4,
				131.53,
				139.67,
				147.8,
				155.94
			],
			"五段伤害": [
				70.78,
				76.54,
				82.3,
				90.53,
				96.29,
				102.87,
				111.93,
				120.98,
				130.03,
				139.91,
				149.79,
				159.66,
				169.54,
				179.41,
				189.29
			],
			"重击伤害": [
				128.14,
				138.57,
				149,
				163.9,
				174.32999999999998,
				186.25,
				202.64,
				219.03,
				235.42000000000002,
				253.3,
				271.18,
				289.06,
				306.94,
				324.82,
				342.7
			],
			"重击伤害2": [
				[55.9, 72.24],
				[60.45, 78.12],
				[65, 84],
				[71.5, 92.4],
				[76.05, 98.28],
				[81.25, 105],
				[88.4, 114.24],
				[95.55, 123.48],
				[102.7, 132.72],
				[110.5, 142.8],
				[118.3, 152.88],
				[126.1, 162.96],
				[133.9, 173.04],
				[141.7, 183.12],
				[149.5, 193.2]
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
				78.66,
				84.56,
				90.46,
				98.33,
				104.23,
				110.13,
				118,
				125.86,
				133.73,
				141.6,
				149.46,
				157.33,
				167.16,
				176.99,
				186.83
			],
			"元素能量恢复": [
				3,
				3,
				3,
				3.5,
				3.5,
				3.5,
				4,
				4,
				4,
				4,
				4,
				4,
				4,
				4,
				4
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				114.4,
				122.98,
				131.56,
				143,
				151.58,
				160.16,
				171.6,
				183.04,
				194.48,
				205.92,
				217.36,
				228.8,
				243.1,
				257.4,
				271.7
			],
			"威光落雷伤害": [
				32.8,
				35.26,
				37.72,
				41,
				43.46,
				45.92,
				49.2,
				52.48,
				55.76,
				59.04,
				62.32,
				65.6,
				69.7,
				73.8,
				77.9
			],
			"元素能量恢复": [
				0.8,
				0.8,
				0.8,
				0.9,
				0.9,
				0.9,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1
			]
		}
	},
	cons: new Map([
		[1, {
			name: "丰穰的春雷",
			desc: [
				"施放雷影剑能产生的丰穰勾玉数量提升至3枚。"
			]
		}],
		[2, {
			name: "震怒的苍雷",
			desc: [
				"雷轰电转的威光落雷命中敌人后，会使敌人的雷元素抗性降低15%，持续8秒。"
			]
		}],
		[3, {
			name: "连延的远雷",
			desc: [
				"雷轰电转的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "难测的云雷",
			desc: [
				"角色获取雷影剑产生的丰穰勾玉时，若该角色的当前元素能量低于35%，丰穰勾玉恢复的元素能量提高100%。"
			]
		}],
		[5, {
			name: "荒野的霆雷",
			desc: [
				"雷影剑的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "撼世的神雷",
			desc: [
				"雷轰电转每引发2次威光落雷，则大幅增强下一次威光落雷，造成原本200%的伤害，并为当前角色额外恢复1点元素能量。"
			]
		}]
	]),
	passive: [
		{
			name: "转瞬的迅雷",
			desc: [
				"队伍中附近的其他角色获取雷影剑产生的丰穰勾玉时，雷影剑的冷却时间减少1.5秒。"
			],
		},
		{
			name: "回响的轰雷",
			desc: [
				"基于旅行者自己元素充能效率的10%，提升雷影剑的丰穰勾玉提供的元素充能效率。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.atk + "Pct"
		],
		details: new Map([
			["1", [912, 17.81, 57.22, 0]],
			["20", [2342, 45.75, 147.01, 0]],
			["40", [4529, 88.45, 284.24, 0]],
			["50", [5766, 112.62, 361.88, 6]],
			["60", [7164, 139.93, 449.65, 12]],
			["70", [8401, 164.07, 527.24, 12]],
			["80", [9638, 188.24, 604.88, 18]],
			["90", [10875, 212.4, 682.52, 24]],
			["20+", [3024, 59.05, 189.76, 0]],
			["40+", [5013, 97.91, 314.61, 6]],
			["50+", [6411, 125.22, 402.38, 12]],
			["60+", [7648, 149.38, 480.03, 12]],
			["70+", [8885, 173.53, 557.61, 18]],
			["80+", [10122, 197.69, 635.25, 24]]
		])
	},
};
import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 珊瑚宫心海 */
export const metaData = {
	info: {
		title: "真珠之智",
		allegiance: "海祇岛",
		birth: "2-22",
		astro: "眠龙座",
		desc: "海祇岛的「现人神巫女」，统管海祇岛各项事宜的少女。",
		cncv: "龟娘",
		jpcv: "三森铃子",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 13471,
		[AttrKeys.atk]: 234.39,
		[AttrKeys.def]: 657.11
	},
	growAttr: {
		key: AttrKeys.dmg,
		value: 28.8
	},
	materials: {
		[MaterialType.gem]: "涤净青金",
		[MaterialType.boss]: "排异之露",
		[MaterialType.specialty]: "珊瑚真珠",
		[MaterialType.normal]: "浮游晶化核",
		[MaterialType.talent]: "「浮世」的哲学",
		[MaterialType.weekly]: "狱火之蝶"
	},
	talent: {
		[GsTalentType.a]: {
			id: 5431,
			name: "普通攻击·水有常形",
			desc: [
				"<h3>普通攻击</h3>",
				"以水元素幻造成的游鱼进行至多三段的攻击，造成水元素伤害。",
				"<h3>重击</h3>",
				"消耗一定体力，短暂咏唱后，造成水元素范围伤害。",
				"<h3>下落攻击</h3>",
				"凝聚水元素的力量，从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成水元素范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"68.38%",
						"73.5%",
						"78.63%",
						"85.47%",
						"90.6%",
						"95.73%",
						"102.56%",
						"109.4%",
						"116.24%",
						"123.08%",
						"129.91%",
						"136.75%",
						"145.3%",
						"153.85%",
						"162.39%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"61.54%",
						"66.15%",
						"70.77%",
						"76.92%",
						"81.54%",
						"86.15%",
						"92.31%",
						"98.46%",
						"104.62%",
						"110.77%",
						"116.92%",
						"123.08%",
						"130.77%",
						"138.46%",
						"146.15%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"94.31%",
						"101.38%",
						"108.45%",
						"117.88%",
						"124.95%",
						"132.03%",
						"141.46%",
						"150.89%",
						"160.32%",
						"169.75%",
						"179.18%",
						"188.61%",
						"200.4%",
						"212.19%",
						"223.98%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"148.32%",
						"159.44%",
						"170.57%",
						"185.4%",
						"196.52%",
						"207.65%",
						"222.48%",
						"237.31%",
						"252.14%",
						"266.98%",
						"281.81%",
						"296.64%",
						"315.18%",
						"333.72%",
						"352.26%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"56.83%",
						"61.45%",
						"66.08%",
						"72.69%",
						"77.31%",
						"82.6%",
						"89.87%",
						"97.14%",
						"104.41%",
						"112.34%",
						"120.27%",
						"128.2%",
						"136.12%",
						"144.05%",
						"151.98%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"113.63% / 141.93%",
						"122.88% / 153.49%",
						"132.13% / 165.04%",
						"145.35% / 181.54%",
						"154.59% / 193.1%",
						"165.16% / 206.3%",
						"179.7% / 224.45%",
						"194.23% / 242.61%",
						"208.77% / 260.76%",
						"224.62% / 280.57%",
						"240.48% / 300.37%",
						"256.34% / 320.18%",
						"272.19% / 339.98%",
						"288.05% / 359.79%",
						"303.9% / 379.59%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 5432,
			name: "海月之誓",
			desc: [
				"召唤能够治愈同伴的幻造水之生命「化海月」。",
				"施放的瞬间，为珊瑚宫心海施加潮湿状态。",
				"<h3>化海月</h3>",
				"每隔一段时间，对周围的敌人造成水元素伤害，并为周围的当前场上角色恢复生命值，回复量受益于珊瑚宫心海的生命值上限。",
				"<i>为了保持完美的工作状态，心海需要及时补充自己的「能量」。</i>"
			],
			tables: [
				{
					name: "治疗量",
					isSame: false,
					values: [
						"4.4%HP + 423.71",
						"4.73%HP + 466.08",
						"5.06%HP + 511.99",
						"5.5%HP + 561.43",
						"5.83%HP + 614.4",
						"6.16%HP + 670.9",
						"6.6%HP + 730.94",
						"7.04%HP + 794.5",
						"7.48%HP + 861.6",
						"7.92%HP + 932.22",
						"8.36%HP + 1006.38",
						"8.8%HP + 1084.07",
						"9.35%HP + 1165.3",
						"9.9%HP + 1250.05",
						"10.45%HP + 1338.33"
					]
				},
				{
					name: "波纹伤害",
					isSame: false,
					values: [
						"109.19%",
						"117.38%",
						"125.57%",
						"136.49%",
						"144.68%",
						"152.87%",
						"163.79%",
						"174.7%",
						"185.62%",
						"196.54%",
						"207.46%",
						"218.38%",
						"232.03%",
						"245.68%",
						"259.33%"
					]
				},
				{
					name: "存在时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 5439,
			name: "海人化羽",
			desc: [
				"请降海祇的力量，对周围的敌人造成水元素伤害，并披上珊瑚宫之水汇聚而成的「仪来羽衣」。",
				"<h3>仪来羽衣</h3>",
				"·增加珊瑚宫心海的普通攻击，重击以及元素战技的「化海月」造成的伤害，增加值基于珊瑚宫心海的生命值上限；",
				"·普通攻击和重击命中敌人时，为队伍中附近的所有角色恢复生命值，回复量受益于珊瑚宫心海的生命值上限；",
				"·提升珊瑚宫心海的抗打断能力，并使她能在水面上移动。",
				"效果将在珊瑚宫心海退场时解除。",
				"<i>萦绕在周身的清光化为羽衣，辉映着珊瑚宫大人的堂堂之姿。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"10.42%",
						"11.2%",
						"11.98%",
						"13.02%",
						"13.8%",
						"14.58%",
						"15.62%",
						"16.67%",
						"17.71%",
						"18.75%",
						"19.79%",
						"20.83%",
						"22.13%",
						"23.44%",
						"24.74%"
					]
				},
				{
					name: "普通攻击伤害提升",
					unit: "生命值上限",
					isSame: false,
					values: [
						"4.84%",
						"5.2%",
						"5.57%",
						"6.05%",
						"6.41%",
						"6.78%",
						"7.26%",
						"7.74%",
						"8.23%",
						"8.71%",
						"9.2%",
						"9.68%",
						"10.28%",
						"10.89%",
						"11.5%"
					]
				},
				{
					name: "重击伤害提升",
					unit: "生命值上限",
					isSame: false,
					values: [
						"6.78%",
						"7.28%",
						"7.79%",
						"8.47%",
						"8.98%",
						"9.49%",
						"10.16%",
						"10.84%",
						"11.52%",
						"12.2%",
						"12.87%",
						"13.55%",
						"14.4%",
						"15.25%",
						"16.09%"
					]
				},
				{
					name: "化海月伤害提升",
					unit: "生命值上限",
					isSame: false,
					values: [
						"7.1%",
						"7.63%",
						"8.16%",
						"8.87%",
						"9.4%",
						"9.93%",
						"10.64%",
						"11.35%",
						"12.06%",
						"12.77%",
						"13.48%",
						"14.19%",
						"15.08%",
						"15.97%",
						"16.85%"
					]
				},
				{
					name: "命中治疗量",
					isSame: false,
					values: [
						"0.81%HP + 77.04",
						"0.87%HP + 84.74",
						"0.93%HP + 93.09",
						"1.01%HP + 102.08",
						"1.07%HP + 111.71",
						"1.13%HP + 121.98",
						"1.21%HP + 132.9",
						"1.29%HP + 144.45",
						"1.37%HP + 156.65",
						"1.45%HP + 169.5",
						"1.54%HP + 182.98",
						"1.62%HP + 197.1",
						"1.72%HP + 211.87",
						"1.82%HP + 227.28",
						"1.92%HP + 243.33"
					]
				},
				{
					name: "持续时间",
					isSame: true,
					values: [
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				68.38,
				73.5,
				78.63,
				85.47,
				90.6,
				95.73,
				102.56,
				109.4,
				116.24,
				123.08,
				129.91,
				136.75,
				145.3,
				153.85,
				162.39
			],
			"二段伤害": [
				61.54,
				66.15,
				70.77,
				76.92,
				81.54,
				86.15,
				92.31,
				98.46,
				104.62,
				110.77,
				116.92,
				123.08,
				130.77,
				138.46,
				146.15
			],
			"三段伤害": [
				94.31,
				101.38,
				108.45,
				117.88,
				124.95,
				132.03,
				141.46,
				150.89,
				160.32,
				169.75,
				179.18,
				188.61,
				200.4,
				212.19,
				223.98
			],
			"重击伤害": [
				148.32,
				159.44,
				170.57,
				185.4,
				196.52,
				207.65,
				222.48,
				237.31,
				252.14,
				266.98,
				281.81,
				296.64,
				315.18,
				333.72,
				352.26
			],
			"下坠期间伤害": [
				56.83,
				61.45,
				66.08,
				72.69,
				77.31,
				82.6,
				89.87,
				97.14,
				104.41,
				112.34,
				120.27,
				128.2,
				136.12,
				144.05,
				151.98
			],
			"低空/高空坠地冲击伤害": [
				[113.63, 141.93],
				[122.88, 153.49],
				[132.13, 165.04],
				[145.35, 181.54],
				[154.59, 193.1],
				[165.16, 206.3],
				[179.7, 224.45],
				[194.23, 242.61],
				[208.77, 260.76],
				[224.62, 280.57],
				[240.48, 300.37],
				[256.34, 320.18],
				[272.19, 339.98],
				[288.05, 359.79],
				[303.9, 379.59]
			],
			"低空/高空坠地冲击伤害2": [
				[113.63, 141.93],
				[122.88, 153.49],
				[132.13, 165.04],
				[145.35, 181.54],
				[154.59, 193.1],
				[165.16, 206.3],
				[179.7, 224.45],
				[194.23, 242.61],
				[208.77, 260.76],
				[224.62, 280.57],
				[240.48, 300.37],
				[256.34, 320.18],
				[272.19, 339.98],
				[288.05, 359.79],
				[303.9, 379.59]
			]
		},
		[GsTalentType.e]: {
			"治疗量": [
				428.10999999999996,
				470.81,
				517.05,
				566.93,
				620.23,
				677.06,
				737.5400000000001,
				801.54,
				869.08,
				940.14,
				1014.74,
				1092.87,
				1174.6499999999999,
				1259.95,
				1348.78
			],
			"治疗量2": [
				[4.4, 423.71],
				[4.73, 466.08],
				[5.06, 511.99],
				[5.5, 561.43],
				[5.83, 614.4],
				[6.16, 670.9],
				[6.6, 730.94],
				[7.04, 794.5],
				[7.48, 861.6],
				[7.92, 932.22],
				[8.36, 1006.38],
				[8.8, 1084.07],
				[9.35, 1165.3],
				[9.9, 1250.05],
				[10.45, 1338.33]
			],
			"波纹伤害": [
				109.19,
				117.38,
				125.57,
				136.49,
				144.68,
				152.87,
				163.79,
				174.7,
				185.62,
				196.54,
				207.46,
				218.38,
				232.03,
				245.68,
				259.33
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				10.42,
				11.2,
				11.98,
				13.02,
				13.8,
				14.58,
				15.62,
				16.67,
				17.71,
				18.75,
				19.79,
				20.83,
				22.13,
				23.44,
				24.74
			],
			"普通攻击伤害提升": [
				4.84,
				5.2,
				5.57,
				6.05,
				6.41,
				6.78,
				7.26,
				7.74,
				8.23,
				8.71,
				9.2,
				9.68,
				10.28,
				10.89,
				11.5
			],
			"重击伤害提升": [
				6.78,
				7.28,
				7.79,
				8.47,
				8.98,
				9.49,
				10.16,
				10.84,
				11.52,
				12.2,
				12.87,
				13.55,
				14.4,
				15.25,
				16.09
			],
			"化海月伤害提升": [
				7.1,
				7.63,
				8.16,
				8.87,
				9.4,
				9.93,
				10.64,
				11.35,
				12.06,
				12.77,
				13.48,
				14.19,
				15.08,
				15.97,
				16.85
			],
			"命中治疗量": [
				77.85000000000001,
				85.61,
				94.02000000000001,
				103.09,
				112.77999999999999,
				123.11,
				134.11,
				145.73999999999998,
				158.02,
				170.95,
				184.51999999999998,
				198.72,
				213.59,
				229.1,
				245.25
			],
			"命中治疗量2": [
				[0.81, 77.04],
				[0.87, 84.74],
				[0.93, 93.09],
				[1.01, 102.08],
				[1.07, 111.71],
				[1.13, 121.98],
				[1.21, 132.9],
				[1.29, 144.45],
				[1.37, 156.65],
				[1.45, 169.5],
				[1.54, 182.98],
				[1.62, 197.1],
				[1.72, 211.87],
				[1.82, 227.28],
				[1.92, 243.33]
			]
		}
	},
	cons: new Map([
		[1, {
			name: "决水于溪",
			desc: [
				"处于海人化羽的仪来羽衣状态下时，珊瑚宫心海普通攻击的最后一击会额外释放一只游鱼，造成相当于珊瑚宫心海生命值上限30%的水元素伤害。",
				"该伤害不被视为普通攻击伤害。"
			]
		}],
		[2, {
			name: "波起云海",
			desc: [
				"基于珊瑚宫心海的生命值上限，珊瑚宫心海对生命值低于或等于50%的角色，通过以下途径进行治疗的回复量获得提升：",
				"·海月之誓的化海月：生命值上限的4.5%",
				"·海人化羽的普通攻击与重击：生命值上限的0.6%。"
			]
		}],
		[3, {
			name: "海渚月舟",
			desc: [
				"海人化羽的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "月摄千川",
			desc: [
				"处于海人化羽的仪来羽衣状态下时，珊瑚宫心海普通攻击的攻击速度提升10%，并会在普通攻击命中敌人时，恢复0.8点元素能量。",
				"该效果每0.2秒至多触发一次。"
			]
		}],
		[5, {
			name: "百川集海",
			desc: [
				"海月之誓的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "珊瑚一心",
			desc: [
				"处于海人化羽的仪来羽衣状态下时，珊瑚宫心海的普通攻击和重击对生命值高于或等于80%的角色进行治疗时，将获得40%水元素伤害加成，持续4秒。"
			]
		}]
	]),
	passive: [
		{
			name: "庙算无遗",
			desc: [
				"珊瑚宫心海的治疗加成提升25%，暴击率降低100%。"
			],
		},
		{
			name: "海祇姬君",
			desc: [
				"队伍中自己的角色游泳消耗的体力降低20%。",
				"无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "匣中玉栉",
			desc: [
				"施放海人化羽时，若场上有珊瑚宫心海自己的化海月，则重置化海月的存在时间。"
			],
		},
		{
			name: "真珠御呗",
			desc: [
				"处于海人化羽的仪来羽衣状态下时，珊瑚宫心海的普通攻击与重击基于生命值上限造成的伤害获得额外提升，提升程度相当于她的治疗加成的15%。"
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
			["1", [1049, 18.25, 51.15, 0]],
			["20", [2720, 47.33, 132.7, 0]],
			["40", [5416, 94.24, 264.18, 0]],
			["50", [6966, 121.21, 339.8, 7.2]],
			["60", [8738, 152.05, 426.27, 14.4]],
			["70", [10306, 179.34, 502.76, 14.4]],
			["80", [11885, 206.8, 579.76, 21.6]],
			["90", [13471, 234.39, 657.11, 28.8]],
			["20+", [3619, 62.98, 176.56, 0]],
			["40+", [6055, 105.35, 295.35, 7.2]],
			["50+", [7818, 136.03, 381.36, 14.4]],
			["60+", [9377, 163.17, 457.43, 14.4]],
			["70+", [10945, 190.45, 533.92, 21.6]],
			["80+", [12524, 217.92, 610.92, 28.8]]
		])
	},
};
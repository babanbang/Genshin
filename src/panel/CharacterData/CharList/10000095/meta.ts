import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 希格雯 */
export const metaData = {
	info: {
		title: "龙女妙变",
		allegiance: "梅洛彼得堡",
		birth: "3-30",
		astro: "海精座",
		desc: "梅洛彼得堡的美露莘护士长，平等地关爱着海底监牢中的每一名罪人。",
		cncv: "赵爽",
		jpcv: "木野日菜",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 13348,
		[AttrKeys.atk]: 192.54,
		[AttrKeys.def]: 499.56
	},
	growAttr: {
		key: AttrKeys.hp + "Pct",
		value: 28.8
	},
	materials: {
		[MaterialType.gem]: "涤净青金",
		[MaterialType.boss]: "未能达成超越之水",
		[MaterialType.specialty]: "海露花",
		[MaterialType.normal]: "异色结晶石",
		[MaterialType.talent]: "「公平」的哲学",
		[MaterialType.weekly]: "无光涡眼"
	},
	talent: {
		[GsTalentType.a]: {
			id: 9531,
			name: "普通攻击·靶向治疗",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多三段的连续攻击。",
				"<h3>重击</h3>",
				"进行伤害更高、更为精准的瞄准射击。",
				"瞄准时，水元素之力会在箭矢上持续积聚。蓄力完成后，每隔一段时间，希格雯会向目标方向发射缓慢移动的「小小关心气泡」，造成水元素伤害。释放时，聚满了激流的箭矢会在命中敌人时造成水元素伤害。",
				"<h3>下落攻击</h3>",
				"从空中射出箭雨，并迅速下坠冲击地面，在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"52.61%",
						"56.9%",
						"61.18%",
						"67.3%",
						"71.58%",
						"76.47%",
						"83.2%",
						"89.93%",
						"96.66%",
						"104%",
						"111.35%",
						"118.69%",
						"126.03%",
						"133.37%",
						"140.71%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"51.07%",
						"55.23%",
						"59.39%",
						"65.32%",
						"69.48%",
						"74.23%",
						"80.76%",
						"87.3%",
						"93.83%",
						"100.95%",
						"108.08%",
						"115.21%",
						"122.33%",
						"129.46%",
						"136.59%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"78.29%",
						"84.66%",
						"91.04%",
						"100.14%",
						"106.51%",
						"113.8%",
						"123.81%",
						"133.82%",
						"143.84%",
						"154.76%",
						"165.69%",
						"176.61%",
						"187.53%",
						"198.46%",
						"209.38%"
					]
				},
				{
					name: "瞄准射击",
					isSame: false,
					values: [
						"43.86%",
						"47.43%",
						"51%",
						"56.1%",
						"59.67%",
						"63.75%",
						"69.36%",
						"74.97%",
						"80.58%",
						"86.7%",
						"92.82%",
						"98.94%",
						"105.06%",
						"111.18%",
						"117.3%"
					]
				},
				{
					name: "满蓄力瞄准射击",
					isSame: false,
					values: [
						"114.08%",
						"122.64%",
						"142.6%",
						"155%",
						"151.16%",
						"159.71%",
						"171.12%",
						"182.53%",
						"193.94%",
						"205.34%",
						"216.75%",
						"228.16%",
						"242.42%",
						"256.68%",
						"270.94%"
					]
				},
				{
					name: "小小关心气泡伤害",
					isSame: false,
					values: [
						"22.82%",
						"24.53%",
						"28.52%",
						"31%",
						"30.23%",
						"31.94%",
						"34.22%",
						"36.51%",
						"38.79%",
						"41.07%",
						"43.35%",
						"45.63%",
						"48.48%",
						"51.34%",
						"54.19%"
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
						"165.17% / 206.3%",
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
			id: 9532,
			name: "弹跳水疗法",
			desc: [
				"使用梅洛彼得堡特制的泡泡枪，吹出既可以刺激血液循环、也可以让病人安心入睡的激愈水球。",
				"激愈水球将在附近的敌人间弹跳，命中敌人时基于希格雯的生命值上限，造成水元素伤害；弹跳时，为队伍中附近除希格雯自己外的所有角色恢复生命值，回复量受益于希格雯自己的生命值上限。",
				"进行5次弹跳后，激愈水球将消失，并基于希格雯的生命值上限为她恢复生命值。",
				"没有敌人时，激愈水球将在附近进行弹跳。至多同时存在一个希格雯自己创造的激愈水球。",
				"长按时，能蓄力施放激愈水球。",
				"<h3>长按</h3>",
				"进行瞄准蓄力，吹出更大更厉害的激愈水球！",
				"激愈水球将随长按时间变大，至多变大二级，每级将使造成的伤害提升5%，回复量提升5%；弹跳后将变小一个等级，直到恢复为正常的激愈水球。",
				"较弱的敌人被较大的激愈水球命中后会被禁锢，无法行动。",
				"此外，施放时将在希格雯附近产生2枚源水之滴。每拾取一枚源水之滴，都会为希格雯自己赋予生命值上限10%的生命之契。",
				"希格雯的生命之契被清除时，每清除2000点生命之契将为她恢复1点元素能量，至多通过这种方式为希格雯自己恢复5点元素能量。",
				"<h3>始基力：荒性</h3>",
				"每隔一段时间，激愈水球将在命中的位置降下流涌之刃，基于希格雯的生命值上限，造成具有荒性的水元素伤害。",
				"<i>「怎么样，用这样的水疗法，既能刺激循环，又能让复健的病人感受到乐趣，而且，也会让应该睡着的病人好好睡一会儿呢…」</i>"
			],
			tables: [
				{
					name: "激愈水球伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"2.28%",
						"2.45%",
						"2.62%",
						"2.85%",
						"3.02%",
						"3.19%",
						"3.42%",
						"3.65%",
						"3.88%",
						"4.1%",
						"4.33%",
						"4.56%",
						"4.85%",
						"5.13%",
						"5.42%"
					]
				},
				{
					name: "激愈水球治疗量",
					isSame: false,
					values: [
						"2.8%HP + 269.63",
						"3.01%HP + 296.6",
						"3.22%HP + 325.81",
						"3.5%HP + 357.27",
						"3.71%HP + 390.98",
						"3.92%HP + 426.94",
						"4.2%HP + 465.14",
						"4.48%HP + 505.59",
						"4.76%HP + 548.29",
						"5.04%HP + 593.23",
						"5.32%HP + 640.43",
						"5.6%HP + 689.87",
						"5.95%HP + 741.55",
						"6.3%HP + 795.49",
						"6.65%HP + 851.67"
					]
				},
				{
					name: "弹跳结束治疗量",
					unit: "生命值上限",
					isSame: false,
					values: [
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%",
						"50%"
					]
				},
				{
					name: "流涌之刃伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"0.68%",
						"0.74%",
						"0.79%",
						"0.86%",
						"0.91%",
						"0.96%",
						"1.03%",
						"1.09%",
						"1.16%",
						"1.23%",
						"1.3%",
						"1.37%",
						"1.45%",
						"1.54%",
						"1.62%"
					]
				},
				{
					name: "流涌之刃间隔",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 9539,
			name: "过饱和心意注射",
			desc: [
				"取出梅洛彼得堡特制的注射器，以满满的心意与药剂冲击前方区域，基于希格雯的生命值上限，持续造成水元素范围伤害。",
				"此外，施放时，希格雯将吸收附近一定范围内至多2枚源水之滴。",
				"<i>「啊呀，超过剂量的药与毒无异，可是很危险的，但是病人需要的关心与爱护，不管超过多少也不为过哦。」</i>"
			],
			tables: [
				{
					name: "技能伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"11.77%",
						"12.65%",
						"13.54%",
						"14.71%",
						"15.6%",
						"16.48%",
						"17.66%",
						"18.83%",
						"20.01%",
						"21.19%",
						"22.36%",
						"23.54%",
						"25.01%",
						"26.48%",
						"27.96%"
					]
				},
				{
					name: "持续时间",
					isSame: true,
					values: [
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒"
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
				52.61,
				56.9,
				61.18,
				67.3,
				71.58,
				76.47,
				83.2,
				89.93,
				96.66,
				104,
				111.35,
				118.69,
				126.03,
				133.37,
				140.71
			],
			"二段伤害": [
				51.07,
				55.23,
				59.39,
				65.32,
				69.48,
				74.23,
				80.76,
				87.3,
				93.83,
				100.95,
				108.08,
				115.21,
				122.33,
				129.46,
				136.59
			],
			"三段伤害": [
				78.29,
				84.66,
				91.04,
				100.14,
				106.51,
				113.8,
				123.81,
				133.82,
				143.84,
				154.76,
				165.69,
				176.61,
				187.53,
				198.46,
				209.38
			],
			"瞄准射击": [
				43.86,
				47.43,
				51,
				56.1,
				59.67,
				63.75,
				69.36,
				74.97,
				80.58,
				86.7,
				92.82,
				98.94,
				105.06,
				111.18,
				117.3
			],
			"满蓄力瞄准射击": [
				114.08,
				122.64,
				142.6,
				155,
				151.16,
				159.71,
				171.12,
				182.53,
				193.94,
				205.34,
				216.75,
				228.16,
				242.42,
				256.68,
				270.94
			],
			"小小关心气泡伤害": [
				22.82,
				24.53,
				28.52,
				31,
				30.23,
				31.94,
				34.22,
				36.51,
				38.79,
				41.07,
				43.35,
				45.63,
				48.48,
				51.34,
				54.19
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
				[165.17, 206.3],
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
				[165.17, 206.3],
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
			"激愈水球伤害": [
				2.28,
				2.45,
				2.62,
				2.85,
				3.02,
				3.19,
				3.42,
				3.65,
				3.88,
				4.1,
				4.33,
				4.56,
				4.85,
				5.13,
				5.42
			],
			"激愈水球治疗量": [
				272.43,
				299.61,
				329.03000000000003,
				360.77,
				394.69,
				430.86,
				469.34,
				510.07,
				553.05,
				598.27,
				645.75,
				695.47,
				747.5,
				801.79,
				858.3199999999999
			],
			"激愈水球治疗量2": [
				[2.8, 269.63],
				[3.01, 296.6],
				[3.22, 325.81],
				[3.5, 357.27],
				[3.71, 390.98],
				[3.92, 426.94],
				[4.2, 465.14],
				[4.48, 505.59],
				[4.76, 548.29],
				[5.04, 593.23],
				[5.32, 640.43],
				[5.6, 689.87],
				[5.95, 741.55],
				[6.3, 795.49],
				[6.65, 851.67]
			],
			"弹跳结束治疗量": [
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50,
				50
			],
			"流涌之刃伤害": [
				0.68,
				0.74,
				0.79,
				0.86,
				0.91,
				0.96,
				1.03,
				1.09,
				1.16,
				1.23,
				1.3,
				1.37,
				1.45,
				1.54,
				1.62
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				11.77,
				12.65,
				13.54,
				14.71,
				15.6,
				16.48,
				17.66,
				18.83,
				20.01,
				21.19,
				22.36,
				23.54,
				25.01,
				26.48,
				27.96
			]
		}
	},
	cons: new Map([
		[1, {
			name: "「最快乐的精灵，可否懂得焦虑」",
			desc: [
				"弹跳水疗法的激愈水球能额外弹跳3次；前3次弹跳不会使较大激愈水球变小。",
				"此外，固有天赋「应有适当的休憩」的效果获得提升：激愈水球弹跳时，将为希格雯赋予1层静养计数，并使静养计数产生的伤害值提升改为：希格雯的生命值上限超过30000的部分，每1000点生命值上限将提升100点，通过这种方式，至多提升3500点伤害。此效果需要解锁固有天赋「应有适当的休憩」。"
			]
		}],
		[2, {
			name: "「最仁慈的精灵，可否化解仇敌」",
			desc: [
				"施放弹跳水疗法与过饱和心意注射时，将生成一个伤害吸收量等同于生命值上限30%的水球护盾，对水元素伤害有250%的吸收效果，持续直到施放完成。",
				"此外，弹跳水疗法抛出的激愈水球或过饱和心意注射命中敌人后，该敌人的水元素抗性降低35%，持续8秒。"
			]
		}],
		[3, {
			name: "「最健康的精灵，可否疗愈热症」",
			desc: [
				"弹跳水疗法的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "「最美丽的精灵，可否拒绝衰朽」",
			desc: [
				"过饱和心意注射的持续时间延长3秒。"
			]
		}],
		[5, {
			name: "「最幸福的精灵，可否消却折磨」",
			desc: [
				"过饱和心意注射的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "「最光辉的精灵，可否为我祷告」",
			desc: [
				"希格雯进行治疗时，将基于生命值上限，提升自己的过饱和心意注射的暴击率和暴击伤害：每1000点生命值上限都将提升0.4%暴击率与2.2%暴击伤害，持续15秒。至多通过这种方式提升20%暴击率与110%暴击伤害。"
			]
		}]
	]),
	passive: [
		{
			name: "急性剂量",
			desc: [
				"在水下时，当前场上自己的角色的生命值降低至50%以下时，将在2.5秒内为其持续恢复生命值，总回复量相当于其生命值上限的50%，并在10秒内使该角色的所有元素抗性和物理抗性下降10%。该效果每20秒最多触发一次。"
			],
		},
		{
			name: "应有适当的休憩",
			desc: [
				"施放弹跳水疗法时，希格雯将为自己施加持续18秒的「半强制静养」效果：持续期间，希格雯获得8%水元素伤害加成与10层静养计数，除希格雯外附近队伍中处于后台的角色的元素战技造成伤害时，将消耗1层静养计数，提升此次元素战技造成的伤害值：希格雯的生命值上限超过30000的部分，每1000点生命值上限将提升80点伤害，通过这种方式，至多使本次元素战技造成的伤害提升2800点。"
			],
		},
		{
			name: "细致入微的诊疗",
			desc: [
				"希格雯进行治疗时，将基于队伍中所有角色当前生命之契的总和，提升本次治疗量：每1000点生命之契都将提升3%治疗量，至多通过这种方式提升30%治疗量。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.hp + "Pct"
		],
		details: new Map([
			["1", [1039, 14.99, 38.89, 0]],
			["20", [2695, 38.88, 100.88, 0]],
			["40", [5366, 77.41, 200.84, 0]],
			["50", [6902, 99.57, 258.33, 7.2]],
			["60", [8659, 124.9, 324.06, 14.4]],
			["70", [10213, 147.31, 382.21, 14.4]],
			["80", [11777, 169.87, 440.75, 21.6]],
			["90", [13348, 192.54, 499.56, 28.8]],
			["20+", [3586, 51.73, 134.22, 0]],
			["40+", [5999, 86.54, 224.53, 7.2]],
			["50+", [7747, 111.74, 289.92, 14.4]],
			["60+", [9292, 134.03, 347.76, 14.4]],
			["70+", [10846, 156.44, 405.91, 21.6]],
			["80+", [12410, 179, 464.44, 28.8]]
		])
	},
};
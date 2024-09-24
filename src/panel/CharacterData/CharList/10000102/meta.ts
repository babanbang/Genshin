import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 玛拉妮 */
export const metaData = {
    info: {
		title: "哗啦啦逐浪客",
		allegiance: "梅兹特利",
		birth: "8-3",
		astro: "浪海豹座",
		desc: "纳塔远近闻名的向导，水上用品商店的经营者，精通各类水上运动的逐浪客。",
		cncv: "王晓彤",
		jpcv: "东山奈央",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 15185,
		[AttrKeys.atk]: 181.78,
		[AttrKeys.def]: 570.27
	},
	growAttr: {
		key: AttrKeys.cpct,
		value: 19.2
	},
	materials: {
		[MaterialType.gem]: "涤净青金",
		[MaterialType.boss]: "受祝所缚之印",
		[MaterialType.specialty]: "浪沫羽鳃",
		[MaterialType.normal]: "龙冠武士的金哨",
		[MaterialType.talent]: "「角逐」的哲学",
		[MaterialType.weekly]: "无光质块"
	},
	talent: {
		[GsTalentType.a]: {
			id: 10231,
			name: "普通攻击·降温处理",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多三段攻击，造成水元素伤害。",
				"<h3>重击</h3>",
				"消耗一定体力，向空中击出坠落时会造成水元素范围伤害的水豚球。",
				"<h3>下落攻击</h3>",
				"凝聚水元素的力量，从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成水元素范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"51.4%",
						"55.25%",
						"59.11%",
						"64.25%",
						"68.1%",
						"71.95%",
						"77.09%",
						"82.23%",
						"87.37%",
						"92.51%",
						"97.65%",
						"102.79%",
						"109.22%",
						"115.64%",
						"122.07%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"44.63%",
						"47.97%",
						"51.32%",
						"55.78%",
						"59.13%",
						"62.48%",
						"66.94%",
						"71.4%",
						"75.86%",
						"80.33%",
						"84.79%",
						"89.25%",
						"94.83%",
						"100.41%",
						"105.99%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"70.03%",
						"75.29%",
						"80.54%",
						"87.54%",
						"92.8%",
						"98.05%",
						"105.05%",
						"112.06%",
						"119.06%",
						"126.06%",
						"133.07%",
						"140.07%",
						"148.82%",
						"157.58%",
						"166.33%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"142.88%",
						"153.6%",
						"164.31%",
						"178.6%",
						"189.32%",
						"200.03%",
						"214.32%",
						"228.61%",
						"242.9%",
						"257.18%",
						"271.47%",
						"285.76%",
						"303.62%",
						"321.48%",
						"339.34%"
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
			id: 10232,
			name: "踏鲨破浪",
			desc: [
				"以驾驭速度与水潮的心得，随时随地进入冲浪的架势。",
				"施放后，玛拉妮将获得60点夜魂值并进入夜魂加持状态。",
				"<h3>夜魂加持·玛拉妮</h3>",
				"持续消耗夜魂值。夜魂值耗尽时，或是再次施放时，玛拉妮的夜魂加持将会结束。夜魂加持状态具有如下特性：",
				"·搭乘鲨鲨冲浪板，提升玛拉妮的移动速度与抗打断能力。玛拉妮在这种状态下能在水面与液态燃素上移动，并免疫液态燃素的伤害；",
				"·进行普通攻击时，将转为进行鲨鲨撕咬，基于玛拉妮的生命值上限造成具有夜魂性质的水元素伤害。鲨鲨撕咬能够在空中进行，造成的伤害被视为普通攻击伤害；",
				"·在这种状态下接触敌人时，玛拉妮对敌人施加猎物标记，并获得1层浪势充能，浪势充能至多叠加3层，每0.7秒至多通过同一个敌人获得1层。",
				"<h3>浪势充能与猎物标记</h3>",
				"进行鲨鲨撕咬时，玛拉妮将依据浪势充能的层数，提高造成的伤害，拥有3层浪势充能时，玛拉妮的鲨鲨撕咬将转为巨浪鲨鲨撕咬，造成的伤害进一步提升，并在命中敌人时清除浪势充能。",
				"鲨鲨撕咬命中敌人时，将移除其猎物标记，并向附近至多5名处于猎物标记标记状态下的敌人发射鲨鲨飞弹，造成相当于此次鲨鲨撕咬的伤害，并清除这些敌人的猎物标记；此次鲨鲨撕咬与鲨鲨飞弹的目标敌人超过1名时，造成的伤害将会降低，至多在达到3名敌人时造成原本72%的伤害。",
				"<i>首先鲨鲨不只是一个冲浪板，它还是淡水鲨。其次，它也不是真的要吃，只是真的会咬。</i>"
			],
			tables: [
				{
					name: "鲨鲨撕咬基础伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"8.68%",
						"9.33%",
						"9.98%",
						"10.85%",
						"11.5%",
						"12.15%",
						"13.02%",
						"13.89%",
						"14.76%",
						"15.62%",
						"16.49%",
						"17.36%",
						"18.45%",
						"19.53%",
						"20.62%"
					]
				},
				{
					name: "浪势充能伤害提升",
					unit: " / 层",
					isSame: false,
					values: [
						"4.34%生命值上限",
						"4.67%生命值上限",
						"4.99%生命值上限",
						"5.43%生命值上限",
						"5.75%生命值上限",
						"6.08%生命值上限",
						"6.51%生命值上限",
						"6.94%生命值上限",
						"7.38%生命值上限",
						"7.81%生命值上限",
						"8.25%生命值上限",
						"8.68%生命值上限",
						"9.22%生命值上限",
						"9.77%生命值上限",
						"10.31%生命值上限"
					]
				},
				{
					name: "巨浪鲨鲨撕咬伤害额外提升",
					unit: "生命值上限",
					isSame: false,
					values: [
						"21.7%",
						"23.33%",
						"24.96%",
						"27.13%",
						"28.75%",
						"30.38%",
						"32.55%",
						"34.72%",
						"36.89%",
						"39.06%",
						"41.23%",
						"43.4%",
						"46.11%",
						"48.83%",
						"51.54%"
					]
				},
				{
					name: "鲨鲨撕咬冷却时间",
					isSame: true,
					values: [
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒",
						"1.8秒"
					]
				},
				{
					name: "夜魂值上限",
					isSame: true,
					values: [
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点",
						"60点"
					]
				},
				{
					name: "冷却时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 10239,
			name: "爆瀑飞弹",
			desc: [
				"发射能追踪敌人的特大号鲨鲨导弹，基于玛拉妮的生命值上限造成具有夜魂性质的水元素范围伤害。",
				"<i>玛拉妮之所以把鲨鲨导弹叫这个名字，是因为里面有水有火，听起来很温泉。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"58.44%",
						"62.82%",
						"67.21%",
						"73.05%",
						"77.43%",
						"81.81%",
						"87.66%",
						"93.5%",
						"99.35%",
						"105.19%",
						"111.03%",
						"116.88%",
						"124.18%",
						"131.49%",
						"138.79%"
					]
				},
				{
					name: "冷却时间",
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
					name: "元素能量",
					isSame: true,
					values: [
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				51.4,
				55.25,
				59.11,
				64.25,
				68.1,
				71.95,
				77.09,
				82.23,
				87.37,
				92.51,
				97.65,
				102.79,
				109.22,
				115.64,
				122.07
			],
			"二段伤害": [
				44.63,
				47.97,
				51.32,
				55.78,
				59.13,
				62.48,
				66.94,
				71.4,
				75.86,
				80.33,
				84.79,
				89.25,
				94.83,
				100.41,
				105.99
			],
			"三段伤害": [
				70.03,
				75.29,
				80.54,
				87.54,
				92.8,
				98.05,
				105.05,
				112.06,
				119.06,
				126.06,
				133.07,
				140.07,
				148.82,
				157.58,
				166.33
			],
			"重击伤害": [
				142.88,
				153.6,
				164.31,
				178.6,
				189.32,
				200.03,
				214.32,
				228.61,
				242.9,
				257.18,
				271.47,
				285.76,
				303.62,
				321.48,
				339.34
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
			"鲨鲨撕咬基础伤害": [
				8.68,
				9.33,
				9.98,
				10.85,
				11.5,
				12.15,
				13.02,
				13.89,
				14.76,
				15.62,
				16.49,
				17.36,
				18.45,
				19.53,
				20.62
			],
			"浪势充能伤害提升": [
				4.34,
				4.67,
				4.99,
				5.43,
				5.75,
				6.08,
				6.51,
				6.94,
				7.38,
				7.81,
				8.25,
				8.68,
				9.22,
				9.77,
				10.31
			],
			"巨浪鲨鲨撕咬伤害额外提升": [
				21.7,
				23.33,
				24.96,
				27.13,
				28.75,
				30.38,
				32.55,
				34.72,
				36.89,
				39.06,
				41.23,
				43.4,
				46.11,
				48.83,
				51.54
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				58.44,
				62.82,
				67.21,
				73.05,
				77.43,
				81.81,
				87.66,
				93.5,
				99.35,
				105.19,
				111.03,
				116.88,
				124.18,
				131.49,
				138.79
			]
		}
	},
	cons: new Map([
		[1, {
			name: "悠闲的「梅兹特利」…",
			desc: [
				"进入夜魂加持状态后的第一次巨浪鲨鲨撕咬及它所触发的鲨鲨飞弹造成的伤害提升，提升值相当于玛拉妮生命值上限的66%。此次伤害提升遵循踏鲨破浪的伤害衰减规则。",
				"此外，不处于战斗状态下时，玛拉妮的夜魂加持状态消耗的夜魂值与燃素降低30%。"
			]
		}],
		[2, {
			name: "全力以赴玛拉妮！",
			desc: [
				"进入夜魂加持状态时，玛拉妮获得2层踏鲨破浪的浪势充能；玛拉妮获得豚豚球时，获得1层浪势充能。",
				"此外，玛拉妮在一次夜魂加持期间获得2个豚豚球的2秒内，额外恢复12点夜魂值。该效果需要解锁固有天赋「耐热型淡水豚豚」。"
			]
		}],
		[3, {
			name: "在欢乐海上冲浪",
			desc: [
				"<h3>踏鲨破浪的技能等级提高3级。</h3>",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "鲨鲨主食是豚豚。",
			desc: [
				"获得豚豚球时，玛拉妮恢复8点元素能量；该效果需要解锁固有天赋「耐热型淡水豚豚」。",
				"此外，爆瀑飞弹造成的伤害提升75%。"
			]
		}],
		[5, {
			name: "同款冲浪板有售！",
			desc: [
				"<h3>爆瀑飞弹的技能等级提高3级。</h3>",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "「流泉之众」的精神",
			desc: [
				"对命之座「悠闲的「梅兹特利」…」的伤害提升效果，移除原本每次夜魂加持只能触发一次的限制。"
			]
		}]
	]),
	passive: [
		{
			name: "要诀是保持笑容！",
			desc: [
				"在纳塔存在燃素机制的区域时，与部分采集物交互能够恢复15点燃素。此外，在小地图上显示周围的纳塔区域特产的位置。"
			],
		},
		{
			name: "夜域赐礼·波涛顶底",
			desc: [
				"在夜魂值耗竭后，玛拉妮将会转而消耗燃素来维持夜魂加持。",
				"在纳塔存在燃素机制的区域时，能够进行夜魂传递·玛拉妮。当前场上角色处于冲刺、游泳或是特定天赋赋予的移动状态下，或是位于一定高度的空中时，切换玛拉妮登场时触发：玛拉妮将进入夜魂加持状态，并获得40点夜魂值。自己的队伍每10秒能触发一次夜魂传递。",
				"此外，玛拉妮在夜魂加持状态下在水面与液态燃素上移动时：在纳塔地区时消耗的夜魂值或燃素降低75%，在纳塔地区外消耗的夜魂值降低35%。"
			],
		},
		{
			name: "耐热型淡水豚豚",
			desc: [
				"巨浪鲨鲨撕咬命中敌人时，将在附近产生一个豚豚球。获得豚豚球时，玛拉妮自己将恢复20点夜魂值。一次夜魂加持期间，至多通过这种方式产生2个豚豚球。"
			],
		},
		{
			name: "纳塔最好的向导",
			desc: [
				"队伍中的附近的角色触发「夜魂迸发」后，玛拉妮将获得一层持续20秒、至多叠加3层的逐浪心得。施放爆瀑飞弹时，玛拉妮将清除所有逐浪心得，并基于清除的层数，基于生命值上限的15%/30%/45%提高本次爆瀑飞弹造成的伤害。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.cpct
		],
		details: new Map([
			["1", [1182, 14.15, 44.39, 0]],
			["20", [3066, 36.71, 115.16, 0]],
			["40", [6105, 73.08, 229.27, 0]],
			["50", [7852, 94, 294.89, 4.8]],
			["60", [9850, 117.92, 369.93, 9.6]],
			["70", [11618, 139.08, 436.31, 9.6]],
			["80", [13397, 160.38, 503.13, 14.4]],
			["90", [15185, 181.78, 570.27, 19.2]],
			["20+", [4080, 48.84, 153.22, 0]],
			["40+", [6825, 81.7, 256.31, 4.8]],
			["50+", [8813, 105.49, 330.95, 9.6]],
			["60+", [10571, 126.54, 396.98, 9.6]],
			["70+", [12338, 147.7, 463.36, 14.4]],
			["80+", [14117, 169, 530.18, 19.2]]
		])
	},
};
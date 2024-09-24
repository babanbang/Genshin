import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 流浪者 */
export const metaData = {
	info: {
		title: "久世浮倾",
		allegiance: "无",
		birth: "1-3",
		astro: "浪客座",
		desc: "身份成谜的流浪人士。衣着打扮像是修验者，言行却并不是修验者应有的模样。",
		cncv: "鹿喑",
		jpcv: "柿原彻也",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 10164,
		[AttrKeys.atk]: 327.67,
		[AttrKeys.def]: 607.16
	},
	growAttr: {
		key: AttrKeys.cpct,
		value: 19.2
	},
	materials: {
		[MaterialType.gem]: "自在松石",
		[MaterialType.boss]: "永续机芯",
		[MaterialType.specialty]: "树王圣体菇",
		[MaterialType.normal]: "名刀镡",
		[MaterialType.talent]: "「笃行」的哲学",
		[MaterialType.weekly]: "空行的虚铃"
	},
	talent: {
		[GsTalentType.a]: {
			id: 7531,
			name: "普通攻击·行幡鸣弦",
			desc: [
				"<h3>普通攻击</h3>",
				"释放风刃，进行至多三段的攻击，造成风元素伤害。",
				"<h3>重击</h3>",
				"消耗一定体力，短暂咏唱后，在前方凝聚高压气场，造成风元素范围伤害。",
				"<h3>下落攻击</h3>",
				"凝聚风元素的力量，从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成风元素范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"68.71%",
						"74.31%",
						"79.9%",
						"87.89%",
						"93.48%",
						"99.87%",
						"108.66%",
						"117.45%",
						"126.24%",
						"135.83%",
						"145.42%",
						"155.01%",
						"164.59%",
						"174.18%",
						"183.77%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"65.02%",
						"70.31%",
						"75.6%",
						"83.16%",
						"88.45%",
						"94.5%",
						"102.82%",
						"111.13%",
						"119.45%",
						"128.52%",
						"137.59%",
						"146.66%",
						"155.74%",
						"164.81%",
						"173.88%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"47.64% + 47.64%",
						"51.52% + 51.52%",
						"55.4% + 55.4%",
						"60.94% + 60.94%",
						"64.82% + 64.82%",
						"69.25% + 69.25%",
						"75.34% + 75.34%",
						"81.44% + 81.44%",
						"87.53% + 87.53%",
						"94.18% + 94.18%",
						"100.83% + 100.83%",
						"107.48% + 107.48%",
						"114.12% + 114.12%",
						"120.77% + 120.77%",
						"127.42% + 127.42%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"132.08%",
						"141.99%",
						"151.89%",
						"165.1%",
						"175.01%",
						"184.91%",
						"198.12%",
						"211.33%",
						"224.54%",
						"237.74%",
						"250.95%",
						"264.16%",
						"280.67%",
						"297.18%",
						"313.69%"
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
			id: 7532,
			name: "羽画·风姿华歌",
			desc: [
				"凝聚大气的力量，借此摆脱大地的桎梏。对周围造成风元素伤害并跃升至空中，进入「优风倾姿」状态。",
				"<h3>优风倾姿</h3>",
				"流浪者在这种状态下，无法进行下落攻击，进行普通攻击与重击时，将转为进行空居·不生断与空居·刀风界，造成的伤害与影响范围提高，伤害分别视为普通攻击伤害与重击伤害。进行空居·刀风界将不消耗体力。",
				"流浪者在这种状态下将持续悬浮在空中。此时，流浪者的行动具有如下特性：",
				"·将持续消耗「空居力」，维持悬浮状态；",
				"·进行冲刺时，将额外消耗空居力在空中加速；长按冲刺时，将持续消耗空居力以维持快速移动。该效果将替代冲刺；",
				"·进行跳跃时，将额外消耗空居力抬升悬浮高度；长按跳跃时，将持续消耗空居力以持续抬升高度。",
				"<h3>空居力耗竭后将结束该状态。</h3>",
				"在优风倾姿持续期间再次施放将结束该状态。",
				"<i>「浮世倾舞，秘则为花。」</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"95.2%",
						"102.34%",
						"109.48%",
						"119%",
						"126.14%",
						"133.28%",
						"142.8%",
						"152.32%",
						"161.84%",
						"171.36%",
						"180.88%",
						"190.4%",
						"202.3%",
						"214.2%",
						"226.1%"
					]
				},
				{
					name: "空居·不生断伤害",
					isSame: false,
					values: [
						"132.98%普通攻击伤害",
						"134.96%普通攻击伤害",
						"136.93%普通攻击伤害",
						"139.5%普通攻击伤害",
						"141.47%普通攻击伤害",
						"143.45%普通攻击伤害",
						"146.02%普通攻击伤害",
						"148.58%普通攻击伤害",
						"151.15%普通攻击伤害",
						"153.72%普通攻击伤害",
						"156.29%普通攻击伤害",
						"158.85%普通攻击伤害",
						"161.42%普通攻击伤害",
						"163.99%普通攻击伤害",
						"166.56%普通攻击伤害"
					]
				},
				{
					name: "空居·刀风界伤害",
					isSame: false,
					values: [
						"126.39%重击伤害",
						"127.97%重击伤害",
						"129.55%重击伤害",
						"131.6%重击伤害",
						"133.18%重击伤害",
						"134.76%重击伤害",
						"136.81%重击伤害",
						"138.87%重击伤害",
						"140.92%重击伤害",
						"142.98%重击伤害",
						"145.03%重击伤害",
						"147.08%重击伤害",
						"149.14%重击伤害",
						"151.19%重击伤害",
						"153.25%重击伤害"
					]
				},
				{
					name: "初始空居力",
					isSame: true,
					values: [
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点",
						"100点"
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
			id: 7539,
			name: "狂言·式乐五番",
			desc: [
				"将大气压缩，化变为粉碎一切烦恼的空洞，造成多次风元素范围伤害。",
				"处于元素战技「羽画·风姿华歌」的优风倾姿状态下时，将在施放后结束优风倾姿状态。",
				"<i>「仄仄天将明，今昔旧梦如尘影，浮沉萩风中。」</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"147.2%*5",
						"158.24%*5",
						"169.28%*5",
						"184%*5",
						"195.04%*5",
						"206.08%*5",
						"220.8%*5",
						"235.52%*5",
						"250.24%*5",
						"264.96%*5",
						"279.68%*5",
						"294.4%*5",
						"312.8%*5",
						"331.2%*5",
						"349.6%*5"
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
				68.71,
				74.31,
				79.9,
				87.89,
				93.48,
				99.87,
				108.66,
				117.45,
				126.24,
				135.83,
				145.42,
				155.01,
				164.59,
				174.18,
				183.77
			],
			"二段伤害": [
				65.02,
				70.31,
				75.6,
				83.16,
				88.45,
				94.5,
				102.82,
				111.13,
				119.45,
				128.52,
				137.59,
				146.66,
				155.74,
				164.81,
				173.88
			],
			"三段伤害": [
				95.28,
				103.04,
				110.8,
				121.88,
				129.64,
				138.5,
				150.68,
				162.88,
				175.06,
				188.36,
				201.66,
				214.96,
				228.24,
				241.54,
				254.84
			],
			"三段伤害2": [
				[47.64, 47.64],
				[51.52, 51.52],
				[55.4, 55.4],
				[60.94, 60.94],
				[64.82, 64.82],
				[69.25, 69.25],
				[75.34, 75.34],
				[81.44, 81.44],
				[87.53, 87.53],
				[94.18, 94.18],
				[100.83, 100.83],
				[107.48, 107.48],
				[114.12, 114.12],
				[120.77, 120.77],
				[127.42, 127.42]
			],
			"重击伤害": [
				132.08,
				141.99,
				151.89,
				165.1,
				175.01,
				184.91,
				198.12,
				211.33,
				224.54,
				237.74,
				250.95,
				264.16,
				280.67,
				297.18,
				313.69
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
			"技能伤害": [
				95.2,
				102.34,
				109.48,
				119,
				126.14,
				133.28,
				142.8,
				152.32,
				161.84,
				171.36,
				180.88,
				190.4,
				202.3,
				214.2,
				226.1
			],
			"空居·不生断伤害": [
				132.98,
				134.96,
				136.93,
				139.5,
				141.47,
				143.45,
				146.02,
				148.58,
				151.15,
				153.72,
				156.29,
				158.85,
				161.42,
				163.99,
				166.56
			],
			"空居·刀风界伤害": [
				126.39,
				127.97,
				129.55,
				131.6,
				133.18,
				134.76,
				136.81,
				138.87,
				140.92,
				142.98,
				145.03,
				147.08,
				149.14,
				151.19,
				153.25
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				736,
				791.2,
				846.4,
				920,
				975.1999999999999,
				1030.4,
				1104,
				1177.6000000000001,
				1251.2,
				1324.8,
				1398.4,
				1472,
				1564,
				1656,
				1748
			],
			"技能伤害2": [
				[147.2, 5],
				[158.24, 5],
				[169.28, 5],
				[184, 5],
				[195.04, 5],
				[206.08, 5],
				[220.8, 5],
				[235.52, 5],
				[250.24, 5],
				[264.96, 5],
				[279.68, 5],
				[294.4, 5],
				[312.8, 5],
				[331.2, 5],
				[349.6, 5]
			]
		}
	},
	cons: new Map([
		[1, {
			name: "初番·茂风流羽行",
			desc: [
				"在优风倾姿状态下，流浪者进行空居·不生断与空居·刀风界的攻击速度提升10%。",
				"此外，固有天赋「梦迹一风」发射的风矢能额外造成25%攻击力的伤害，该效果需要解锁固有天赋「梦迹一风」。"
			]
		}],
		[2, {
			name: "二番·箙岛廓白浪",
			desc: [
				"在优风倾姿状态下，狂言·式乐五番将依据空居力上限与当前的空居力的差值，每1点使此次狂言·式乐五番造成的伤害提升4%。",
				"通过这种方式，至多使狂言·式乐五番造成的伤害提升200%。"
			]
		}],
		[3, {
			name: "三番·久世舞夕颜",
			desc: [
				"狂言·式乐五番的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "四番·花月歌浮舟",
			desc: [
				"施放羽画·风姿华歌时，若触发了固有天赋「拾玉得花」依据元素类型强化的效果，还将随机获得1种本次施放未触发的强化效果。同时至多获得3种元素对应的强化效果。",
				"需要解锁固有天赋「拾玉得花」。"
			]
		}],
		[5, {
			name: "末番·今昔渡来殿",
			desc: [
				"羽画·风姿华歌的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "祝言·霞幕倾松风",
			desc: [
				"在优风倾姿状态下，流浪者主动施放的空居·不生断命中敌人时，将产生如下效果：",
				"·在命中的位置额外进行一次空居·不生断，造成原本40%的伤害，该伤害视为普通攻击伤害；",
				"·当流浪者的空居力低于40点时，为流浪者恢复4点空居力。每0.2秒至多通过这种方式恢复1次空居力，在一次优风倾姿的持续期间，至多触发5次。"
			]
		}]
	]),
	passive: [
		{
			name: "廻色云弦",
			desc: [
				"突破弓与法器时，消耗的摩拉数量减少50%。"
			],
		},
		{
			name: "拾玉得花",
			desc: [
				"施放羽画·风姿华歌时，若接触了水元素/火元素/冰元素/雷元素，则会依据触及的元素，在此次优风倾姿状态下获得对应的强化效果：",
				"·水元素：空居力上限提升20点；",
				"·火元素：攻击力提升30%；",
				"·冰元素：暴击率提升20%；",
				"·雷元素：普通攻击与重击命中敌人后，恢复0.8点元素能量，每0.2秒至多通过上述方式恢复一次元素能量。",
				"同时至多获得2种元素对应的强化效果。"
			],
		},
		{
			name: "梦迹一风",
			desc: [
				"在优风倾姿状态下，流浪者的空居·不生断或空居·刀风界命中敌人时，有16%几率获得「倾落」效果：流浪者在本次优风倾姿的状态下进行空中加速时，将移除倾落效果，使此次空中加速不消耗空居力，并发射4枚风矢，分别造成35%攻击力的风元素伤害。",
				"空居·不生断与空居·刀风界未产生倾落效果时，会使下次产生概率提升12%；0.1秒内至多判定1次是否产生倾落效果。"
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
			["1", [791, 25.51, 47.27, 0]],
			["20", [2053, 66.17, 122.61, 0]],
			["40", [4086, 131.74, 244.1, 0]],
			["50", [5256, 169.45, 313.97, 4.8]],
			["60", [6593, 212.56, 393.86, 9.6]],
			["70", [7777, 250.7, 464.54, 9.6]],
			["80", [8968, 289.1, 535.68, 14.4]],
			["90", [10164, 327.67, 607.16, 19.2]],
			["20+", [2731, 88.04, 163.13, 0]],
			["40+", [4568, 147.28, 272.9, 4.8]],
			["50+", [5899, 190.17, 352.36, 9.6]],
			["60+", [7076, 228.1, 422.66, 9.6]],
			["70+", [8259, 266.24, 493.33, 14.4]],
			["80+", [9450, 304.64, 564.48, 19.2]]
		])
	},
};
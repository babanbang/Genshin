import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 那维莱特 */
export const metaData = {
	info: {
		title: "谕告的潮音",
		allegiance: "枫丹廷",
		birth: "12-18",
		astro: "原海巨灵座",
		desc: "枫丹的最高审判官，因其无懈可击的「秉公无私」而闻名。",
		cncv: "桑毓泽",
		jpcv: "神谷浩史",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 14695,
		[AttrKeys.atk]: 208.32,
		[AttrKeys.def]: 576.42
	},
	growAttr: {
		key: AttrKeys.cdmg,
		value: 38.4
	},
	materials: {
		[MaterialType.gem]: "涤净青金",
		[MaterialType.boss]: "原海麟角",
		[MaterialType.specialty]: "幽光星星",
		[MaterialType.normal]: "异色结晶石",
		[MaterialType.talent]: "「公平」的哲学",
		[MaterialType.weekly]: "亘古树海之一瞬"
	},
	talent: {
		[GsTalentType.a]: {
			id: 8731,
			name: "普通攻击·如水从平",
			desc: [
				"<h3>普通攻击</h3>",
				"轻挥权杖，驱动浪涛进行至多三段的攻击，造成水元素伤害。",
				"<h3>重击蓄力·诉论心证</h3>",
				"蓄力时，那维莱特汇聚源水之力，逐渐构成仲裁的徽记。在这种状态下，那维莱特能够进行移动与改变朝向，并吸收一定范围内的源水之滴。",
				"每吸收一枚源水之滴，都会加快徽记形成的速度，并为那维莱特恢复生命值。",
				"停止蓄力时，若徽记尚不完满，将进行重击；若已经完满，则将转为进行重击·衡平推裁。",
				"<h3>重击</h3>",
				"消耗一定体力，以迸发的水环猛击敌人，造成水元素范围伤害。",
				"<h3>重击·衡平推裁</h3>",
				"释放汹涌的洪流，对前方直线区域内的敌人持续造成水元素范围伤害。",
				"重击·衡平推裁不消耗体力，持续3秒。",
				"若生命值高于50%，那维莱特在施放时将持续消耗生命值。",
				"<h3>下落攻击</h3>",
				"凝聚水元素的力量，从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成水元素范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"54.58%",
						"58.67%",
						"62.76%",
						"68.22%",
						"72.31%",
						"76.41%",
						"81.87%",
						"87.32%",
						"92.78%",
						"98.24%",
						"103.7%",
						"109.15%",
						"115.98%",
						"122.8%",
						"129.62%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"46.25%",
						"49.71%",
						"53.18%",
						"57.81%",
						"61.28%",
						"64.74%",
						"69.37%",
						"73.99%",
						"78.62%",
						"83.24%",
						"87.87%",
						"92.49%",
						"98.27%",
						"104.05%",
						"109.83%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"72.34%",
						"77.76%",
						"83.19%",
						"90.42%",
						"95.85%",
						"101.27%",
						"108.51%",
						"115.74%",
						"122.97%",
						"130.21%",
						"137.44%",
						"144.68%",
						"153.72%",
						"162.76%",
						"171.8%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"136.8%",
						"147.06%",
						"157.32%",
						"171%",
						"181.26%",
						"191.52%",
						"205.2%",
						"218.88%",
						"232.56%",
						"246.24%",
						"259.92%",
						"273.6%",
						"290.7%",
						"307.8%",
						"324.9%"
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
					name: "重击·衡平推裁持续伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"7.32%",
						"7.91%",
						"8.51%",
						"9.36%",
						"9.96%",
						"10.64%",
						"11.57%",
						"12.51%",
						"13.45%",
						"14.47%",
						"15.49%",
						"16.51%",
						"17.53%",
						"18.55%",
						"19.57%"
					]
				},
				{
					name: "恢复生命值",
					isSame: false,
					values: [
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚",
						"16%HP / 枚"
					]
				},
				{
					name: "损失生命值",
					isSame: false,
					values: [
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒",
						"8%HP / 0.5秒"
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
			id: 8732,
			name: "泪水啊，我必偿还",
			desc: [
				"降下汹涌的水瀑，基于那维莱特的生命值上限，对前方的敌人造成水元素范围伤害，命中敌人后，将在敌人附近产生3枚源水之滴。",
				"<h3>始基力：芒性</h3>",
				"每隔一段时间，在降下汹涌的水瀑后，将降下穿透敌人的灵息之刺，造成具有芒性的水元素伤害。",
				"<i>「法律可以遏制诸般罪行，但它并不能消除罪恶本身。」</i>"
			],
			tables: [
				{
					name: "技能伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"12.86%",
						"13.83%",
						"14.79%",
						"16.08%",
						"17.04%",
						"18.01%",
						"19.3%",
						"20.58%",
						"21.87%",
						"23.16%",
						"24.44%",
						"25.73%",
						"27.34%",
						"28.94%",
						"30.55%"
					]
				},
				{
					name: "灵息之刺伤害",
					isSame: false,
					values: [
						"20.8%",
						"22.36%",
						"23.92%",
						"26%",
						"27.56%",
						"29.12%",
						"31.2%",
						"33.28%",
						"35.36%",
						"37.44%",
						"39.52%",
						"41.6%",
						"44.2%",
						"46.8%",
						"49.4%"
					]
				},
				{
					name: "灵息之刺间隔",
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
					name: "源水之滴持续时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 8739,
			name: "潮水啊，我已归来",
			desc: [
				"释放迸发的骇浪，基于那维莱特的生命值上限，造成水元素范围伤害，短暂间隔后，在附近降下2道水瀑，造成范围较小的水元素伤害，并在前方一定范围内产生6枚源水之滴。",
				"<i>「法律在颁布后方才成立，而在此之上，自然的法则从亘古以来便约束着全部的种类与世代。」</i>"
			],
			tables: [
				{
					name: "技能伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"22.26%",
						"23.93%",
						"25.6%",
						"27.82%",
						"29.49%",
						"31.16%",
						"33.39%",
						"35.61%",
						"37.84%",
						"40.06%",
						"42.29%",
						"44.52%",
						"47.3%",
						"50.08%",
						"52.86%"
					]
				},
				{
					name: "水瀑伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"9.11%",
						"9.79%",
						"10.47%",
						"11.38%",
						"12.06%",
						"12.75%",
						"13.66%",
						"14.57%",
						"15.48%",
						"16.39%",
						"17.3%",
						"18.21%",
						"19.35%",
						"20.49%",
						"21.63%"
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
				54.58,
				58.67,
				62.76,
				68.22,
				72.31,
				76.41,
				81.87,
				87.32,
				92.78,
				98.24,
				103.7,
				109.15,
				115.98,
				122.8,
				129.62
			],
			"二段伤害": [
				46.25,
				49.71,
				53.18,
				57.81,
				61.28,
				64.74,
				69.37,
				73.99,
				78.62,
				83.24,
				87.87,
				92.49,
				98.27,
				104.05,
				109.83
			],
			"三段伤害": [
				72.34,
				77.76,
				83.19,
				90.42,
				95.85,
				101.27,
				108.51,
				115.74,
				122.97,
				130.21,
				137.44,
				144.68,
				153.72,
				162.76,
				171.8
			],
			"重击伤害": [
				136.8,
				147.06,
				157.32,
				171,
				181.26,
				191.52,
				205.2,
				218.88,
				232.56,
				246.24,
				259.92,
				273.6,
				290.7,
				307.8,
				324.9
			],
			"重击·衡平推裁持续伤害": [
				7.32,
				7.91,
				8.51,
				9.36,
				9.96,
				10.64,
				11.57,
				12.51,
				13.45,
				14.47,
				15.49,
				16.51,
				17.53,
				18.55,
				19.57
			],
			"恢复生命值": [
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0]
			],
			"恢复生命值2": [
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0],
				[16, 0]
			],
			"损失生命值": [
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5]
			],
			"损失生命值2": [
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5],
				[8, 0.5]
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
				[303.9, 379.59],
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
				[303.9, 379.59],
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
				12.86,
				13.83,
				14.79,
				16.08,
				17.04,
				18.01,
				19.3,
				20.58,
				21.87,
				23.16,
				24.44,
				25.73,
				27.34,
				28.94,
				30.55
			],
			"灵息之刺伤害": [
				20.8,
				22.36,
				23.92,
				26,
				27.56,
				29.12,
				31.2,
				33.28,
				35.36,
				37.44,
				39.52,
				41.6,
				44.2,
				46.8,
				49.4
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				22.26,
				23.93,
				25.6,
				27.82,
				29.49,
				31.16,
				33.39,
				35.61,
				37.84,
				40.06,
				42.29,
				44.52,
				47.3,
				50.08,
				52.86
			],
			"水瀑伤害": [
				9.11,
				9.79,
				10.47,
				11.38,
				12.06,
				12.75,
				13.66,
				14.57,
				15.48,
				16.39,
				17.3,
				18.21,
				19.35,
				20.49,
				21.63
			]
		}
	},
	cons: new Map([
		[1, {
			name: "尊荣的创定",
			desc: [
				"那维莱特登场时，获得一层固有天赋「古海孑遗的权柄」的「遗龙之荣」。需要解锁固有天赋「古海孑遗的权柄」。",
				"此外，进行重击蓄力·诉论心证与重击·衡平推裁时，提高那维莱特的抗打断能力。"
			]
		}],
		[2, {
			name: "律法的命诫",
			desc: [
				"固有天赋「古海孑遗的权柄」获得强化：每存在一层「遗龙之荣」，就使重击·衡平推裁的暴击伤害提升14%，至多通过这种方式提升42%。",
				"需要解锁固有天赋「古海孑遗的权柄」。"
			]
		}],
		[3, {
			name: "溯古的拟制",
			desc: [
				"普通攻击·如水从平的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "悲悯的冠冕",
			desc: [
				"那维莱特处于当前场上并受到治疗时，将产生1枚源水之滴。此效果每4秒至多触发一次。"
			]
		}],
		[5, {
			name: "公理的决裁",
			desc: [
				"潮水啊，我已归来的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "忿怒的报偿",
			desc: [
				"施放重击·衡平推裁时，那维莱特可以吸收附近一定范围内的源水之滴，每吸收一枚源水之滴，都将使重击·衡平推裁的持续时间延长1秒。",
				"此外，重击·衡平推裁命中敌人时，每2秒，将额外释放两道洪流，每道洪流造成相当于那维莱特生命值上限10%的水元素伤害。通过这种方式造成的伤害视为重击·衡平推裁造成的伤害。"
			]
		}]
	]),
	passive: [
		{
			name: "汇聚如浪潮一般",
			desc: [
				"队伍中自己的角色进行水下冲刺时，移动速度提升15%。",
				"无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "古海孑遗的权柄",
			desc: [
				"队伍中的角色对敌人触发蒸发、冻结、感电、绽放、水元素扩散或水元素结晶反应时，将为那维莱特产生持续30秒，至多叠加3层的「遗龙之荣」效果，使重击·衡平推裁造成原本110%/125%/160%的伤害。",
				"每种元素反应产生的「遗龙之荣」分别独立存在。"
			],
		},
		{
			name: "至高仲裁的纪律",
			desc: [
				"基于当前生命值超出生命值上限30%的部分，每1%使那维莱特获得0.6%水元素伤害加成，通过这种方式，至多提升30%。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.cdmg
		],
		details: new Map([
			["1", [1144, 16.22, 44.87, 0]],
			["20", [2967, 42.07, 116.4, 0]],
			["40", [5908, 83.76, 231.74, 0]],
			["50", [7599, 107.73, 298.07, 9.6]],
			["60", [9533, 135.14, 373.92, 19.2]],
			["70", [11243, 159.39, 441.02, 19.2]],
			["80", [12965, 183.8, 508.56, 28.8]],
			["90", [14695, 208.32, 576.42, 38.4]],
			["20+", [3948, 55.97, 154.87, 0]],
			["40+", [6605, 93.63, 259.08, 9.6]],
			["50+", [8528, 120.9, 334.52, 19.2]],
			["60+", [10230, 145.02, 401.26, 19.2]],
			["70+", [11940, 169.27, 468.35, 28.8]],
			["80+", [13662, 193.68, 535.9, 38.4]]
		])
	},
};
import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 枫原万叶 */
export const metaData = {
	info: {
		title: "红叶逐荒波",
		allegiance: "南十字船队",
		birth: "10-29",
		astro: "枫红座",
		desc: "来自稻妻的浪人武士，如今栖身于璃月船队「南十字」中。性情温和而洒脱，心中埋藏着许多往事。",
		cncv: "斑马",
		jpcv: "岛崎信长",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 13348,
		[AttrKeys.atk]: 296.58,
		[AttrKeys.def]: 806.98
	},
	growAttr: {
		key: AttrKeys.mastery,
		value: 115.19999694824
	},
	materials: {
		[MaterialType.gem]: "自在松石",
		[MaterialType.boss]: "魔偶机心",
		[MaterialType.specialty]: "海灵芝",
		[MaterialType.normal]: "攫金鸦印",
		[MaterialType.talent]: "「勤劳」的哲学",
		[MaterialType.weekly]: "鎏金之鳞"
	},
	talent: {
		[GsTalentType.a]: {
			id: 4731,
			name: "普通攻击·我流剑术",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续剑击。",
				"<h3>重击</h3>",
				"消耗一定体力，瞬间向前方挥出两剑。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。若这次下落攻击经由千早振施放，则会转为施放下落攻击·乱岚拨止。",
				"<h3>下落攻击·乱岚拨止</h3>",
				"通过元素战技·千早振施放的下落攻击，造成的伤害将转化为风元素伤害，并在落地时施展秘剑产生小型的风穴，牵引附近的物体与敌人。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"44.98%",
						"48.64%",
						"52.3%",
						"57.53%",
						"61.19%",
						"65.38%",
						"71.13%",
						"76.88%",
						"82.63%",
						"88.91%",
						"96.1%",
						"104.56%",
						"113.02%",
						"121.47%",
						"130.7%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"45.24%",
						"48.92%",
						"52.6%",
						"57.86%",
						"61.54%",
						"65.75%",
						"71.54%",
						"77.32%",
						"83.11%",
						"89.42%",
						"96.65%",
						"105.16%",
						"113.66%",
						"122.17%",
						"131.45%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"25.8% + 30.96%",
						"27.9% + 33.48%",
						"30% + 36%",
						"33% + 39.6%",
						"35.1% + 42.12%",
						"37.5% + 45%",
						"40.8% + 48.96%",
						"44.1% + 52.92%",
						"47.4% + 56.88%",
						"51% + 61.2%",
						"55.12% + 66.15%",
						"59.98% + 71.97%",
						"64.83% + 77.79%",
						"69.68% + 83.61%",
						"74.97% + 89.96%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"60.72%",
						"65.66%",
						"70.6%",
						"77.66%",
						"82.6%",
						"88.25%",
						"96.02%",
						"103.78%",
						"111.55%",
						"120.02%",
						"129.73%",
						"141.14%",
						"152.56%",
						"163.98%",
						"176.43%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"25.37%*3",
						"27.43%*3",
						"29.5%*3",
						"32.45%*3",
						"34.51%*3",
						"36.88%*3",
						"40.12%*3",
						"43.36%*3",
						"46.61%*3",
						"50.15%*3",
						"54.21%*3",
						"58.98%*3",
						"63.75%*3",
						"68.52%*3",
						"73.72%*3"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"43% + 74.65%",
						"46.5% + 80.72%",
						"50% + 86.8%",
						"55% + 95.48%",
						"58.5% + 101.56%",
						"62.5% + 108.5%",
						"68% + 118.05%",
						"73.5% + 127.6%",
						"79% + 137.14%",
						"85% + 147.56%",
						"91.87% + 159.49%",
						"99.96% + 173.53%",
						"108.05% + 187.57%",
						"116.13% + 201.6%",
						"124.95% + 216.91%"
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
						"81.83%",
						"88.49%",
						"95.16%",
						"104.67%",
						"111.33%",
						"118.94%",
						"129.41%",
						"139.88%",
						"150.35%",
						"161.76%",
						"173.18%",
						"184.6%",
						"196.02%",
						"207.44%",
						"218.86%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"163.63% / 204.39%",
						"176.95% / 221.02%",
						"190.27% / 237.66%",
						"209.3% / 261.42%",
						"222.62% / 278.06%",
						"237.84% / 297.07%",
						"258.77% / 323.21%",
						"279.7% / 349.36%",
						"300.63% / 375.5%",
						"323.46% / 404.02%",
						"346.29% / 432.54%",
						"369.12% / 461.06%",
						"391.96% / 489.57%",
						"414.79% / 518.09%",
						"437.62% / 546.61%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 4732,
			name: "千早振",
			desc: [
				"施展如同冲风般激昂的秘剑，将敌人与物体牵引至所在位置，击飞范围内的敌人，造成风元素伤害，并借由喷薄的气流如登泷般腾空而起。",
				"枫原万叶因元素战技·千早振而升空后的10秒内并持续处于空中时，若进行下落攻击，则会施展格外强劲的下落攻击·乱岚拨止。",
				"<h3>点按</h3>",
				"可以在空中施放。",
				"<h3>长按</h3>",
				"积蓄力量后施展，相对于点按，在更大的范围内造成更高的风元素伤害。",
				"<h3>下落攻击·乱岚拨止</h3>",
				"通过元素战技·千早振施放的下落攻击，造成的伤害将转化为风元素伤害，并在落地时施展秘剑产生小型的风穴，牵引附近的物体与敌人。",
				"乱岚拨止造成的伤害视为下落攻击伤害。",
				"<i>「枫袖起悲风，神代万世人百年，秋山落唐红。」</i>"
			],
			tables: [
				{
					name: "点按技能伤害",
					isSame: false,
					values: [
						"192%",
						"206.4%",
						"220.8%",
						"240%",
						"254.4%",
						"268.8%",
						"288%",
						"307.2%",
						"326.4%",
						"345.6%",
						"364.8%",
						"384%",
						"408%",
						"432%",
						"456%"
					]
				},
				{
					name: "点按冷却时间",
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
					name: "长按技能伤害",
					isSame: false,
					values: [
						"260.8%",
						"280.36%",
						"299.92%",
						"326%",
						"345.56%",
						"365.12%",
						"391.2%",
						"417.28%",
						"443.36%",
						"469.44%",
						"495.52%",
						"521.6%",
						"554.2%",
						"586.8%",
						"619.4%"
					]
				},
				{
					name: "长按冷却时间",
					isSame: true,
					values: [
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒",
						"9秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 4739,
			name: "万叶之一刀",
			desc: [
				"施展我流的奥义，斩出初岚般的一刀，造成风元素范围伤害。",
				"刀风会留下名为「流风秋野」的领域，对其中的敌人造成间歇的风元素伤害。",
				"<h3>元素转化</h3>",
				"若流风秋野在持续期间接触了水元素/火元素/冰元素/雷元素，则会获得对应元素属性，额外造成该元素附加伤害。",
				"这种转化在技能持续期间仅会发生一次。",
				"<i>「须臾照见万世长，一叶便知天下秋。我欲凭切枫一闪，做万世之问叩——」</i>"
			],
			tables: [
				{
					name: "斩击伤害",
					isSame: false,
					values: [
						"262.4%",
						"282.08%",
						"301.76%",
						"328%",
						"347.68%",
						"367.36%",
						"393.6%",
						"419.84%",
						"446.08%",
						"472.32%",
						"498.56%",
						"524.8%",
						"557.6%",
						"590.4%",
						"623.2%"
					]
				},
				{
					name: "持续伤害",
					isSame: false,
					values: [
						"120%",
						"129%",
						"138%",
						"150%",
						"159%",
						"168%",
						"180%",
						"192%",
						"204%",
						"216%",
						"228%",
						"240%",
						"255%",
						"270%",
						"285%"
					]
				},
				{
					name: "附加元素伤害",
					isSame: false,
					values: [
						"36%",
						"38.7%",
						"41.4%",
						"45%",
						"47.7%",
						"50.4%",
						"54%",
						"57.6%",
						"61.2%",
						"64.8%",
						"68.4%",
						"72%",
						"76.5%",
						"81%",
						"85.5%"
					]
				},
				{
					name: "持续时间",
					isSame: true,
					values: [
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒"
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
				44.98,
				48.64,
				52.3,
				57.53,
				61.19,
				65.38,
				71.13,
				76.88,
				82.63,
				88.91,
				96.1,
				104.56,
				113.02,
				121.47,
				130.7
			],
			"二段伤害": [
				45.24,
				48.92,
				52.6,
				57.86,
				61.54,
				65.75,
				71.54,
				77.32,
				83.11,
				89.42,
				96.65,
				105.16,
				113.66,
				122.17,
				131.45
			],
			"三段伤害": [
				56.760000000000005,
				61.379999999999995,
				66,
				72.6,
				77.22,
				82.5,
				89.75999999999999,
				97.02000000000001,
				104.28,
				112.2,
				121.27000000000001,
				131.95,
				142.62,
				153.29000000000002,
				164.93
			],
			"三段伤害2": [
				[25.8, 30.96],
				[27.9, 33.48],
				[30, 36],
				[33, 39.6],
				[35.1, 42.12],
				[37.5, 45],
				[40.8, 48.96],
				[44.1, 52.92],
				[47.4, 56.88],
				[51, 61.2],
				[55.12, 66.15],
				[59.98, 71.97],
				[64.83, 77.79],
				[69.68, 83.61],
				[74.97, 89.96]
			],
			"四段伤害": [
				60.72,
				65.66,
				70.6,
				77.66,
				82.6,
				88.25,
				96.02,
				103.78,
				111.55,
				120.02,
				129.73,
				141.14,
				152.56,
				163.98,
				176.43
			],
			"五段伤害": [
				76.11,
				82.28999999999999,
				88.5,
				97.35000000000001,
				103.53,
				110.64000000000001,
				120.35999999999999,
				130.07999999999998,
				139.82999999999998,
				150.45,
				162.63,
				176.94,
				191.25,
				205.56,
				221.16
			],
			"五段伤害2": [
				[25.37, 3],
				[27.43, 3],
				[29.5, 3],
				[32.45, 3],
				[34.51, 3],
				[36.88, 3],
				[40.12, 3],
				[43.36, 3],
				[46.61, 3],
				[50.15, 3],
				[54.21, 3],
				[58.98, 3],
				[63.75, 3],
				[68.52, 3],
				[73.72, 3]
			],
			"重击伤害": [
				117.65,
				127.22,
				136.8,
				150.48000000000002,
				160.06,
				171,
				186.05,
				201.1,
				216.14,
				232.56,
				251.36,
				273.49,
				295.62,
				317.73,
				341.86
			],
			"重击伤害2": [
				[43, 74.65],
				[46.5, 80.72],
				[50, 86.8],
				[55, 95.48],
				[58.5, 101.56],
				[62.5, 108.5],
				[68, 118.05],
				[73.5, 127.6],
				[79, 137.14],
				[85, 147.56],
				[91.87, 159.49],
				[99.96, 173.53],
				[108.05, 187.57],
				[116.13, 201.6],
				[124.95, 216.91]
			],
			"下坠期间伤害": [
				81.83,
				88.49,
				95.16,
				104.67,
				111.33,
				118.94,
				129.41,
				139.88,
				150.35,
				161.76,
				173.18,
				184.6,
				196.02,
				207.44,
				218.86
			],
			"低空/高空坠地冲击伤害": [
				[163.63, 204.39],
				[176.95, 221.02],
				[190.27, 237.66],
				[209.3, 261.42],
				[222.62, 278.06],
				[237.84, 297.07],
				[258.77, 323.21],
				[279.7, 349.36],
				[300.63, 375.5],
				[323.46, 404.02],
				[346.29, 432.54],
				[369.12, 461.06],
				[391.96, 489.57],
				[414.79, 518.09],
				[437.62, 546.61]
			],
			"低空/高空坠地冲击伤害2": [
				[163.63, 204.39],
				[176.95, 221.02],
				[190.27, 237.66],
				[209.3, 261.42],
				[222.62, 278.06],
				[237.84, 297.07],
				[258.77, 323.21],
				[279.7, 349.36],
				[300.63, 375.5],
				[323.46, 404.02],
				[346.29, 432.54],
				[369.12, 461.06],
				[391.96, 489.57],
				[414.79, 518.09],
				[437.62, 546.61]
			]
		},
		[GsTalentType.e]: {
			"点按技能伤害": [
				192,
				206.4,
				220.8,
				240,
				254.4,
				268.8,
				288,
				307.2,
				326.4,
				345.6,
				364.8,
				384,
				408,
				432,
				456
			],
			"长按技能伤害": [
				260.8,
				280.36,
				299.92,
				326,
				345.56,
				365.12,
				391.2,
				417.28,
				443.36,
				469.44,
				495.52,
				521.6,
				554.2,
				586.8,
				619.4
			]
		},
		[GsTalentType.q]: {
			"斩击伤害": [
				262.4,
				282.08,
				301.76,
				328,
				347.68,
				367.36,
				393.6,
				419.84,
				446.08,
				472.32,
				498.56,
				524.8,
				557.6,
				590.4,
				623.2
			],
			"持续伤害": [
				120,
				129,
				138,
				150,
				159,
				168,
				180,
				192,
				204,
				216,
				228,
				240,
				255,
				270,
				285
			],
			"附加元素伤害": [
				36,
				38.7,
				41.4,
				45,
				47.7,
				50.4,
				54,
				57.6,
				61.2,
				64.8,
				68.4,
				72,
				76.5,
				81,
				85.5
			]
		}
	},
	cons: new Map([
		[1, {
			name: "千山红遍",
			desc: [
				"千早振的冷却时间减少10%。",
				"施放万叶之一刀时，重置千早振的冷却时间。"
			]
		}],
		[2, {
			name: "山岚残芯",
			desc: [
				"万叶之一刀的流风秋野具有以下效果：",
				"·持续期间内，枫原万叶自己的元素精通提升200点；",
				"·其中的场上角色的元素精通提升200点。",
				"该命之座提供的元素精通提升效果无法叠加。"
			]
		}],
		[3, {
			name: "枫袖奇谭",
			desc: [
				"千早振的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "大空幻法",
			desc: [
				"当枫原万叶的元素能量低于45点时，具有如下效果：",
				"·点按、长按施放千早振时，将分别为枫原万叶恢复3、4点元素能量；",
				"·处于滑翔状态下时，每秒为枫原万叶恢复2点元素能量。"
			]
		}],
		[5, {
			name: "万世之集",
			desc: [
				"万叶之一刀的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "血赤叶红",
			desc: [
				"枫原万叶施放千早振或万叶之一刀后的5秒内，获得风元素附魔，并且枫原万叶的每点元素精通，都会使他的普通攻击、重击、下落攻击造成的伤害提高0.2%。"
			]
		}]
	]),
	passive: [
		{
			name: "松风霞立",
			desc: [
				"队伍中自己的角色冲刺消耗的体力降低20%。",
				"无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "相闻之剑法",
			desc: [
				"千早振在施放时，如果接触了水元素/火元素/冰元素/雷元素，则会使这次千早振的下落攻击·乱岚拨止，发生元素转化，将附加200%攻击力的对应元素伤害，该伤害视为下落攻击伤害。每次千早振的技能效果中，元素转化仅会发生一次。"
			],
		},
		{
			name: "风物之诗咏",
			desc: [
				"枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成，持续8秒。通过这种方式获得的不同元素伤害加成可以共存。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.mastery
		],
		details: new Map([
			["1", [1039, 23.09, 62.82, 0]],
			["20", [2695, 59.89, 162.96, 0]],
			["40", [5366, 119.24, 324.44, 0]],
			["50", [6902, 153.37, 417.3, 28.799999237061]],
			["60", [8659, 192.39, 523.49, 57.599998474121]],
			["70", [10213, 226.91, 617.42, 57.599998474121]],
			["80", [11777, 261.67, 711.98, 86.400001525879]],
			["90", [13348, 296.58, 806.98, 115.19999694824]],
			["20+", [3586, 79.69, 216.82, 0]],
			["40+", [5999, 133.3, 362.71, 28.799999237061]],
			["50+", [7747, 172.12, 468.33, 57.599998474121]],
			["60+", [9292, 206.46, 561.76, 57.599998474121]],
			["70+", [10846, 240.98, 655.69, 86.400001525879]],
			["80+", [12410, 275.73, 750.25, 115.19999694824]]
		])
	},
};
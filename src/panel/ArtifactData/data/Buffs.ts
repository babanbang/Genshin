import { AttrKeys } from "@/types";
import { ArtifactBuffData, ArtifactBuffDataMap } from "@/types/panel/ArtifactData";
import { GsElement, GsTalentType, GsWeaponType } from "karin-plugin-mystool";

const map = (key: AttrKeys, name: string) => ['', 'Plus', 'Pct'].map(k => [key + k, name]) as [string, string][]
const keyMap = new Map([
	...map(AttrKeys.hp, '生命值'),
	...map(AttrKeys.atk, '攻击力'),
	...map(AttrKeys.def, '防御力'),
	[AttrKeys.cpct, '暴击率'],
	[AttrKeys.dmg, '元素伤害'],
	[AttrKeys.phy, '物理伤害'],
	[AttrKeys.heal, '治疗加成'],
	[AttrKeys.shield, '护盾强效'],
	[AttrKeys.mastery, '元素精通']
])

const attr = (key: string, val: number, elem?: GsElement, unit = '%'): ArtifactBuffData => ({
	title: `${keyMap.get(key)}提高${val}${unit}`,
	isStatic: true, elem,
	data: { [key]: val },
})

export const artisSuitBuffsMap: Map<number, ArtifactBuffDataMap> = new Map([
	/** 行者之心 */
	[400003, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '重击的暴击率提高30%',
			data: {
				a2Cpct: 30
			}
		}]
	])],
	/** 勇士之心 */
	[400008, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '对生命值高于50%的敌人，造成的伤害增加30%',
			data: {
				dmg: 30
			}
		}]
	])],
	/** 守护之心 */
	[400013, new Map([
		[2, attr(AttrKeys.def + 'Pct', 30)]
	])],
	/** 战狂 */
	[400023, new Map([
		[2, attr(AttrKeys.cpct, 12)],
		[4, {
			title: '生命值低于70%时，暴击率提升24%',
			data: {
				cpct: 24
			}
		}]
	])],
	/** 武人 */
	[400028, new Map([
		[2, {
			title: '普攻与重击造成的伤害提高15%',
			data: {
				aDmg: 15,
				a2Dmg: 15
			}
		}],
		[4, {
			title: '施放元素战技后的8秒内，普攻和重击伤害提升25%',
			data: {
				aDmg: 25,
				a2Dmg: 25
			}
		}]
	])],
	/** 教官 */
	[400033, new Map([
		[2, attr(AttrKeys.mastery, 80)],
		[4, {
			title: '触发元素反应后，队伍中所有角色的元素精通提高120点',
			data: {
				mastery: 120,
				masteryInc: 120
			}
		}]
	])],
	/** 赌徒 */
	[400038, new Map([
		[2, {
			title: '元素战技造成的伤害提升20%',
			data: {
				eDmg: 20
			}
		}]
	])],
	/** 流放者 */
	[400043, new Map([
		[2, attr(AttrKeys.recharge, 20)]
	])],
	/** 冒险家 */
	[400048, new Map([
		[2, attr(AttrKeys.hp + 'Plus', 1000, undefined, '点')]
	])],
	/** 幸运儿 */
	[400052, new Map([
		[2, attr(AttrKeys.def + 'Plus', 100, undefined, '点')]
	])],
	/** 学士 */
	[400058, new Map([
		[2, attr(AttrKeys.recharge, 20)]
	])],
	/** 冰风迷途的勇士 */
	[400069, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.cryo)],
		[4, {
			check: ({ elem }) => elem === GsElement.cryo,
			title: '攻击处于冰元素影响下的敌人时，暴击率提高20%',
			data: {
				cpct: 20
			}
		}]
	])],
	/** 平息鸣雷的尊者 */
	[400074, new Map([
		[4, {
			check: ({ elem }) => elem === GsElement.electro,
			title: '对处于雷元素影响下的敌人造成的伤害提升35%',
			data: {
				dmg: 35
			}
		}]
	])],
	/** 渡过烈火的贤人 */
	[400079, new Map([
		[4, {
			check: ({ elem }) => elem === GsElement.pyro,
			title: '对处于火元素影响下的敌人造成的伤害提升35%',
			data: {
				dmg: 35
			}
		}]
	])],
	/** 被怜爱的少女 */
	[400084, new Map([
		[2, attr(AttrKeys.heal, 15)],
		[4, {
			title: '施放元素战技或元素爆发后，受治疗效果加成提高20%',
			data: {
				healInc: 20
			}
		}]
	])],
	/** 角斗士的终幕礼 */
	[400089, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			check: ({ weaponType }) => [GsWeaponType.claymore, GsWeaponType.polearm, GsWeaponType.sword].some(t => t === weaponType),
			title: '角色普通攻击造成的伤害提高35%',
			data: {
				aDmg: 35
			}
		}]
	])],
	/** 翠绿之影 */
	[400094, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.anemo)],
		[4, {
			title: '扩散反应造成的伤害提升60%，降低对应元素抗性40%',
			data: {
				swirl: 60,
				fykx: 40
			}
		}]
	])],
	/** 流浪大地的乐团 */
	[400099, new Map([
		[2, attr(AttrKeys.mastery, 80)],
		[4, {
			check: ({ weaponType }) => [GsWeaponType.bow, GsWeaponType.catalyst].some(t => t === weaponType),
			title: '角色重击造成的伤害提高35%',
			data: {
				a2Dmg: 35
			}
		}]
	])],
	/** 如雷的盛怒 */
	[400104, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.electro)],
		[4, {
			title: '超载、感电、超导反应造成的伤害提升40%，超激化反应带来的伤害提升提高20%',
			data: {
				overloaded: 40,
				electroCharged: 40,
				superConduct: 40,
				aggravate: 20
			}
		}]
	])],
	/** 炽烈的炎之魔女 */
	[400109, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.pyro)],
		[4, {
			check: ({ elem }) => elem === GsElement.pyro,
			title: '蒸发、融化伤害提高15%，[buffCount]层额外提高[dmg]%火元素伤害加成，超载、燃烧、烈绽放反应造成的伤害提升40%',
			data: {
				vaporize: 15,
				melt: 15,
				overloaded: 40,
				burning: 40,
				burgeon: 40,
				dmg: ({ params }) => (params.monv || 1) * 7.5,
				buffCount: ({ params }) => params.monv || 1
			}
		}]
	])],
	/** 昔日宗室之仪 */
	[400114, new Map([
		[2, {
			title: '元素爆发造成的伤害提升20%',
			data: {
				qDmg: 20
			}
		}],
		[4, {
			check: ({ currentTalent }) => currentTalent === GsTalentType.q,
			title: '施放元素爆发后，攻击力提升20%',
			data: {
				atkPct: 20
			}
		} as ArtifactBuffData]
	])],
	/** 染血的骑士道 */
	[400119, new Map([
		[2, attr(AttrKeys.phy, 25)],
		[4, {
			title: '击败敌人后的10秒内，重击造成的伤害提升50%',
			data: {
				a2Dmg: 50
			}
		}]
	])],
	/** 悠古的磐岩 */
	[400154, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.geo)],
		[4, {
			title: '获得元素反应晶片，对应元素伤害提高35%',
			data: {
				dmg: 35
			}
		}]
	])],
	/** 逆飞的流星 */
	[400159, new Map([
		[2, attr(AttrKeys.shield, 35)],
		[4, {
			title: '处于护盾庇护下时，获得40%普攻和重击伤害加成',
			data: {
				aDmg: 40,
				a2Dmg: 40
			}
		}]
	])],
	/** 沉沦之心 */
	[400164, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.hydro)],
		[4, {
			title: '施放元素战技后，普攻与重击伤害提高30%',
			data: {
				aDmg: 30,
				a2Dmg: 30
			}
		}]
	])],
	/** 千岩牢固 */
	[400169, new Map([
		[2, attr(AttrKeys.hp + 'Pct', 20)],
		[4, {
			title: '元素战技命中敌人后，攻击力提升[atkPct]%，护盾强效提升[shield]%',
			data: {
				atkPct: 20,
				shield: 30
			}
		}]
	])],
	/** 苍白之火 */
	[400174, new Map([
		[2, attr(AttrKeys.phy, 25)],
		[4, {
			title: '2层提高18%攻击力，物理伤害额外提高25%',
			data: {
				atkPct: 18,
				phy: 25
			}
		}]
	])],
	/** 追忆之注连 */
	[400179, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '施放元素战技后，普通攻击、重击、下落攻击造成的伤害提高50%',
			data: {
				aDmg: 50,
				a2Dmg: 50,
				a3Dmg: 50
			}
		}]
	])],
	/** 绝缘之旗印 */
	[400184, new Map([
		[2, attr(AttrKeys.recharge, 20)],
		[4, {
			title: '基于元素充能效率提高元素爆发[qDmg]%伤害',
			sort: 4,
			data: {
				qDmg: ({ attr }) => Math.min(75, (attr.recharge.base + attr.recharge.plus) * 0.25)
			}
		}]
	])],
	/** 华馆梦醒形骸记 */
	[400189, new Map([
		[2, attr(AttrKeys.def + 'Pct', 30)],
		[4, {
			title: '满层获得24%防御及24%岩伤加成',
			data: {
				defPct: 24,
				dmg: 24
			}
		}]
	])],
	/** 海染砗磲 */
	[400194, new Map([
		[2, attr(AttrKeys.heal, 15)]
	])],
	/** 辰砂往生录 */
	[400199, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '满层提高48%攻击力',
			data: {
				atkPct: 48
			}
		}]
	])],
	/** 来歆余响 */
	[400204, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '触发提高普攻[aPlus]伤害',
			sort: 9,
			data: {
				aPlus: ({ attr }) => attr.atk.base * 0.35
			}
		}]
	])],
	/** 深林的记忆 */
	[400209, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.dendro)],
		[4, {
			title: '元素战技或元素爆发命中敌人后，使命中目标的草元素抗性降低30%',
			check: ({ elem }) => elem === GsElement.dendro,
			data: {
				kx: 30
			}
		}]
	])],
	/** 饰金之梦 */
	[400214, new Map([
		[2, attr(AttrKeys.mastery, 80)],
		[4, {
			title: '队伍存在[mArtisDiffCount]个不同元素类型角色，[sameCount]个相同类型角色，精通提高[mastery]，攻击力提高[atkPct]%',
			data: {
				mArtisDiffCount: ({ params }) => params.mArtisDiffCount || 3,
				sameCount: ({ params }) => 3 - (params.mArtisDiffCount || 3),
				mastery: ({ params }) => (params.mArtisDiffCount || 3) * 50,
				atkPct: ({ params }) => (3 - (params.mArtisDiffCount || 3)) * 14
			}
		}]
	])],
	/** 沙上楼阁史话 */
	[400221, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.anemo)],
		[4, {
			title: '重击命中敌人后，普攻重击与下落攻击伤害提升40',
			data: {
				aDmg: 40,
				a2Dmg: 40,
				a3Dmg: 40
			}
		}]
	])],
	/** 乐园遗落之花 */
	[400231, new Map([
		[2, attr(AttrKeys.mastery, 80)],
		[4, {
			title: '满层提高绽放、超绽放、烈绽放反应造成的伤害提升80%',
			data: {
				bloom: 80,
				burgeon: 80,
				hyperBloom: 80
			}
		}]
	])],
	/** 水仙之梦 */
	[400241, new Map([
		[2, attr(AttrKeys.dmg, 15, GsElement.hydro)],
		[4, {
			title: '3层Buff下提高攻击力25%，水伤15%',
			data: {
				atkPct: 25,
				dmg: 15
			}
		}]
	])],
	/** 花海甘露之光 */
	[400251, new Map([
		[2, attr(AttrKeys.hp + 'Pct', 20)],
		[4, {
			title: '5层Buff下提高元素战技与元素爆发伤害50%',
			data: {
				eDmg: 50,
				qDmg: 50
			}
		}]
	])],
	/** 逐影猎人 */
	[400261, new Map([
		[2, {
			title: '普通攻击与重击造成的伤害提高15%',
			data: {
				aDmg: 15,
				a2Dmg: 15
			}
		}],
		[4, {
			title: '3层Buff下提高暴击率36%',
			data: {
				cpct: 36
			}
		}]
	])],
	/** 黄金剧团 */
	[400271, new Map([
		[2, {
			title: '元素战技造成的伤害提升20%',
			data: {
				eDmg: 20
			}
		}],
		[4, {
			title: '满层时元素战技造成的伤害提升50%',
			data: {
				eDmg: 50
			}
		}]
	])],
	/** 昔时之歌 */
	[400281, new Map([
		[2, attr(AttrKeys.heal, 15)],
		[4, {
			title: '触发后，普通攻击、重击、下落攻击、元素战技与元素爆发伤害提高1200',
			sort: 9,
			data: {
				aPlus: 1200,
				a2Plus: 1200,
				a3Plus: 1200,
				ePlus: 1200,
				qPlus: 1200
			}
		}]
	])],
	/** 回声之林夜话 */
	[400291, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			check: ({ elem }) => elem === GsElement.geo,
			title: '施放元素战技后，岩元素伤害加成提升50%',
			data: {
				dmg: 50
			}
		}]
	])],
	/** 谐律异想断章 */
	[400301, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '生命之契的数值提升或降低时，角色造成的伤害提升[dmg]%',
			data: {
				dmg: 18 * 3
			}
		}]
	])],
	/** 未竟的遐思 */
	[400311, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '存在处于燃烧状态下的敌人时，伤害提升[dmg]%',
			data: {
				dmg: 10 * 5
			}
		}]
	])],
	/** 烬城勇者绘卷 */
	[400321, new Map([
		[2, attr(AttrKeys.atk + 'Pct', 18)],
		[4, {
			title: '存在处于燃烧状态下的敌人时，伤害提升[dmg]%',
			data: {
				dmg: 10 * 5
			}
		}]
	])],
	/** 黑曜秘典 */
	[400331, new Map([
		[2, {
			check: ({ params }) => params.Nightsoul === true,
			title: '在场上处于夜魂加持状态时，造成的伤害提高[dmg]%',
			data: {
				dmg: 15
			}
		}],
		[4, {
			check: ({ params }) => params.Nightsoul === true,
			title: '在场上消耗夜魂值后，暴击率提高[cpct]%',
			data: {
				cpct: 40
			}
		}]
	])]
])
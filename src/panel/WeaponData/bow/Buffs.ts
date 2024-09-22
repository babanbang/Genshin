import { WeaponBuffFunc } from "@/types"
import { GsElement } from "karin-plugin-mystool"

export const BowBuffs: WeaponBuffFunc = (step, staticStep) => ({
	/** 鸦羽弓 */
	15301: [{
		check: ({ elem }) => [GsElement.hydro, GsElement.pyro].some(e => e === elem),
		title: '对处于水或火元素影响下的敌人，造成的伤害提高[dmg]%',
		refine: {
			dmg: step(12)
		}
	}],
	/** 神射手之誓 */
	15302: [{
		title: '针对要害造成的伤害提升[a2Dmg]%',
		refine: {
			a2Dmg: step(24)
		}
	}],
	/** 弹弓 */
	15304: [{
		title: '普攻与重击的箭矢0.3秒内击中敌人，伤害增加[a2Dmg]%',
		refine: {
			aDmg: step(36, 6),
			a2Dmg: step(36, 6)
		}
	}],
	/** 绝弦 */
	15402: [{
		title: '元素战技与元素爆发的伤害提高[eDmg]%',
		refine: {
			eDmg: step(24),
			qDmg: step(24)
		}
	}],
	/** 宗室长弓 */
	15404: [{
		title: '3层提高暴击率[cpct]%',
		buffCount: 3,
		refine: {
			cpct: step(8)
		}
	}],
	/** 弓藏 */
	15405: [{
		title: '普攻造成的伤害提升[aDmg]%，重击造成的伤害下降10%',
		refine: {
			aDmg: step(40),
			a2Dmg: -10
		}
	}],
	/** 试作澹月 */
	15406: [{
		title: '重击命中要害提高[atkPct]%攻击力',
		refine: {
			atkPct: step(36)
		}
	}],
	/** 钢轮弓 */
	15407: [{
		title: '普通攻击与重击命中时，满层提升[atkPct]%',
		buffCount: 4,
		refine: {
			atkPct: step(4)
		}
	}],
	/** 黑岩战弓 */
	15408: [{
		title: '击败敌人后，攻击力满层提升[atkPct]%',
		buffCount: 3,
		refine: {
			atkPct: step(12)
		}
	}],
	/** 暗巷猎手 */
	15410: [{
		title: '满层提高[dmg]%伤害',
		refine: {
			dmg: step(20)
		}
	}],
	/** 落霞 */
	15411: [{
		title: '二层状态下提高伤害[dmg]%',
		refine: {
			dmg: step(10, 2.5)
		}
	}],
	/** 幽夜华尔兹 */
	15412: [{
		title: 'Buff下普攻及元素战技造成的伤害提升[aDmg]%',
		refine: {
			aDmg: step(20),
			eDmg: step(20)
		}
	}],
	/** 风花之颂 */
	15413: [{
		title: '施放元素战技时攻击力提升[atkPct]%',
		refine: {
			atkPct: step(16)
		}
	}],
	/** 破魔之弓 */
	15414: [{
		title: '满能量下普攻伤害提高[aDmg]%，重击伤害提高[a2Dmg]%',
		buffCount: 2,
		refine: {
			aDmg: step(16),
			a2Dmg: step(12)
		}
	}],
	/** 掠食者 */
	15415: [{
		check: ({ elem }) => elem === GsElement.cryo,
		title: '满Buff普攻与重击伤害提高[aDmg]%，埃洛伊攻击力提升66',
		refine: {
			aDmg: [20],
			atkPlus: 66
		}
	}],
	/** 曚云之月 */
	15416: [{
		title: '满层元素爆发伤害提高[qDmg]%',
		refine: {
			qDmg: step(40)
		}
	}],
	/** 王下近侍 */
	15417: [{
		title: '施放元素战技或元素爆发时精通提高[mastery]',
		refine: {
			mastery: step(60, 20)
		}
	}],
	/** 鹮穿之喙 */
	15419: [{
		title: '重击命中敌人2层提高元素精通[mastery]点',
		data: {
			mastery: step(80)
		}
	}],
	/** 烈阳之嗣 */
	15424: [{
		title: '对于灼心状态下的敌人造成的伤害提升[dmg]%',
		refine: {
			dmg: step(28)
		}
	}],
	/** 静谧之曲 */
	15425: [{
		title: '受到治疗后，造成的伤害提升[dmg]%',
		refine: {
			dmg: step(16)
		}
	}],
	/** 筑云 */
	15426: [{
		title: '元素能量减少后，装备者的元素精通提升[mastery]%',
		refine: {
			mastery: step(40, 10)
		}
	}],
	/** 测距规 */
	15427: [{
		title: '满层下，提高[atkPct]%攻击力与[dmg]%所有元素伤害加成',
		refine: {
			atkPct: [3 * 3, 4 * 3, 5 * 3, 6 * 3, 7 * 3],
			dmg: [7 * 3, 8.5 * 3, 10 * 3, 11.5 * 3, 13 * 3]
		}
	}],
	/** 天空之翼 */
	15501: [staticStep('cdmg', 20)],
	/** 阿莫斯之弓 */
	15502: [{
		title: '普攻与重击伤害提高[a2Dmg]%',
		refine: {
			aDmg: step(12),
			a2Dmg: step(12)
		}
	}, {
		title: '5段Buff重击伤害提高[a2Dmg]%',
		buffCount: 5,
		refine: {
			aDmg: step(8),
			a2Dmg: step(8)
		}
	}],
	/** 终末嗟叹之诗 */
	15503: [staticStep('mastery', 60), {
		title: 'Buff下提高元素精通[mastery],攻击力[atkPct]%',
		sort: 0,
		refine: {
			mastery: step(100),
			atkPct: step(20)
		}
	}],
	/** 冬极白星 */
	15507: [{
		title: '元素战技与元素爆发伤害提高[eDmg]%',
		refine: {
			eDmg: step(12),
			qDmg: step(12)
		}
	}, {
		title: '满Buff下提高攻击力[atkPct]%',
		refine: {
			atkPct: step(48, 12)
		}
	}],
	/** 若水 */
	15508: [staticStep('hpPct', 16), {
		title: '生命值提高[_hpPct]%，伤害提高[dmg]%',
		refine: {
			_hpPct: step(16),
			dmg: step(20)
		}
	}],
	/** 飞雷之弦振 */
	15509: [staticStep('atkPct', 20), {
		title: '满Buff下提高普攻伤害[aDmg]%',
		refine: {
			aDmg: step(40)
		}
	}],
	/** 猎人之径 */
	15511: [{
		title: '元素伤害提高[dmg]%，重击造成的伤害值提高[a2Plus]',
		sort: 9,
		data: {
			dmg: ({ refine }) => step(12)[refine],
			a2Plus: ({ attr, calc, refine }) => calc(attr.mastery) * step(160)[refine] / 100
		}
	}],
	/** 最初的大魔术 */
	15512: [{
		title: '重击造成的伤害提升[a2Dmg]%',
		refine: {
			a2Dmg: step(16)
		}
	}, {
		title: '满Buff下提高攻击力[atkPct]%',
		refine: {
			atkPct: step(48)
		}
	}],
	/** 白雨心弦 */
	15513: [{
		title: '满层下，生命值上限提升[hpPct]%元素爆发的暴击率提[qCpct]%',
		refine: {
			hpPct: step(40, 10),
			qCpct: step(28)
		}
	}]
})
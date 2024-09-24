import { WeaponBuffFunc } from "@/types"
import { GsElement } from "karin-plugin-mystool"

export const ClaymoreBuffs: WeaponBuffFunc = (step, staticStep) => ({
	/** 铁影阔剑 */
	12301: [{
		title: '生命值低于70%时，提高[a2Dmg]%重击伤害',
		refine: {
			a2Dmg: step(30, 5)
		}
	}],
	/** 沐浴龙血的剑 */
	12302: [{
		check: ({ elem }) => [GsElement.pyro, GsElement.electro].some(e => e === elem),
		title: '对处于火元素或雷元素影响下的敌人，造成的伤害提高[dmg]%',
		refine: {
			dmg: step(12),
			phy: step(12)
		}
	}],
	/** 飞天大御剑 */
	12306: [{
		title: '满层提高攻击力[atkPct]%',
		buffCount: 4,
		refine: {
			atkPct: step(6, 1)
		}
	}],
	/** 钟剑 */
	12402: [{
		title: '角色处于护盾庇护下时，造成的伤害提升[dmg]%',
		refine: {
			dmg: step(12),
			phy: step(12)
		}
	}],
	/** 宗室大剑 */
	12404: [{
		title: '3层Buff提高暴击率[cpct]%',
		buffCount: 3,
		refine: {
			cpct: step(8)
		}
	}],
	/** 雨裁 */
	12405: [{
		check: ({ elem }) => [GsElement.hydro, GsElement.electro].some(e => e === elem),
		title: '对处于水元素或雷元素影响下的敌人，造成的伤害提高[dmg]%',
		refine: {
			dmg: step(20, 4),
			phy: step(20, 4)
		}
	}],
	/** 白影剑 */
	12407: [{
		title: '满Buff提升攻击力及防御力[atkPct]%',
		buffCount: 4,
		refine: {
			atkPct: step(6),
			defPct: step(6)
		}
	}],
	/** 黑岩斩刀 */
	12408: [{
		title: '击败敌人满Buff下攻击力提升[atkPct]%',
		buffCount: 3,
		refine: {
			atkPct: step(12)
		}
	}],
	/** 螭骨剑 */
	12409: [{
		title: '满Buff提高伤害[dmg]%',
		buffCount: 5,
		refine: {
			dmg: step(6, 1),
			phy: step(6, 1)
		}
	}],
	/** 千岩古剑 */
	12410: [{
		title: '四璃月角色提升攻击力[atkPct]%及暴击率[cpct]%',
		buffCount: 4,
		refine: {
			atkPct: step(3, 1),
			cpct: step(3, 1)
		}
	}],
	/** 衔珠海皇 */
	12412: [{
		title: '元素爆发造成的伤害提升[qDmg]%',
		refine: {
			qDmg: step(12)
		}
	}],
	/** 桂木斩长正 */
	12414: [{
		title: '元素战技造成的伤害提升[eDmg]%',
		refine: {
			eDmg: step(6)
		}
	}],
	/** 玛海菈的水色 */
	12415: [{
		title: '基于元素精通提升攻击力[atkPlus]',
		sort: 6,
		data: {
			atkPlus: ({ attr, calc, refine }) => step(24)[refine] * calc(attr.mastery) / 100
		}
	}],
	/** 恶王丸 */
	12416: [{
		title: '满层元素爆发造成的伤害提升[qDmg]%',
		refine: {
			qDmg: step(40)
		}
	}],
	/** 森林王器 */
	12417: [{
		title: '拾取种识之叶的角色元素精通提升[mastery]',
		refine: {
			mastery: step(60)
		}
	}],
	/** 饰铁之花 */
	12418: [{
		title: '元素战技或触发元素反应提高[atkPct]%攻击力，[mastery]点元素精通',
		refine: {
			atkPct: step(12),
			mastery: step(48)
		}
	}],
	/** 聊聊棒 */
	12424: [{
		title: '承受火元素附着，攻击力提升[atkPct]%',
		refine: {
			atkPct: step(16)
		}
	}, {
		title: '承受水元素、冰元素或雷元素，元素伤害加成提升[dmg]%',
		refine: {
			dmg: step(12)
		}
	}],
	/** 浪影阔剑 */
	12425: [{
		title: '受到治疗时，攻击力提升[atkPct]%',
		refine: {
			atkPct: step(24)
		}
	}],
	/** 「究极霸王超级魔剑」 */
	12426: [{
		title: '攻击力提升[atkPct]%',
		refine: {
			atkPct: step(12 * 2)
		}
	}],
	/** 便携动力锯 */
	12427: [{
		title: '满层时，元素精通提升[mastery]点',
		data: {
			mastery: step(40 * 3)
		}
	}],
	/** 撼地者 */
	12431: [{
		check: ({ elem }) => elem === GsElement.pyro,
		title: '触发火元素相关反应，元素战技造成的伤害提升[eDmg]%',
		refine: {
			eDmg: step(16)
		}
	}],
	/** 天空之傲 */
	12501: [{
		title: '造成伤害提高[dmg]%',
		refine: {
			dmg: step(8),
			phy: step(8)
		}
	}],
	/** 狼的末路 */
	12502: [staticStep('atkPct', 20), {
		title: '攻击命中生命值低于30%的敌人时，攻击力提升[atkPct]%',
		refine: {
			atkPct: step(40)
		}
	}],
	/** 松籁响起之时 */
	12503: [staticStep('atkPct', 16), {
		title: 'Buff状态下提高攻击力[atkPct]%',
		refine: {
			atkPct: step(20)
		}
	}],
	/** 无工之剑 */
	12504: [{
		title: '护盾强效提高[shield]%',
		refine: {
			shield: step(20)
		}
	}, {
		title: '满Buff护盾下攻击力提高[atkPct]%',
		buffCount: 10,
		refine: {
			atkPct: step(4)
		}
	}],
	/** 赤角石溃杵 */
	12510: [staticStep('defPct', 28), {
		title: '普通攻击与重击造成的伤害值提高[aPlus]',
		sort: 9,
		data: {
			aPlus: ({ attr, calc, refine }) => calc(attr.def) * step(40)[refine] / 100,
			a2Plus: ({ attr, calc, refine }) => calc(attr.def) * step(40)[refine] / 100
		}
	}],
	/** 苇海信标 */
	12511: [{
		title: '元素战技命中敌人并受伤害后提升攻击力[atkPct]%',
		refine: {
			atkPct: step(40)
		}
	}, {
		title: '不处于护盾情况下提升生命值[hpPct]%',
		refine: {
			hpPct: step(32)
		}
	}],
	/** 裁断 */
	12512: [staticStep('atkPct', 20), {
		title: '满层时，元素战技造成的伤害提升[eDmg]%',
		refine: {
			eDmg: step(18 * 2)
		}
	}],
	/** 山王长牙 */
	12513: [{
		title: '满层时，元素战技与元素爆发伤害提升[eDmg]%',
		refine: {
			eDmg: step(10 * 6),
			qDmg: step(10 * 6)
		}
	}]
})

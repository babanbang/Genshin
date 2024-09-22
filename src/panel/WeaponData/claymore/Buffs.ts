import { WeaponBuffFunc } from "@/types"
import { GsElement } from "karin-plugin-mystool"

export const ClaymoreBuffs: WeaponBuffFunc = (step, staticStep) => ({
	12301: [{
		title: '生命值低于70%时，提高[a2Dmg]%重击伤害',
		refine: {
			a2Dmg: step(30, 5)
		}
	}],
	12302: [{
		check: ({ elem }) => [GsElement.pyro, GsElement.electro].some(e => e === elem),
		title: '对处于火元素或雷元素影响下的敌人，造成的伤害提高[dmg]%',
		refine: {
			dmg: step(12),
			phy: step(12)
		}
	}],
	12306: [{
		title: '满层提高攻击力[atkPct]%',
		buffCount: 4,
		refine: {
			atkPct: step(6, 1)
		}
	}],
	12402: [{
		title: '角色处于护盾庇护下时，造成的伤害提升[dmg]%',
		refine: {
			dmg: step(12),
			phy: step(12)
		}
	}],
	12404: [{
		title: '3层Buff提高暴击率[cpct]%',
		buffCount: 3,
		refine: {
			cpct: step(8)
		}
	}],
	12405: [{
		check: ({ elem }) => [GsElement.hydro, GsElement.electro].some(e => e === elem),
		title: '对处于水元素或雷元素影响下的敌人，造成的伤害提高[dmg]%',
		refine: {
			dmg: step(20, 4),
			phy: step(20, 4)
		}
	}],
	12407: [{
		title: '满Buff提升攻击力及防御力[atkPct]%',
		buffCount: 4,
		refine: {
			atkPct: step(6),
			defPct: step(6)
		}
	}],
	12408: [{
		title: '击败敌人满Buff下攻击力提升[atkPct]%',
		buffCount: 3,
		refine: {
			atkPct: step(12)
		}
	}],
	12409: [{
		title: '满Buff提高伤害[dmg]%',
		buffCount: 5,
		refine: {
			dmg: step(6, 1),
			phy: step(6, 1)
		}
	}],
	12410: [{
		title: '四璃月角色提升攻击力[atkPct]%及暴击率[cpct]%',
		buffCount: 4,
		refine: {
			atkPct: step(3, 1),
			cpct: step(3, 1)
		}
	}],
	12412: [{
		title: '元素爆发造成的伤害提升[qDmg]%',
		refine: {
			qDmg: step(12)
		}
	}],
	12414: [{
		title: '元素战技造成的伤害提升[eDmg]%',
		refine: {
			eDmg: step(6)
		}
	}],
	12415: [{
		title: '基于元素精通提升攻击力[atkPlus]',
		sort: 6,
		data: {
			atkPlus: ({ attr, calc, refine }) => step(24)[refine] * calc(attr.mastery) / 100
		}
	}],
	12416: [{
		title: '满层元素爆发造成的伤害提升[qDmg]%',
		refine: {
			qDmg: step(40)
		}
	}],
	12417: [{
		title: '拾取种识之叶的角色元素精通提升[mastery]',
		refine: {
			mastery: step(60)
		}
	}],
	12418: [{
		title: '元素战技或触发元素反应提高[atkPct]%攻击力，[mastery]点元素精通',
		refine: {
			atkPct: step(12),
			mastery: step(48)
		}
	}],
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
	12425: [{
		title: '受到治疗时，攻击力提升[atkPct]%',
		refine: {
			atkPct: step(24)
		}
	}],
	12426: [{
		title: '攻击力提升[atkPct]%',
		refine: {
			atkPct: step(12 * 2)
		}
	}],
	12427: [{
		title: '满层时，元素精通提升[mastery]点',
		data: {
			mastery: step(40 * 3)
		}
	}],
	12501: [{
		title: '造成伤害提高[dmg]%',
		refine: {
			dmg: step(8),
			phy: step(8)
		}
	}],
	12502: [staticStep('atkPct', 20), {
		title: '攻击命中生命值低于30%的敌人时，攻击力提升[atkPct]%',
		refine: {
			atkPct: step(40)
		}
	}],
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
	12503: [staticStep('atkPct', 16), {
		title: 'Buff状态下提高攻击力[atkPct]%',
		refine: {
			atkPct: step(20)
		}
	}],
	12510: [staticStep('defPct', 28), {
		title: '普通攻击与重击造成的伤害值提高[aPlus]',
		sort: 9,
		data: {
			aPlus: ({ attr, calc, refine }) => calc(attr.def) * step(40)[refine] / 100,
			a2Plus: ({ attr, calc, refine }) => calc(attr.def) * step(40)[refine] / 100
		}
	}],
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
	12512: [staticStep('atkPct', 20), {
		title: '满层时，元素战技造成的伤害提升[eDmg]%',
		refine: {
			eDmg: step(18 * 2)
		}
	}]
})

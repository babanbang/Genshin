import { WeaponBuffFunc } from "@/types"
import { GsElement } from "karin-plugin-mystool"

export const SwordBuffs: WeaponBuffFunc = (step, staticStep) => ({
	11301: [{
		check: ({ elem }) => [GsElement.hydro, GsElement.cryo].some(e => e === elem),
		title: '对处于水或冰元素影响的敌人伤害提高[dmg]%',
		refine: {
			dmg: step(12),
			phy: step(12)
		}
	}],
	11302: [{
		title: '生命值高于90%时，暴击率提升[cpct]%',
		refine: {
			cpct: step(14)
		}
	}],
	11304: [{
		check: ({ elem }) => elem === GsElement.electro,
		title: '触发雷元素相关反应后攻击力提高[atkPct]%',
		refine: {
			atkPct: step(20)
		}
	}],
	11306: [{
		title: '施放元素爆发后，提高[atkPct]%的攻击力',
		refine: {
			atkPct: step(12)
		}
	}],
	11404: [{
		title: '3层Buff下，暴击率提高[cpct]%',
		buffCount: 3,
		refine: {
			cpct: step(8)
		}
	}],
	11405: [{
		check: ({ elem }) => [GsElement.pyro, GsElement.electro].some(e => e === elem),
		title: '对处于火元素或雷元素影响下的敌人，造成的伤害提高[dmg]%',
		refine: {
			dmg: step(20, 4),
			phy: step(20, 4)
		}
	}],
	11406: [{
		title: '满Buff提高攻击力及防御力[atkPct]%',
		buffCount: 4,
		refine: {
			atkPct: step(4),
			defPct: step(4)
		}
	}],
	11407: [{
		title: '满Buff伤害提高[dmg]%',
		buffCount: 2,
		refine: {
			dmg: step(6),
			phy: step(6)
		}
	}],
	11408: [{
		title: '满Buff攻击力提高[atkPct]%',
		buffCount: 3,
		refine: {
			atkPct: step(12)
		}
	}],
	11409: [{
		title: '普攻与重击的造成的伤害提升[aDmg]%',
		refine: {
			aDmg: step(20),
			a2Dmg: step(20)
		}
	}],
	11410: [{
		title: '角色造成的伤害提升[dmg]%',
		refine: {
			dmg: step(12),
			phy: step(12)
		}
	}],
	11412: [{
		title: '旅行者攻击力提高[atkPlus]',
		data: {
			atkPlus: 66
		}
	}],
	11413: [{
		title: '元素战技的伤害增加[eDmg]%，暴击率提高[eCpct]%',
		refine: {
			eDmg: step(16),
			eCpct: step(6)
		}
	}],
	11415: [{
		title: '元素战技造成的伤害值提高[ePlus]',
		sort: 9,
		data: {
			ePlus: ({ attr, calc, refine }) => calc(attr.def) * step(40)[refine] / 100
		}
	}],
	11416: [{
		title: '触发效果时攻击力提升[atkPct]%',
		refine: {
			atkPct: step(15)
		}
	}],
	11417: [{
		title: '拾取种识之叶的角色元素精通提升[mastery]',
		refine: {
			mastery: step(60)
		}
	}],
	11418: [{
		title: '基于元素精通，提升[recharge]%元素充能效率',
		sort: 6,
		data: {
			recharge: ({ attr, calc, refine }) => calc(attr.mastery) * step(0.036)[refine]
		}
	}],
	11424: [{
		title: '元素战技与元素爆发造成的伤害提升[eDmg]%',
		refine: {
			eDmg: step(16),
			qDmg: step(16)
		}
	}, {
		title: '满层下，元素战技与元素爆发命中敌人，其暴击率提升[eCpct]%',
		refine: {
			eCpct: step(8),
			qCpct: step(8)
		}
	}],
	11425: [{
		title: '释放元素战技攻击力提升[atkPct]%，生命之契提升[atkPlus]点攻击力',
		sort: 9,
		data: {
			atkPlus: ({ attr, calc, refine }) => Math.min(Math.floor(calc(attr.hp) * 0.25 * step(0.24)[refine] / 10), step(150)[refine])
		},
		refine: {
			atkPct: step(12)
		}
	}],
	11426: [{
		title: '元素战技暴击率提升[eCpct]%；此外，施放元素战技后的5秒内，元素充能效率提升[rechargePlus]%',
		refine: {
			eCpct: step(8),
			rechargePlus: [16, 20, 24, 28, 32]
		}
	}],
	11427: [{
		title: '满层提高[mastery]点元素精通',
		refine: {
			mastery: step(40 * 3)
		}
	}],
	11501: [staticStep('atkPct', 20), {
		title: '攻击力提高[_atkPct]%',
		refine: {
			_atkPct: step(20)
		}
	}],
	11502: [staticStep('cpct', 4), {
		title: '暴击提高[_cpct]%',
		refine: {
			_cpct: step(4)
		}
	}],
	11503: [{
		title: '造成的伤害提高[dmg]%',
		refine: {
			dmg: step(10)
		}
	}, {
		title: '触发Buff后提高普攻重击与下落攻击[aDmg]%，攻击力提升[atkPct]%',
		refine: {
			aDmg: step(16),
			a2Dmg: step(16),
			a3Dmg: step(16),
			atkPct: step(20)
		}
	}],
	11504: [{
		title: '护盾强效提升[shield]%',
		refine: {
			shield: step(20)
		}
	}, {
		title: '满Buff提高攻击力[atkPct]%',
		buffCount: 10,
		refine: {
			atkPct: step(4)
		}
	}],
	11505: [staticStep('hpPct', 20), {
		title: '基于生命值上限提高攻击力[atkPlus]',
		sort: 9,
		data: {
			atkPlus: ({ attr, calc, refine }) => calc(attr.hp) * step(1.2)[refine] / 100
		}
	}],
	11509: [{
		title: '元素伤害加成[dmg]%',
		refine: {
			dmg: step(12)
		}
	}, {
		title: '满层获得伤害加成[dmg]%',
		refine: {
			dmg: step(28)
		}
	}],
	11510: [{
		title: '元素伤害加成[dmg]%',
		refine: {
			dmg: step(12)
		}
	}, {
		title: '满层提高普攻[aDmg]%',
		buffCount: 2,
		refine: {
			aDmg: step(20)
		}
	}],
	11511: [staticStep('hpPct', 20), {
		title: '基于生命提升元素精通，满层提升[mastery]',
		sort: 5,
		data: {
			mastery: ({ attr, calc, refine }) => step(0.36 + 0.2)[refine] * calc(attr.hp) / 100
		}
	}],
	11512: [staticStep('cpct', 4), {
		title: '普攻与元素战技造成的伤害值提高[aPlus]',
		sort: 9,
		data: {
			aPlus: ({ attr, calc, refine }) => calc(attr.mastery) * step(120)[refine] / 100,
			ePlus: ({ attr, calc, refine }) => calc(attr.mastery) * step(120)[refine] / 100
		}
	}],
	11513: [{
		title: '生命值变化时，3层Buff战技伤害提高[eDmg]%',
		refine: {
			eDmg: step(8 * 3)
		}
	}, {
		title: '其他角色生命值变化时，2层Buff提高生命上限[hpPct]%',
		refine: {
			hpPct: step(14 * 2)
		}
	}],
	11514: [staticStep('defPct', 20), {
		title: '附近的角色在场上造成岩元素伤害后，普通攻击伤害提升[aDmg]%，元素战伤害提升[eDmg]%；',
		refine: {
			aDmg: step(16 * 2),
			eDmg: step(24 * 2)
		}
	}],
	11515: [staticStep('cdmg', 20), {
		title: '生命之契的数值增加时，装备者造成的伤害提升[dmg]%',
		refine: {
			dmg: step(16 * 3)
		}
	}]
})
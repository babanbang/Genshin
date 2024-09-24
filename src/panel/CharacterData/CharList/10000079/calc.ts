import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 迪希雅 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E释放伤害',
		params: { e2: false },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["净焰昂藏伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E协同伤害',
		params: { e2: true },
		dmg: ({ talent: { e }, calc, attr }, { basic }) => {
			const td = metaData.talentData.e["领域伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.hp) / 100, GsTalentType.e)
		}
	}, {
		title: 'Q炽鬃拳伤害',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => {
			const td = metaData.talentData.q["炽鬃拳伤害2"][q.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.hp) / 100, GsTalentType.q)
		}
	}, {
		title: 'Q炽鬃拳蒸发伤害',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => {
			const td = metaData.talentData.q["炽鬃拳伤害2"][q.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.hp) / 100, GsTalentType.q, DmgTypes.vaporize)
		}
	}],
	buffs: [{
		title: '迪希雅1命：生命值上限提升20%',
		check: ({ cons }) => cons >= 1,
		data: {
			hpPct: 20
		}
	}, {
		title: '迪希雅1命：基于生命值上限，e伤害提高[ePlus]，q伤害提高[qPlus]',
		check: ({ cons }) => cons >= 1,
		sort: 9,
		data: {
			ePlus: ({ attr, calc }) => calc(attr.hp) * 0.036,
			qPlus: ({ attr, calc }) => calc(attr.hp) * 0.06
		}
	}, {
		title: '迪希雅2命：净焰剑狱下次协同攻击造成的伤害提升50%',
		check: ({ cons, params }) => cons >= 2 && params.e2 === true,
		data: {
			eDmg: 50
		}
	}, {
		title: '迪希雅6命：暴击率增加10%，暴击伤害增加60%（默认叠满）',
		check: ({ cons }) => cons === 6,
		data: {
			cpct: 10,
			cdmg: 60
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defParams: () => ({ e2: true }),
	defDmgIdx: 2
}
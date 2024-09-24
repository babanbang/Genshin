import { AttrKeys, CharCalcRuleType, DmgTypes, CalcRuleDetailFuncRet, CalcRuleDetailDmgParams } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 艾尔海森 */
const dmgCalc: (ds: CalcRuleDetailDmgParams['ds'], Func: CalcRuleDetailDmgParams['Func']) => {
	qDmg: CalcRuleDetailFuncRet, q_spread: CalcRuleDetailFuncRet
} = ({ talent: { q }, calc, attr }, { basic }) => {
	const td = metaData.talentData.q["单次伤害2"][q.level]
	const em = calc(attr.mastery)
	const atk = calc(attr.atk)
	return {
		q_spread: basic(td[0] * atk / 100 + td[1] * em / 100, GsTalentType.q, DmgTypes.spread),
		qDmg: basic(td[0] * atk / 100 + td[1] * em / 100, GsTalentType.q)
	}
}

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E普攻第一段激化',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a, DmgTypes.spread)
	}, {
		title: 'E突进激化',
		params: { e: true, q: false },
		dmg: ({ talent: { e }, calc, attr }, { basic }) => {
			const td = metaData.talentData.e["突进攻击伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.mastery) / 100, GsTalentType.e, DmgTypes.spread)
		}
	}, {
		title: '3枚光幕单段',
		dmg: ({ talent: { e }, calc, attr }, { basic }) => {
			const td = metaData.talentData.e["1枚光幕攻击伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.mastery) / 100, GsTalentType.e)
		}
	}, {
		title: '3枚光幕单段激化',
		dmg: ({ talent: { e }, calc, attr }, { basic }) => {
			const td = metaData.talentData.e["1枚光幕攻击伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.mastery) / 100, GsTalentType.e, DmgTypes.spread)
		}
	}, {
		title: 'Q激化总伤-4段',
		params: { e: false, q: true },
		dmg: (ds, dmgFunc) => {
			const { q_spread, qDmg } = dmgCalc(ds, dmgFunc)
			return {
				dmg: qDmg.dmg * 2 + q_spread.dmg * 2,
				avg: qDmg.avg * 2 + q_spread.avg * 2
			}
		}
	}, {
		title: 'Q激化总伤-10段',
		params: { e: false, q: true },
		dmg: (ds, dmgFunc) => {
			const { q_spread, qDmg } = dmgCalc(ds, dmgFunc)
			return {
				dmg: qDmg.dmg * 6 + q_spread.dmg * 4,
				avg: qDmg.avg * 6 + q_spread.avg * 4
			}
		}
	}],
	buffs: [{
		title: '艾尔海森被动：基于元素精通提升EQ伤害[eDmg]%',
		sort: 9, data: {
			eDmg: ({ calc, attr }) => Math.min(100, (calc(attr.mastery)) * 0.1),
			qDmg: ({ calc, attr }) => Math.min(100, (calc(attr.mastery)) * 0.1)
		}
	}, {
		title: '海森2命：每1枚产生的琢光镜将使元素精通提升50点，默认3层',
		check: ({ cons }) => cons >= 2,
		data: {
			mastery: 150
		}
	}, {
		title: '海森4命：每1枚产生的琢光镜将使草元素伤害提升10%，默认3层,不加成Q',
		check: ({ cons, params }) => cons >= 4 && params.q === false,
		data: {
			dmg: 30
		}
	}, {
		title: '艾尔海森六命：暴击率提升10%，暴击伤害提升70%,不加成Q',
		check: ({ cons, params }) => cons === 6 && params.q === false,
		data: {
			cpct: 10,
			cdmg: 70
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defParams: () => ({ q: false, e: true, mArtisDiffCount: 2 }),
	defDmgIdx: 3
}
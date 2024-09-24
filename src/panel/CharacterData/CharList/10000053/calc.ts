import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { metaData } from "./meta"

/** 早柚 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'Q每跳治疗量',
		dmg: ({ talent: { q }, attr, calc, cons }, { heal }) => {
			let num = metaData.talentData.q["不倒貉貉治疗量2"][q.level][0] * calc(attr.atk) / 100 + metaData.talentData.q["不倒貉貉治疗量2"][q.level][1]
			if (cons === 6) {
				num += Math.min(calc(attr.mastery) * 3, 6000)
			}
			return heal(num)
		}
	}, {
		title: '扩散反应伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.swirl)
	}],
	buffs: [{
		title: '早柚6命：基于精通提升Q [qPct]伤害，[_heal]治疗量',
		check: ({ cons }) => cons === 6,
		sort: 9, data: {
			qPct: ({ attr, calc }) => Math.min(calc(attr.mastery) * 0.002, 400),
			_heal: ({ attr, calc }) => Math.min(calc(attr.mastery) * 3, 6000)
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 0
}
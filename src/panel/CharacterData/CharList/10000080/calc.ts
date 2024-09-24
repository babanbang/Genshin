import { AttrKeys, CharCalcRuleType } from "@/types"
import { metaData } from "./meta"

/** 米卡 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'Q施放治疗量',
		dmg: ({ talent: { q }, calc, attr }, { heal }) => heal(metaData.talentData.q["施放治疗量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["施放治疗量2"][q.level][1])
	}, {
		title: '鹰翎治疗量',
		dmg: ({ talent: { q }, calc, attr }, { heal }) => heal(metaData.talentData.q["鹰翎治疗量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["鹰翎治疗量2"][q.level][1])
	}],
	buffs: [],
	mainAttr: [AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
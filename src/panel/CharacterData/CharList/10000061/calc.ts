import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 绮良良 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '秘法·惊喜特派伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: '护盾最大吸收量',
		dmg: ({ talent: { e }, calc, attr }, { shield }) => shield(metaData.talentData.e["护盾吸收量上限2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["护盾吸收量上限2"][e.level][1])
	}],
	buffs: [{
		title: '绮良良被动：基于绮良良的生命上限，秘法·惊喜特派伤害提升[qDmg]%',
		sort: 9,
		data: {
			qDmg: ({ attr, calc }) => calc(attr.hp) / 1000 * 0.3
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
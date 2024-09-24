import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 重云 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '重云E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, ({ cons }) => {
		const count = cons === 6 ? 4 : 3
		return {
			title: `Q ${count}柄灵刃总伤害`,
			dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level] * count, GsTalentType.q)
		}
	}],
	buffs: [{
		title: '重云6命：对于生命百分比低于重云的敌人伤害提升15%，同时额外多一柄灵刃',
		check: ({ cons }) => cons === 6,
		data: {
			qDmg: 15
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
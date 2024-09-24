import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 柯莱 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E单次伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q爆发伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["爆发伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q每跳伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["跃动伤害"][q.level], GsTalentType.q)
	}],
	buffs: [],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
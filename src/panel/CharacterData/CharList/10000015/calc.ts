import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 凯亚 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '霜袭E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q单段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}],
	buffs: [],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
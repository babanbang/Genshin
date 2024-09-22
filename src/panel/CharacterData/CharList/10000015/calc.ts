import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '霜袭E伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害')!, GsTalentType.e)
	}, {
		title: 'Q单段伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害')!, GsTalentType.q)
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0,
	buffs: []
}

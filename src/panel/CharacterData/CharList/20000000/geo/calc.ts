import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 旅行者 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E荒星伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q地震波单次伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["地震波单次伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '岩主1命：处于Q岩造物范围内时，暴击率提高[cpct]%',
		check: ({ cons }) => cons >= 1,
		data: {
			cpct: 10
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.dmg],
	defDmgIdx: 0,
	createdBy: 'Aluxes'
}
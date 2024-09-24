import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 达达利亚 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '开E后重击',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["重击伤害"][e.level], [GsTalentType.a, 2])
	}, {
		title: '断流·斩 伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["断流·斩 伤害"][e.level], GsTalentType.e)
	}, {
		title: '开E后Q伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害·近战"][q.level], GsTalentType.q)
	}, {
		title: '开E后Q蒸发',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害·近战"][q.level], GsTalentType.q, DmgTypes.vaporize)
	}],
	buffs: [],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 3
}
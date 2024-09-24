import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 罗莎莉亚 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E两段伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q技能伤害(2段)',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q每跳伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["冰枪持续伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '修女被动：从背后攻击时，暴击率提升12%',
		data: {
			cpct: 12
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2
}
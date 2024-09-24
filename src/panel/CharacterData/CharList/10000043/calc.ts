import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 砂糖 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q每跳基础伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["持续伤害"][q.level], GsTalentType.q)
	}, {
		title: '为队友提升精通',
		dmg: ({ calc, attr }) => {
			return {
				dmg: 0, avg: calc(attr.mastery) * 0.2 + 50 + (attr.mastery.inc || 0)
			}
		}
	}, {
		title: '扩散反应伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.swirl)
	}],
	buffs: [],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 2
}
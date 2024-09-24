import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 枫原万叶 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E长按伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["长按技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q斩击伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["斩击伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q无转化每段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["持续伤害"][q.level], GsTalentType.q)
	}, {
		title: '扩散反应伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.swirl)
	}],
	buffs: [{
		title: '万叶2命：开Q后精通提高200',
		check: ({ cons }) => cons >= 2,
		data: {
			mastery: 200
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 3
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 埃洛伊 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '附魔普攻第四段',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["四段伤害"][a.level], GsTalentType.a)
	}, {
		title: 'E冰尘弹伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["冰尘弹伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E冷冻炸弹伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["冷冻炸弹伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q技能伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '埃洛伊天赋：冰驰状态提高普攻伤害',
		data: {
			aDmg: ({ talent: { e } }) => metaData.talentData.e["冰驰普通攻击伤害提升"][e.level]
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
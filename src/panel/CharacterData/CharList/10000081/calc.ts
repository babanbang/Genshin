import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 卡维 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '画则巧施伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q后绽放伤害',
		params: { bloom: true },
		dmg: ({ }, { reaction }) => reaction(DmgTypes.bloom)
	}],
	buffs: [{
		title: '繁绘隅穹：草原核迸发伤害提升[bloom]%',
		data: {
			bloom: ({ talent: { q } }) => metaData.talentData.q["草原核迸发伤害加成"][q.level]
		}
	}, {
		title: '卡维4命：卡维触发绽放反应产生的草原核在迸发时造成的伤害提升60%',
		check: ({ cons }) => cons >= 4,
		data: {
			bloom: ({ params }) => params.bloom ? 60 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 0
}
import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 久岐忍 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '超绽放伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.hyperBloom)
	}, {
		title: 'E释放伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E每跳治疗',
		dmg: ({ talent: { e }, calc, attr }, { heal }) => {
			let ec = metaData.talentData.e["越祓草轮治疗量2"][e.level]
			return heal(calc(attr.hp) * ec[0] / 100 + ec[1] + calc(attr.mastery) * 0.75)
		}
	}, {
		title: 'Q每跳伤害',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => basic(metaData.talentData.q["单次伤害"][q.level] * calc(attr.hp) / 100, GsTalentType.q)
	}],
	buffs: [{
		title: '久岐忍被动：生命低于50%时提高治疗加成15%',
		data: {
			heal: 15
		}
	}, {
		title: '久岐忍被动：基于元素精通提高治疗量[healNum]，伤害[ePlus]',
		sort: 9, data: {
			healNum: ({ attr, calc }) => calc(attr.mastery) * 0.75,
			ePlus: ({ attr, calc }) => calc(attr.mastery) * 0.25
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 0
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 瑶瑶 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E每跳治疗',
		dmg: ({ talent: { e }, calc, attr }, { heal }) =>
			heal(metaData.talentData.e["白玉萝卜治疗量2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["白玉萝卜治疗量2"][e.level][1])
	}, {
		title: 'E每跳伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["白玉萝卜伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q每跳治疗',
		dmg: ({ talent: { q }, calc, attr }, { heal }) =>
			heal(metaData.talentData.q["桂子仙机白玉萝卜治疗量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["桂子仙机白玉萝卜治疗量2"][q.level][1])
	}, {
		title: '萝卜炸裂天赋治疗',
		dmg: ({ calc, attr }, { heal }) => heal(calc(attr.hp) * 0.8 / 100)
	}, {
		title: '6命大萝卜治疗',
		check: ({ cons }) => cons === 6,
		dmg: ({ calc, attr }, { heal }) => heal(calc(attr.hp) * 7.5 / 100)
	}],
	buffs: [{
		title: '瑶瑶1命：萝卜炸裂获得15%草伤加成',
		check: ({ cons }) => cons >= 1,
		data: {
			dmg: 15
		}
	}, {
		title: '瑶瑶4命：释放E或Q后，提升元素精通[mastery]点',
		check: ({ cons }) => cons >= 4,
		sort: 5, data: {
			mastery: ({ calc, attr }) => calc(attr.hp) * 0.3 / 100
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
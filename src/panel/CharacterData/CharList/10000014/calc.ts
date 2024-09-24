import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 芭芭拉 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '重击伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '重击蒸发',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2], DmgTypes.vaporize)
	}, {
		title: 'E每跳治疗',
		dmg: ({ talent: { e }, attr, calc }, { heal }) =>
			heal(metaData.talentData.e["持续治疗量2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["持续治疗量2"][e.level][1])
	}, {
		title: 'Q治疗量',
		dmg: ({ talent: { q }, attr, calc }, { heal }) =>
			heal(metaData.talentData.q["治疗量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["治疗量2"][q.level][1])
	}],
	buffs: [{
		title: '芭芭拉2命：开E水环持续期间获得15%水伤加成',
		check: ({ cons }) => cons >= 2,
		data: {
			dmg: 15
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 3
}
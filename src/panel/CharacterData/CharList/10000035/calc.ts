import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 七七 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E每跳治疗',
		dmg: ({ talent: { a, e, q }, attr, calc }, { heal }) =>
			heal(metaData.talentData.e["持续治疗量2"][e.level][0] * calc(attr.atk) / 100 + metaData.talentData.e["持续治疗量2"][e.level][1])
	}, {
		title: '度厄真符每次治疗',
		dmg: ({ talent: { a, e, q }, attr, calc }, { heal }) => heal(metaData.talentData.q["治疗量2"][q.level][0] * calc(attr.atk) / 100 + metaData.talentData.q["治疗量2"][q.level][1])
	}, {
		title: '重击伤害',
		dmg: ({ talent: { a, e, q } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2], DmgTypes.phy)
	}],
	buffs: [{
		title: '七七二命：对受冰元素影响的敌人普攻及重击伤害提升15%',
		check: ({ cons }) => cons >= 2,
		data: {
			a2: 15
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.heal],
	defDmgIdx: 0
}
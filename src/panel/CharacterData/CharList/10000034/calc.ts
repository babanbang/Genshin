import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 诺艾尔 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '护心铠盾量',
		dmg: ({ talent: { e }, calc, attr }, { shield }) =>
			shield((metaData.talentData.e["吸收量2"][e.level][0] * calc(attr.def) / 100 + metaData.talentData.e["吸收量2"][e.level][1] * 1.5))
	}, {
		title: '护心铠单次治疗',
		dmg: ({ talent: { e }, calc, attr }, { heal }) =>
			heal(metaData.talentData.e["治疗量2"][e.level][0] * calc(attr.def) / 100 + metaData.talentData.e["治疗量2"][e.level][1])
	}, {
		title: '开Q尾刀',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["四段伤害"][a.level], GsTalentType.a)
	}, {
		title: '开Q重击',
		params: { q: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击循环伤害"][a.level], [GsTalentType.a, 2])
	}],
	buffs: [{
		title: '元素爆发：诺艾尔开Q基于防御力提高攻击力[atkPlus]',
		sort: 9, data: {
			atkPlus: ({ talent: { q }, attr, calc }) => metaData.talentData.q["攻击力提高"][q.level] * calc(attr.def) / 100
		}
	}, {
		title: '诺艾尔6命：诺艾尔开Q基于防御力提高攻击力[atkPlus]',
		check: ({ cons }) => cons === 6,
		sort: 9, data: {
			atkPlus: ({ attr, calc }) => calc(attr.def) * 0.5
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.def, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2

}
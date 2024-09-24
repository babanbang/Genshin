import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 荒泷一斗 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '开大后每段重击',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["荒泷逆袈裟连斩伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '开大后重击尾段',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["荒泷逆袈裟终结伤害"][a.level], [GsTalentType.a, 2])

	}, {
		title: '开大后牛牛伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}],
	buffs: [{
		title: '一斗被动：荒泷逆袈裟造成的伤害基于防御值提高[a2Plus]',
		sort: 9, data: {
			a2Plus: ({ attr, calc }) => calc(attr.def) * 0.35
		}
	}, {
		title: '一斗6命：重击的暴击伤害提高70%',
		check: ({ cons }) => cons === 6,
		data: {
			a2Cdmg: 70
		}
	}, {
		title: '一斗大招：怒目鬼王状态提高攻击力[atkPlus]',
		sort: 9, data: {
			atkPlus: ({ talent: { q }, attr, calc }) => metaData.talentData.q["攻击力提高"][q.level] * calc(attr.def) / 100
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.def, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
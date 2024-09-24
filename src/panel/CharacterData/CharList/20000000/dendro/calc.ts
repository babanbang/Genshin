import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 旅行者 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E激化伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e, DmgTypes.spread)
	}, {
		title: 'Q每跳伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["草灯莲攻击伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q每跳激化伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["草灯莲攻击伤害"][q.level], GsTalentType.q, DmgTypes.spread)
	}, {
		title: 'Q草灯爆炸伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["激烈爆发伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '天赋-蔓生的埜草：提升元素精通[mastery]点',
		data: {
			mastery: 60
		}
	}, {
		title: '天赋-繁庑的丛草：基于自身元素精通，提高E造成的伤害[eDmg]%，Q造成的伤害[qDmg]%',
		sort: 9,
		data: {
			eDmg: ({ attr, calc }) => calc(attr.mastery) * 0.15,
			qDmg: ({ attr, calc }) => calc(attr.mastery) * 0.1
		}
	}, {
		title: '草主6命：获得[dmg]%草元素伤害加成',
		check: ({ cons }) => cons === 6,
		data: {
			dmg: 12
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 3,
	createdBy: 'Aluxes'

}
import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 辛焱 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["挥舞伤害"][e.level], GsTalentType.e)
	}, {
		title: '三级护盾量',
		dmg: ({ talent: { e }, calc, attr }, { shield }) =>
			shield(metaData.talentData.e["三级护盾吸收量2"][e.level][0] * calc(attr.def) / 100 + metaData.talentData.e["三级护盾吸收量2"][e.level][1])
	}, {
		title: 'Q释放伤害',
		params: { phy: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q, DmgTypes.phy)
	}, {
		title: '重击循环伤害',
		params: { a2: true, phy: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击循环伤害"][a.level], [GsTalentType.a, 2], DmgTypes.phy)
	}],
	buffs: [{
		title: '辛焱被动：处于护盾下物理伤害提高15%',
		data: {
			phy: 15
		}
	}, {
		title: '辛焱2命：Q的暴击率提升100%',
		check: ({ cons }) => cons >= 2,
		data: {
			qCpct: 100
		}
	}, {
		title: '辛焱4命：E造成伤害使敌人物理抗性降低15%',
		check: ({ params, cons }) => cons >= 4 && params.phy === true,
		data: {
			kx: 15
		}
	}, {
		title: '辛焱6命：进行重击时，基于防御力的50%获得[atkPlus]攻击力加成',
		check: ({ params, cons }) => cons === 6 && params.a2 === true,
		sort: 9, data: {
			atkPlus: ({ attr, calc }) => calc(attr.def) * 0.5
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.def, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 八重神子 */
export const CharCalcRule: CharCalcRuleType = {
	details: [({ cons }) => {
		const num = cons >= 2 ? '肆' : '叁'
		return {
			title: num + '阶杀生樱伤害',
			dmg: ({ talent: { a, e, q } }, { dmg }) => dmg(metaData.talentData.e[`杀生樱伤害·${num}阶`][e.level], GsTalentType.e)
		}
	}, ({ cons }) => {
		const num = cons >= 2 ? '肆' : '叁'
		return {
			title: num + '阶杀生樱激化伤害',
			dmg: ({ talent: { a, e, q } }, { dmg }) => dmg(metaData.talentData.e[`杀生樱伤害·${num}阶`][e.level], GsTalentType.e, DmgTypes.aggravate)
		}
	}, {
		title: '四段Q总伤害',
		dmg: ({ talent: { a, e, q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level] + metaData.talentData.q["天狐霆雷伤害"][q.level] * 3, GsTalentType.q)
	}, {
		title: '四段Q总激化伤害',
		dmg: ({ talent: { a, e, q } }, { dmg }) => {
			let q1j = dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q, DmgTypes.aggravate)
			let q2j = dmg(metaData.talentData.q["天狐霆雷伤害"][q.level], GsTalentType.q, DmgTypes.aggravate)
			return {
				dmg: q1j.dmg + q2j.dmg * 3,
				avg: q1j.avg + q2j.avg * 3
			}
		}
	}],
	buffs: [{
		title: '被动天赋：基于元素精通提高杀生樱伤害[eDmg]%',
		sort: 9, data: {
			eDmg: ({ attr, calc }) => calc(attr.mastery) * 0.15
		}
	}, {
		title: '4命效果：杀生樱命中敌人后提高雷伤[dmg]%',
		check: ({ cons }) => cons >= 4,
		data: {
			dmg: 20
		}
	}, {
		title: '6命效果：杀生樱无视敌人[eDef]%防御',
		check: ({ cons }) => cons === 6,
		data: {
			eDef: 60
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery, AttrKeys.dmg],
	defDmgIdx: 3
}
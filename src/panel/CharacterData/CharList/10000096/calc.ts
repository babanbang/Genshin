import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 阿蕾奇诺 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后普攻首段伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a)
	}, {
		check: ({ cons }) => cons >= 2,
		title: '2命血偿勒令回收伤害',
		dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 900 / 100)
	}, {
		title: 'Q伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q蒸发伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q, DmgTypes.vaporize)
	}, {
		title: 'Q治疗量',
		params: { BondOfLife: 145 },
		dmg: ({ attr, calc, weapon }, { heal }) => heal(150 / 100 * ((weapon.id === 13512 ? 170 : 145) / 100) * calc(attr.hp) + 150 / 100 * calc(attr.atk))
	}],
	buffs: [{
		title: '阿蕾奇诺天赋：[buffCount]%最大生命值的生命之契,普通攻击伤害提升[aPlus]',
		data: {
			buffCount: ({ params }) => Math.min(params.BondOfLife as number, 200),
			aPlus: ({ talent: { a }, attr, calc, params, cons }) => calc(attr.atk) * Math.min(params.BondOfLife as number, 200) / 100 * (cons >= 1 ? (metaData.talentData.a["红死之宴提升"][a.level] + 100) : metaData.talentData.a["红死之宴提升"][a.level]) / 100
		}
	}, {
		title: '阿蕾奇诺天赋：在战斗状态下获得[dmg]%伤害加成',
		data: {
			dmg: 40
		}
	}, {
		title: '阿蕾奇诺6命：Q造成的伤害提高[qPlus],且释放后普通攻击与元素爆发的暴击率提高[aCpct]%,暴击伤害提高[aCdmg]%',
		check: ({ cons }) => cons === 6,
		data: {
			qPlus: ({ attr, calc, params }) => calc(attr.atk) * Math.min(params.BondOfLife as number, 200) / 100 * 700 / 100,
			aCpct: 10,
			aCdmg: 70,
			qCpct: 10,
			qCdmg: 70
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery, AttrKeys.dmg],
	/** 生命之契在此调整,请勿超过200 */
	defParams: ({ weapon }) => weapon.id === 13512 ? { BondOfLife: 155 } : { BondOfLife: 130 },
	defDmgIdx: 0,
	createdBy: 'liangshi'
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 克洛琳德 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后普通攻击',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["驰猎伤害2"][e.level][0], GsTalentType.a)
	}, {
		title: 'E后穿透射击',
		params: { blPct: 0.5 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["驰猎伤害2"][e.level][1], GsTalentType.a)
	}, {
		title: 'E剑击伤害',
		params: { blPct: 0 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["贯夜伤害2"][e.level][0], GsTalentType.a)
	}, {
		title: 'E强化剑击伤害',
		params: { blPct: 0.5 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["贯夜伤害2"][e.level][1], GsTalentType.a)
	}, {
		title: 'E贯夜·契令伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["贯夜伤害2"][e.level][2], GsTalentType.a)
	}, {
		title: 'Q单段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害2"][q.level][0], GsTalentType.q)
	}, {
		title: 'Q完整伤害',
		dmg: ({ talent: { q } }, { dmg }) => {
			const q1 = dmg(metaData.talentData.q["技能伤害2"][q.level][0], GsTalentType.q)
			return {
				dmg: q1.dmg * 5, avg: q1.avg * 5
			}
		}
	}],
	buffs: [{
		title: '克洛琳德天赋：触发雷元素反应普通攻击与残光将终造成的伤害提升[aPlus]',
		data: {
			aPlus: ({ attr, calc, cons }) => Math.min((calc(attr.atk) * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800)),
			qPlus: ({ attr, calc, cons }) => Math.min((calc(attr.atk) * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800))
		}
	}, {
		title: '克洛琳德天赋：生命之契的数值提升或降低时，暴击率提升[cpct]% ',
		data: {
			cpct: 10 * 2
		}
	}, {
		title: '克洛琳德4命：[buffCount]%最大生命值的生命之契使残光将终造成的伤害提升[qDmg]',
		check: ({ cons }) => cons >= 4,
		data: {
			buffCount: ({ talent: { q }, params }) => Math.min(params.blPct as number * (metaData.talentData.q["赋予生命之契"][q.level] + (params.BondOfLife as number)), 200),
			qDmg: ({ talent: { q }, params }) => Math.min((params.blPct as number * (metaData.talentData.q["赋予生命之契"][q.level] + (params.BondOfLife as number)) * 2), 200)
		}
	}, {
		title: '克洛琳德6命：施放狩夜之巡后暴击率提高[cpct]%,暴击伤害提高[cdmg]%',
		check: ({ cons }) => cons === 6,
		data: {
			cpct: 10,
			cdmg: 70
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery, AttrKeys.dmg],
	/** 生命之契在此调整,请勿超过200,默认生命之契未计入队友治疗转化 */
	defParams: ({ weapon }) => weapon.id === 11425 ? { BondOfLife: 35 * 3 + 25, blPct: 1 } : { BondOfLife: 35 * 3, blPct: 1 },
	defDmgIdx: 4,
	createdBy: 'liangshi'
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 那维莱特 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '重击伤害',
		dmg: ({ talent: { a }, attr, calc, cons }, { basic }) => {
			const a2Multi = cons >= 1 ? 1.6 : 1.25
			return basic(a2Multi * metaData.talentData.a["重击·衡平推裁持续伤害"][a.level] * calc(attr.hp) / 100, [GsTalentType.a, 2])
		}
	}, {
		title: 'E伤害',
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(metaData.talentData.e["技能伤害"][e.level] * calc(attr.hp) / 100, GsTalentType.e)
	}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(metaData.talentData.q["技能伤害"][q.level] * calc(attr.hp) / 100, GsTalentType.q)
	}, {
		title: 'Q总伤害',
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(metaData.talentData.q["技能伤害"][q.level] + metaData.talentData.q["水瀑伤害"][q.level] * 2 * calc(attr.hp) / 100, GsTalentType.q)
	}, {
		title: '满水滴一轮重击总伤害',
		dmg: ({ talent: { a }, attr, calc, cons }, { basic }) => {
			const count = cons === 6 ? 30 : 8
			const extraTd = cons === 6 ? 20 * 6 : 0
			const a2Multi = cons >= 1 ? 1.6 : 1.25
			const td = metaData.talentData.a["重击·衡平推裁持续伤害"][a.level] * count
			return basic(a2Multi * (td + extraTd) * calc(attr.hp) / 100, [GsTalentType.a, 2])
		}
	}],
	buffs: [{
		title: '天赋-古海孑遗：按两层计算，重击·衡平推裁造成原本125%的伤害',
		check: ({ cons }) => cons < 1
	}, {
		title: '天赋-古海孑遗：按三层计算，重击·衡平推裁造成原本160%的伤害',
		check: ({ cons }) => cons >= 1
	}, {
		title: '天赋-至高仲裁：基于当前生命值超出生命值上限30%的部分，提升[dmg]%水元素伤害',
		data: {
			dmg: 30
		}
	}, {
		title: '那维2命：重击·衡平推裁的暴击伤害提升[a2Cdmg]%',
		check: ({ cons }) => cons >= 2,
		data: {
			a2Cdmg: 42
		}
	}, {
		title: '那维6命：延长重击持续时间至12s，同时每2s，额外造成20%生命倍率的视为重击·衡平推裁的伤害',
		check: ({ cons }) => cons === 6
	}, {
		title: '双水Buff：生命值提高[hpPct]%',
		data: {
			hpPct: 25
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.dmg, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 4,
	createdBy: 'Aluxes'

}
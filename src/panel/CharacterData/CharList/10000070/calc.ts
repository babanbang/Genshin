import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 妮露 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '水月伤害',
		params: { sy: true },
		dmg: ({ talent: { e }, calc, attr }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["水月/水轮伤害2"][e.level][0] / 100, GsTalentType.e)
	}, {
		title: '水月蒸发伤害',
		params: { sy: true },
		dmg: ({ talent: { e }, calc, attr }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["水月/水轮伤害2"][e.level][0] / 100, GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: '剑舞步三段伤害',
		dmg: ({ talent: { e }, calc, attr, cons }, { basic }) => {
			const pct = metaData.talentData.e["剑舞步/旋舞步一段伤害2"][e.level][0] + metaData.talentData.e["剑舞步/旋舞步二段伤害2"][e.level][0] * 1
			if (cons >= 1) {
				attr.e.dmg += 65
			}
			const ret2 = basic(calc(attr.hp) * metaData.talentData.e["水月/水轮伤害2"][e.level][0] / 100, GsTalentType.e)
			return {
				dmg: basic(calc(attr.hp) * pct / 100, GsTalentType.e).dmg + ret2.dmg,
				avg: ret2.avg + ret2.avg
			}
		}
	}, {
		title: 'Q两段总伤害',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.q["技能伤害"][q.level] + metaData.talentData.q["永世流沔伤害"][q.level]) / 100, GsTalentType.q)
	}, {
		title: 'Q两段总蒸发伤害',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.q["技能伤害"][q.level] + metaData.talentData.q["永世流沔伤害"][q.level]) / 100, GsTalentType.q, DmgTypes.vaporize)
	}, {
		title: '丰穰之核伤害',
		params: { bloom: true },
		dmg: ({ }, { reaction }) => reaction(DmgTypes.bloom)
	}],
	buffs: [{
		title: '天赋-折旋落英之庭：元素精通提升100点',
		data: {
			mastery: ({ params }) => params.bloom ? 100 : 0
		}
	}, {
		title: '天赋-翩舞永世之梦：丰穰之核增伤[bloom]%',
		sort: 9, data: {
			bloom: ({ attr, calc }) => {
				const hp = calc(attr.hp)
				return Math.min(400, hp <= 30000 ? 0 : (hp - 30000) / 1000 * 9)
			}
		}
	}, {
		title: '妮露1命：水月造成的伤害提升65%',
		check: ({ cons }) => cons >= 1,
		data: {
			eDmg: ({ params }) => params.sy ? 65 : 0
		}
	}, {
		title: '妮露2命：金杯的丰馈下降低敌人35%水抗与草抗',
		check: ({ cons }) => cons >= 2,
		data: {
			kx: 35
		}
	}, {
		title: '妮露4命：第三段舞步命中敌人Q伤害提高50%',
		check: ({ cons }) => cons >= 4,
		data: {
			qDmg: 50
		}
	}, {
		title: '妮露6命：提高暴击[cpct]%，爆伤[cdmg]%',
		check: ({ cons }) => cons === 6,
		sort: 9, data: {
			cpct: ({ attr, calc }) => Math.min(30, calc(attr.hp) / 1000 * 0.6),
			cdmg: ({ attr, calc }) => Math.min(60, calc(attr.hp) / 1000 * 1.2)
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 0
}
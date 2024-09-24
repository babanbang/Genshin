import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 闲云 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '仙力助推下落攻击伤害提升值',
		dmg: ({ attr, calc, cons }) => ({
			dmg: 0, avg: cons < 2 ? Math.min(calc(attr.atk) * 2, 9000) : Math.min(calc(attr.atk) * 4, 18000)
		})
	}, {
		title: 'E释放伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E一段跳冲击波伤害',
		params: { btt: 1 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["闲云冲击波伤害"][e.level][0], [GsTalentType.a, 3])
	}, {
		title: 'E二段跳冲击波伤害',
		params: { btt: 2 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["闲云冲击波伤害"][e.level][1], [GsTalentType.a, 3])
	}, {
		title: 'E三段跳冲击波伤害',
		params: { btt: 3 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["闲云冲击波伤害"][e.level][2], [GsTalentType.a, 3])
	}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q释放治疗量',
		dmg: ({ talent: { q }, attr, calc }, { heal }) => heal(metaData.talentData.q["治疗量2"][q.level][0] * calc(attr.atk) / 100 + metaData.talentData.q["治疗量2"][q.level][1])
	}, {
		title: 'Q持续治疗量',
		dmg: ({ talent: { q }, attr, calc }, { heal }) => heal(metaData.talentData.q["持续治疗量2"][q.level][0] * calc(attr.atk) / 100 + metaData.talentData.q["持续治疗量2"][q.level][1])
	}],
	buffs: [{
		title: '闲云天赋：Q后下落攻击坠地冲击造成的伤害提升[a3Plus]',
		sort: 9,
		data: {
			a3Plus: ({ attr, calc, cons }) => cons < 2 ? Math.min(calc(attr.atk) * 2, 9000) : Math.min(calc(attr.atk) * 4, 18000)
		}
	}, {
		title: '闲云2命：施放E后，攻击力提升[atkPct]%',
		check: ({ cons }) => cons >= 2,
		data: {
			atkPct: 20
		}
	}, {
		title: '闲云6命：施展了[buffCount]次步天梯,闲云冲击波的暴击伤害提升[a3Cdmg]%',
		check: ({ cons, params }) => cons === 6 && params.btt !== undefined,
		data: {
			buffCount: ({ params }) => params.btt as number,
			a3Cdmg: ({ params }) => (5 / 3) * Math.pow(params.btt as number, 3) - (5 / 2) * Math.pow(params.btt as number, 2) + (95 / 6) * (params.btt as number)
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.heal],
	defDmgIdx: 0,
	createdBy: 'liangshi'

}
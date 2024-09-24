import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 纳西妲 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E长按伤害',
		params: { e: true, q: false },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["长按伤害"][e.level], GsTalentType.e)
	}, {
		title: '灭净三业伤害',
		params: { e2: true, q: false },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => {
			const td = metaData.talentData.e["灭净三业伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.mastery) / 100, GsTalentType.e)
		}
	}, {
		title: '开Q灭净三业伤害',
		params: { e2: true },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => {
			const td = metaData.talentData.e["灭净三业伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.mastery) / 100, GsTalentType.e)
		}
	}, {
		title: '灭净三业·蔓激化',
		params: { e2: true, q: false },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => {
			const td = metaData.talentData.e["灭净三业伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.mastery) / 100, GsTalentType.e, DmgTypes.spread)
		}
	}, {
		title: '开Q灭净三业·蔓激化',
		params: { e2: true },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => {
			const td = metaData.talentData.e["灭净三业伤害2"][e.level]
			return basic(td[0] * calc(attr.atk) / 100 + td[1] * calc(attr.mastery) / 100, GsTalentType.e, DmgTypes.spread)
		}
	}, {
		title: '六命特殊E伤害',
		check: ({ cons }) => cons === 6,
		dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 2.00 + calc(attr.mastery) * 4.00, GsTalentType.e)
	}, {
		title: '六命特殊E伤害·蔓激化',
		check: ({ cons }) => cons === 6,
		dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 2.00 + calc(attr.mastery) * 4.00, GsTalentType.e, DmgTypes.spread)
	}],
	buffs: [{
		title: '草神1命：火元素队友额外计入1位',
		check: ({ cons }) => cons >= 1
	}, {
		title: '草神2命：激化相关反应降低敌人防御力30%',
		check: ({ cons }) => cons >= 2,
		data: {
			enemyDef: 30
		}
	}, {
		title: '草神4命：E4个敌人提升精通160',
		check: ({ cons }) => cons >= 4,
		data: {
			mastery: 160
		}
	}, {
		title: '草神被动：开Q元素精通提升[mastery]',
		sort: 7, data: {
			mastery: ({ attr, calc, params }) => (params.q === false ? 0 : 1) * Math.min(250, calc(attr.mastery) * 0.25)
		}
	}, {
		title: '草神被动：基于元素精通提升灭净三业伤害[eDmg]%，暴击率[eCpct]%',
		sort: 9, data: {
			eDmg: ({ attr, calc, params }) => (params.e ? 0 : 1) * Math.min(80, (calc(attr.mastery) - 200) * 0.1),
			eCpct: ({ attr, calc, params }) => (params.e ? 0 : 1) * Math.min(24, (calc(attr.mastery) - 200) * 0.03)
		}
	}, {
		title: '草神Q：开Q提升灭净三业伤害[eDmg]%',
		data: {
			eDmg: ({ talent: { q }, params, cons }) => (params.q === false ? 0 : 1) *
				(cons >= 1 ? metaData.talentData.q["火2伤害提升"][q.level] : metaData.talentData.q["火1伤害提升"][q.level])
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.mastery, AttrKeys.cpct, AttrKeys.cdmg],
	defParams: () => ({ mArtisDiffCount: 2 }),
	defDmgIdx: 4

}
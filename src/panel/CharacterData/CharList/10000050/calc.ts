import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 托马 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E基础护盾量',
		dmg: ({ talent: { e }, attr, calc }, { shield }) =>
			shield(metaData.talentData.e["护盾吸收量2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["护盾吸收量2"][e.level][1])
	}, {
		title: 'E最大护盾量',
		params: { e: true },
		dmg: ({ talent: { e }, attr, calc }, { shield }) =>
			shield(metaData.talentData.e["护盾吸收量上限2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["护盾吸收量上限2"][e.level][1])
	}, {
		title: 'Q每段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["炽火崩破伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '托马被动：5层Buff提高护盾强效25%',
		data: {
			shieldPlus: ({ params }) => params.e ? 25 : 0
		}
	}, {
		title: '托马被动：Q每段伤害提高[qPlus]',
		sort: 9, data: {
			qPlus: ({ calc, attr }) => calc(attr.hp) * 0.022
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
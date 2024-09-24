import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 珐露珊 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '开Q提供风系伤害',
		dmg: ({ attr }) => ({
			dmg: 0, avg: (attr.atk.base || 0) * 0.32
		})
	}, {
		title: 'E减抗后Q伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		check: ({ cons }) => cons >= 6,
		title: '开Q后E后台伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["风压坍陷风涡伤害"][e.level], GsTalentType.e)
	}, {
		title: '开Q后飓烈箭伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["满蓄力瞄准射击"][a.level], [GsTalentType.a, 2])
	}],
	buffs: [{
		title: '珐露珊6命：Q提升暴击伤害40%',
		check: ({ cons }) => cons ===6,
		data: {
			cdmg: 40
		}
	}, {
		title: '诡风之祸：降低敌人风抗[kx]%',
		data: {
			kx: 30
		}
	}, {
		title: '祈风之赐：获得风伤加成[dmg]%',
		data: {
			dmg: ({ talent: { q } }) => metaData.talentData.q["风元素伤害加成"][q.level]
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
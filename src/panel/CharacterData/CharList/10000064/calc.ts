import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 云堇 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'Q提供普攻基础伤害',
		dmg: ({ talent: { q }, attr, calc }) => ({
			dmg: 0, avg: (metaData.talentData.q["伤害值提升"][q.level] / 100 + 0.115) * calc(attr.def)
		})
	}, {
		title: '二段蓄力E伤害',
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(metaData.talentData.e["二段蓄力伤害"][e.level] * calc(attr.def) / 100 + attr.e.plus, GsTalentType.e)
	}],
	buffs: [{
		title: '云堇被动：队伍存在4元素类型角色时，Q提供的普攻伤害提高[_q]',
		sort: 9,
		data: {
			_q: ({ attr, calc }) => calc(attr.def) * 0.115
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.def, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
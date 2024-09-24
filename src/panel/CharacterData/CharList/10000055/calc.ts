import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 五郎 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '三岩E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: '三岩Q伤害',
		dmg: ({ talent: { q }, attr, calc }, { basic }) => {
			let ret = metaData.talentData.q["技能伤害"][q.level] * calc(attr.def) / 100 + attr.q.plus
			return basic(ret, GsTalentType.q)
		}
	}, {
		title: '三岩Q每跳伤害',
		dmg: ({ talent: { q }, attr, calc }, { basic }) => {
			let ret = metaData.talentData.q["岩晶崩破伤害"][q.level] * calc(attr.def) / 100 + attr.q.plus
			return basic(ret, GsTalentType.q)
		}
	}, {
		title: 'Q每跳治疗',
		check: ({ cons }) => cons >= 4,
		dmg: ({ attr, calc }, { heal }) => heal(0.5 * calc(attr.def))
	}],
	buffs: [{
		title: '五郎天赋：释放E或Q后防御力提高[defPlus]，岩伤提高15%',
		data: {
			defPlus: ({ talent: { e } }) => metaData.talentData.e["防御力提升"][e.level],
			dmg: 15
		}
	}, {
		title: '五郎被动：释放E后防御力提高25%',
		data: {
			defPct: 25
		}
	}, {
		title: '五郎4命：Q每跳回复防御力50%',
		check: ({ cons }) => cons >= 4,
	}, {
		title: '五郎6命：三岩队伍提高40%岩伤',
		check: ({ cons }) => cons === 6,
		data: {
			dmg: 40
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.def, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 鹿野院平藏 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '勠心拳伤害',
		params: { e: 0 },
		dmg: ({ talent: { a, e, q } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: '满层勠心拳伤害',
		params: { e: 4 },
		dmg: ({ talent: { a, e, q } }, { dmg }) => {
			return dmg(metaData.talentData.e["技能伤害"][e.level] + metaData.talentData.e["变格伤害提升"][e.level] * 4 + metaData.talentData.e["正论伤害提升"][e.level], GsTalentType.e)
		}
	}, {
		title: 'Q真空弹伤害',
		dmg: ({ talent: { a, e, q } }, { dmg }) => dmg(metaData.talentData.q["不动流·真空弹伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '平藏6命：每层「变格」提高E 4%暴击率,「正论」提高E 32%暴击伤害',
		check: ({ cons }) => cons === 6,
		data: {
			eCpct: ({ params }) => params.e === 4 ? 24 : 0,
			eCdmg: ({ params }) => params.e === 4 ? 32 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
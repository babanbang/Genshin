import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 北斗 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["基础伤害"][e.level], GsTalentType.e)
	}, {
		title: '2层E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["基础伤害"][e.level] + metaData.talentData.e["受击时伤害提升"][e.level] * 2, GsTalentType.e)
	}, {
		title: 'Q每跳伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["闪雷伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '北斗6命：Q持续期间，周围敌人的雷元素抗性降低15%',
		check: ({ cons }) => cons === 6,
		data: {
			kx: ({ params }) => params.q ? 15 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2
}
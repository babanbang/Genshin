import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 琴 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '风压剑伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q爆发伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["爆发伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q爆发治疗',
		dmg: ({ talent: { q }, calc, attr }, { heal }) =>
			heal(metaData.talentData.q["领域发动治疗量2"][q.level][0] * calc(attr.atk) / 100 + metaData.talentData.q["领域发动治疗量2"][q.level][1])
	}, {
		title: 'Q每跳治疗',
		dmg: ({ talent: { q }, calc, attr }, { heal }) =>
			heal(metaData.talentData.q["持续治疗2"][q.level][0] * calc(attr.atk) / 100 + metaData.talentData.q["持续治疗2"][q.level][1])
	}],
	buffs: [{
		title: '琴1命：长按1秒后风压剑伤害提升40%',
		check: ({ cons }) => cons >= 1,
		data: {
			eDmg: 40
		}
	}, {
		title: '琴4命：蒲公英之风的领域内敌人风元素抗性降低40%',
		check: ({ cons }) => cons >= 4,
		data: {
			kx: ({ params }) => params.q ? 40 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2
}
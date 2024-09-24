import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 行秋 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '先QA后E两段伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: '雨帘剑伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["剑雨伤害"][q.level], GsTalentType.q)
	}, {
		title: '雨帘剑蒸发',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["剑雨伤害"][q.level], GsTalentType.q, DmgTypes.vaporize)
	}],
	buffs: [{
		title: '行秋被动：获得20%水伤加成',
		isStatic: true,
		data: {
			dmg: 20
		}
	}, {
		title: '行秋2命：受到剑雨攻击的敌人水元素抗性降低15%',
		check: ({ cons }) => cons >= 2,
		data: {
			kx: 15
		}
	}, {
		title: '行秋4命：开Q后E的伤害提升50%',
		check: ({ cons }) => cons >= 4,
		data: {
			eMulti: 50
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 2
}
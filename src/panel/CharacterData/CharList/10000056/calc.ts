import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 九条裟罗 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E提升攻击力',
		dmg: ({ talent: { e }, attr }) => {
			return {
				dmg: 0, avg: metaData.talentData.e["攻击力加成比例"][e.level] * attr.atk.base / 100
			}
		}
	}, {
		title: 'E后Q首段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["天狗咒雷·金刚坏 伤害"][q.level], GsTalentType.q)
	}, {
		title: 'E后Q每段',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["天狗咒雷·雷砾 伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '九条E技能：提升攻击力[atkPlus]',
		data: {
			atkPlus: ({ talent: { e }, attr }) => metaData.talentData.e["攻击力加成比例"][e.level] * attr.atk.base / 100
		}
	}, {
		title: '九条6命：提升60%雷元素爆伤',
		check: ({ cons }) => cons === 6,
		data: {
			cdmg: 60
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
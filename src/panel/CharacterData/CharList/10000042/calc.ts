import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 刻晴 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后重击伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: 'Q单段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["连斩伤害2"][q.level][0], GsTalentType.q)
	}, {
		title: 'Q总伤害',
		params: { q: 1 },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level] + metaData.talentData.q["连斩伤害"][q.level] + metaData.talentData.q["最后一击伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q总伤害·超激化',
		params: { q: 1 },
		dmg: ({ talent: { q } }, { dmg }) => {
			const t1j = dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q, DmgTypes.aggravate)
			const t2j = dmg(metaData.talentData.q["连斩伤害"][q.level] / 8, GsTalentType.q, DmgTypes.aggravate)
			const t2 = dmg(metaData.talentData.q["连斩伤害"][q.level] / 8, GsTalentType.q)
			const t3j = dmg(metaData.talentData.q["最后一击伤害"][q.level], GsTalentType.q, DmgTypes.aggravate)
			return {
				dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
				avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
			}
		}
	}],
	buffs: [{
		title: '刻晴被动：释放Q获得15%暴击率',
		data: {
			qCpct: 15
		}
	}, {
		title: '刻晴4命：触发雷元素相关反应提升攻击力25%',
		check: ({ cons }) => cons >= 4,
		data: {
			atkPct: 25
		}
	}, {
		title: '刻晴6命：4层获得24%雷伤加成',
		check: ({ cons }) => cons === 4,
		data: {
			dmg: 24
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 3
}
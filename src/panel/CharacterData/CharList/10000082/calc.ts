import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 白术 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E每跳治疗量',
		dmg: ({ talent: { e }, calc, attr }, { heal }) => heal(calc(attr.hp) * metaData.talentData.e["治疗量2"][e.level][0] / 100 + metaData.talentData.e["治疗量2"][e.level][1])
	}, {
		title: '2命·E+额外治疗量',
		check: ({ cons }) => cons >= 2,
		dmg: ({ talent: { e }, calc, attr }, { heal }) => heal((calc(attr.hp) * metaData.talentData.e["治疗量2"][e.level][0] / 100 + metaData.talentData.e["治疗量2"][e.level][1]) * 1.2)
	}, {
		title: 'Q每跳治疗量',
		dmg: ({ talent: { q }, calc, attr }, { heal }) =>
			heal(metaData.talentData.q["无郤气护盾治疗量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["无郤气护盾治疗量2"][q.level][1])
	}, {
		title: 'Q每跳护盾吸收量',
		dmg: ({ talent: { q }, calc, attr }, { shield }) => shield(metaData.talentData.q["无郤气护盾吸收量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["无郤气护盾吸收量2"][q.level][1])
	}, {
		title: 'Q每跳伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["灵气脉技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q每跳激化伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["灵气脉技能伤害"][q.level], GsTalentType.q, DmgTypes.spread)
	}],
	buffs: [{
		title: '白术4命：释放Q之后，队伍中附近所有角色元素精通提升80点',
		check: ({ cons }) => cons >= 4,
		data: {
			mastery: 80
		}
	}, {
		title: '白术6命：基于生命值上限的8%，灵气脉造成的伤害提高[qPlus]',
		check: ({ cons }) => cons === 6,
		sort: 9, data: {
			qPlus: ({ attr, calc }) => calc(attr.hp) * 0.08
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
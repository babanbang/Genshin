import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 迪奥娜 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '长按E总伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["猫爪伤害"][e.level] * 5, GsTalentType.e)
	}, {
		title: '长按E护盾量',
		dmg: ({ talent: { e }, attr, calc, cons }, { shield }) => {
			const sheildPlus = cons >= 2 ? 1.15 : 1
			return shield((metaData.talentData.e["护盾基础吸收量2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["护盾基础吸收量2"][e.level][1] * 1.75 * sheildPlus))
		}
	}, ({ cons }) => ({
		title: `${cons === 6 ? '半血' : ''}Q每跳治疗`,
		dmg: ({ talent: { q }, calc, attr }, { heal }) =>
			heal(metaData.talentData.q["持续治疗量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["持续治疗量2"][q.level][1])
	})],
	buffs: [{
		title: '迪奥娜天赋：长按E获得75%护盾吸收量加成',
		data: {
			_shield: 75
		}
	}, {
		title: '迪奥娜2命：猫爪冻冻造成的伤害提高15%，护盾吸收量提高15%',
		check: ({ cons }) => cons >= 2,
		data: {
			eDmg: 15,
			_shield: 15
		}
	}, {
		title: '迪奥娜6命：生命值低于50%时受治疗加成提升30%',
		check: ({ cons }) => cons === 6,
		data: {
			heal: 30
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 千织 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后普攻一段',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a)
	}, {
		title: 'E突刺伤害',
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(metaData.talentData.e["上挑攻击伤害2"][e.level][0] * calc(attr.atk) / 100 + metaData.talentData.e["上挑攻击伤害2"][e.level][1] * calc(attr.def) / 100, GsTalentType.e)
	}, {
		title: 'E人偶伤害',
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(metaData.talentData.e["袖伤害2"][e.level][0] * calc(attr.atk) / 100 + metaData.talentData.e["袖伤害2"][e.level][1] * calc(attr.def) / 100, GsTalentType.e)
	}, {
		title: '2命人偶切斩伤害',
		check: ({ cons }) => cons >= 2,
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic((metaData.talentData.e["袖伤害2"][e.level][0] * calc(attr.atk) / 100 + metaData.talentData.e["袖伤害2"][e.level][1] * calc(attr.def) / 100) * 1.7, GsTalentType.e)
	}, {
		title: 'Q伤害',
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(metaData.talentData.q["技能伤害2"][q.level][0] * calc(attr.atk) / 100 + metaData.talentData.q["技能伤害2"][q.level][1] * calc(attr.def) / 100, GsTalentType.q)
	}],
	buffs: [{
		title: '千织天赋：队伍中角色创造岩造物时，获得[dmg]%岩伤加成',
		data: {
			dmg: 20
		}
	}, {
		title: '千织6命：普攻造成的伤害提升[aPlus]',
		check: ({ cons }) => cons === 6,
		sort: 9, data: {
			aPlus: ({ attr, calc }) => calc(attr.def) * 235 / 100
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.def, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.dmg],
	defDmgIdx: 2,
	createdBy: 'liangshi'

}
import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 夜兰 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '破局矢伤害',
		dmg: ({ talent: { a }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.a["破局矢伤害"][a.level] / 100, [GsTalentType.a, 2])

	}, {
		title: 'E络命丝伤害',
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["技能伤害"][e.level] / 100, GsTalentType.e)

	}, {
		title: 'E络命丝蒸发',
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["技能伤害"][e.level] / 100, GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: 'Q协同单段伤害',
		params: { q: true },
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.q["玄掷玲珑伤害"][q.level] / 3 / 100), GsTalentType.q)
	}, {
		title: 'Q协同单段蒸发',
		params: { q: true },
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.q["玄掷玲珑伤害"][q.level] / 3 / 100), GsTalentType.q, DmgTypes.vaporize)
	}],
	buffs: [{
		title: '夜兰被动：有4个不同元素类型角色时，夜兰生命值上限提高30%',
		data: {
			hpPct: 30
		}
	}, {
		title: '夜兰4命：E络命丝爆发提高生命值，满Buff下提高40%',
		check: ({ cons }) => cons >= 4,
		data: {
			hpPct: 40
		}
	}, {
		title: '夜兰被动：Q持续过程中满层Buff下提高伤害50%',
		data: {
			dmg: ({ params }) => params.q ? 50 : 0
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 4
}
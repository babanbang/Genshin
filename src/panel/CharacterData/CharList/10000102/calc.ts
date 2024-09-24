import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 玛拉妮 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '巨浪鲨鲨撕咬伤害',
		dmg: ({ talent: { e }, calc, attr }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.e["鲨鲨撕咬基础伤害"][e.level] + metaData.talentData.e["巨浪鲨鲨撕咬伤害额外提升"][e.level]) / 100, [GsTalentType.a, 'nightsoul'])
	}, {
		title: '巨浪鲨鲨撕咬蒸发',
		check: ({ cons }) => cons < 6,
		dmg: ({ talent: { e }, calc, attr }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.e["鲨鲨撕咬基础伤害"][e.level] + metaData.talentData.e["巨浪鲨鲨撕咬伤害额外提升"][e.level]) / 100, [GsTalentType.a, 'nightsoul'], DmgTypes.vaporize)
	}, {
		check: ({ cons }) => cons >= 1,
		title: '强化巨浪鲨鲨撕咬蒸发',
		params: { cons1: true },
		dmg: ({ talent: { e }, calc, attr }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.e["鲨鲨撕咬基础伤害"][e.level] + metaData.talentData.e["巨浪鲨鲨撕咬伤害额外提升"][e.level]) / 100, [GsTalentType.a, 'nightsoul'], DmgTypes.vaporize)
	}, {
		title: '爆瀑飞弹伤害',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => basic(calc(attr.hp) * metaData.talentData.q["技能伤害"][q.level] / 100, [GsTalentType.q, 'nightsoul'])
	}, {
		title: '爆瀑飞弹蒸发',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => basic(calc(attr.hp) * metaData.talentData.q["技能伤害"][q.level] / 100, [GsTalentType.q, 'nightsoul'], DmgTypes.vaporize)
	}],
	buffs: [{
		title: '踏鲨破浪：3层浪势充能使鲨鲨撕咬造成的伤害提升[aPlus]巨浪鲨鲨撕咬伤害额外提升[_aPlus]',
		sort: 9,
		data: {
			aPlus: ({ talent: { e }, calc, attr }) => calc(attr.hp) * metaData.talentData.e["浪势充能伤害提升"][e.level] / 100 * 3,
			_aPlus: ({ talent: { e }, calc, attr }) => calc(attr.hp) * metaData.talentData.e["巨浪鲨鲨撕咬伤害额外提升"][e.level] / 100
		}
	}, {
		title: '玛拉妮天赋：3层逐浪心得使爆瀑飞弹伤害提升[qPlus]',
		sort: 9,
		data: {
			qPlus: ({ calc, attr }) => calc(attr.hp) * 45 / 100
		}
	}, {
		title: '玛拉妮1命：第一次巨浪鲨鲨撕咬及它所触发的鲨鲨飞弹造成的伤害提升[aPlus]',
		check: ({ cons, params }) => cons >= 1 && params.cons1 === true,
		sort: 9,
		data: {
			aPlus: ({ calc, attr }) => calc(attr.hp) * 66 / 100
		}
	}, {
		title: '玛拉妮4命：爆瀑飞弹造成的伤害提升[qDmg]%',
		check: ({ cons }) => cons >= 4,
		data: {
			qDmg: 75
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defParams: () => ({ Nightsoul: true }),
	defDmgIdx: 0,
	createdBy: 'liangshi'
}
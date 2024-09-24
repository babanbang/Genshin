import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 卡齐娜 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '冲天转转主动伤害',
		dmg: ({ talent: { e }, calc, attr }, { basic }) => basic(calc(attr.def) * metaData.talentData.e["冲天转转搭乘伤害"][e.level] / 100, [GsTalentType.e, 'nightsoul'])
	}, {
		title: '冲天转转自动伤害',
		dmg: ({ talent: { e }, calc, attr }, { basic }) => basic(calc(attr.def) * metaData.talentData.e["冲天转转独立伤害"][e.level] / 100, [GsTalentType.e, 'nightsoul'])
	}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q }, calc, attr }, { basic }) => basic(calc(attr.def) * metaData.talentData.q["技能伤害"][q.level] / 100, GsTalentType.q)
	}, {
		check: ({ cons }) => cons >= 6,
		title: '护盾替换摧毁伤害',
		dmg: ({ calc, attr }, { basic }) => basic(calc(attr.def) * 200 / 100)
	}],
	buffs: [{
		title: '卡齐娜天赋：附近的角色触发「夜魂迸发」,岩元素伤害提升[dmg]%。',
		data: {
			dmg: 20
		}
	}, {
		title: '卡齐娜天赋：冲天转转造成的伤害提升[ePlus]%。',
		sort: 9,
		data: {
			ePlus: ({ calc, attr }) => calc(attr.def) * 20 / 100,
			qPlus: ({ calc, attr }) => calc(attr.def) * 20 / 100
		}
	}, {
		title: '卡齐娜4命：领域中的队伍中当前场上角色的防御力提升[defPct]%',
		check: ({ cons }) => cons >= 4,
		data: {
			defPct: 20
		}
	}],
	mainAttr: [AttrKeys.def, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defParams: () => ({ Nightsoul: true }),
	defDmgIdx: 0,
	createdBy: 'liangshi'
}
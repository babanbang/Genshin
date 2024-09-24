import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 胡桃 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '半血开E重击',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '半血开E重击蒸发',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2], DmgTypes.vaporize)
	}, {
		title: '半血开E后Q',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["低血量时技能伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '蝶引来生：开E获得[atkPlus]点攻击力加成',
		sort: 9, data: {
			atkPlus: ({ talent: { e }, attr, calc }) => Math.min(metaData.talentData.e["攻击力提高"][e.level] * calc(attr.hp) / 100, attr.atk.base * 4)
		}
	}, {
		title: '胡桃被动：半血获得33%火伤加成',
		data: {
			dmg: 33
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1
}
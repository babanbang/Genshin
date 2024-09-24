import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 凝光 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '重击伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '璇玑屏伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q单颗宝石伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["宝石伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '凝光被动：穿过璇玑屏获得12%岩伤加成',
		data: {
			dmg: 12
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2
}
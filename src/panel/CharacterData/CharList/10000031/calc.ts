import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 菲谢尔 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '奥兹攻击激化伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["奥兹攻击伤害"][e.level], GsTalentType.e, DmgTypes.aggravate)
	}, {
		title: '奥兹攻击伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["奥兹攻击伤害"][e.level], GsTalentType.e)
	}, {
		title: '奥兹召唤伤害',
		params: { e: true },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["召唤伤害"][e.level], GsTalentType.e)
	}, {
		title: '至夜幻现伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["落雷伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '皇女2命：施放夜巡影翼时，能额外造成200%攻击力的伤害',
		data: {
			ePct: ({ params }) => params.e ? 200 : 0
		}
	}, {
		title: '皇女4命：施放夜巡影翼时，能额外造成200%攻击力的伤害',
		data: {
			qPct: ({ params }) => params.q ? 222 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1
}
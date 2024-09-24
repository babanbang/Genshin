import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 安柏 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '重击伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["满蓄力瞄准射击"][a.level], [GsTalentType.a, 2])
	}, {
		title: '兔兔伯爵爆炸',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["爆炸伤害"][e.level], GsTalentType.e)
	}, ({ cons }) => ({
		title: (cons >= 2 ? '引爆' : '' )+ '兔兔伯爵蒸发',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["爆炸伤害"][e.level], GsTalentType.e, DmgTypes.vaporize)
	}), {
		title: 'Q箭雨总伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["箭雨总伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '安柏天赋：命中弱点后攻击力提升15%',
		data: {
			atkPct: 15
		}
	}, {
		title: '安柏被动：Q暴击率提高10%',
		data: {
			qCpct: 10
		}
	}, {
		title: '安柏2命：瞄准引爆兔兔伯爵伤害提高200%',
		check: ({ cons }) => cons >= 2,
		data: {
			eDmg: ({ params }) => params.e ? 200 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 0,
}
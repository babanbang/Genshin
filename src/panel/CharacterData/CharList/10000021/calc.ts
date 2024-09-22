import { AttrKeys, CharCalcRuleType } from "@/types"
import { DmgTypes } from "@/types/panel/AttrModel/Dmg"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '重击伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('满蓄力瞄准射击')!, [GsTalentType.a, 2])
	}, {
		title: '兔兔伯爵爆炸',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('爆炸伤害')!, GsTalentType.e)
	}, {
		title: '兔兔伯爵蒸发',
		check: ({ cons }) => cons < 2,
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('爆炸伤害')!, GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: '引爆兔兔伯爵蒸发',
		cons: 2,
		params: { e: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('爆炸伤害')!, GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: 'Q箭雨总伤害',
		params: { q: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('箭雨总伤害')!, GsTalentType.q)
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 2,
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
		cons: 2,
		data: {
			eDmg: ({ params }) => params.e ? 200 : 0
		}
	}]
}
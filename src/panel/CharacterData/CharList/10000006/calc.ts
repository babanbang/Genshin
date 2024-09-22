import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E短按伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('点按伤害')!, GsTalentType.e)
	}, {
		title: '3层引雷长按E伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('三层引雷长按伤害')!, GsTalentType.e)
	}, {
		title: 'Q每段伤害',
		params: { q: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('放电伤害')!, GsTalentType.q)
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1,
	buffs: [{
		title: '丽莎被动：敌人受到蔷薇的雷光攻击后，降低15%防御力',
		data: {
			enemyDef: ({ params }) => params.q ? 15 : 0
		}
	}]
}
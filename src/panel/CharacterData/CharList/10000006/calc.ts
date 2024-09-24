import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 丽莎 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E短按伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["点按伤害"][e.level], GsTalentType.e)
	}, {
		title: '3层引雷长按E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["三层引雷长按伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q每段伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["放电伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '丽莎被动：敌人受到蔷薇的雷光攻击后，降低15%防御力',
		data: {
			enemyDef: ({ params }) => params.q ? 15 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
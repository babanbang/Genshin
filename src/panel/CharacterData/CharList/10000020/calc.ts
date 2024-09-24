import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 雷泽 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '普攻首段伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a, DmgTypes.phy)
	}, {
		title: 'E点按技能伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["点按技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E长按技能伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["长按技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q协同攻击首段',
		dmg: ({ talent: { a, q } }, { dmg }) => dmg(metaData.talentData.q["狼魂伤害"][q.level] * metaData.talentData.a["一段伤害"][a.level] / 100, GsTalentType.q)
	}],
	buffs: [{
		title: '雷泽1命：获得元素球后8秒伤害提高10%',
		check: ({ cons }) => cons >= 1,
		data: {
			dmg: 10,
			phy: 10
		}
	}, {
		title: '雷泽2命：攻击生命值低于30%的敌人暴击率提高10%',
		check: ({ cons }) => cons >= 2,
		data: {
			cpct: 10
		}
	}, {
		title: '雷泽4命：E点按降低敌人防御力15%',
		check: ({ cons }) => cons >= 4,
		data: {
			enemyDef: 15
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { DmgTypes } from "@/types/panel/AttrModel/Dmg"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '普攻首段伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('一段伤害')!, GsTalentType.a, DmgTypes.phy)
	}, {
		title: 'E点按技能伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('点按技能伤害')!, GsTalentType.e)
	}, {
		title: 'E长按技能伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('长按技能伤害')!, GsTalentType.e)
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2,
	buffs: [{
		title: '雷泽1命：获得元素球后8秒伤害提高10%',
		cons: 1,
		data: {
			dmg: 10,
			phy: 10
		}
	}, {
		title: '雷泽2命：攻击生命值低于30%的敌人暴击率提高10%',
		cons: 2,
		data: {
			cpct: 10
		}
	}, {
		title: '雷泽4命：E点按降低敌人防御力15%',
		cons: 4,
		data: {
			enemyDef: 15
		}
	}]
}
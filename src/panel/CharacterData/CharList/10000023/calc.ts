import { AttrKeys, CharCalcRuleType } from "@/types"
import { DmgTypes } from "@/types/panel/AttrModel/Dmg"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '锅巴单口伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('喷火伤害')!, GsTalentType.e)
	}, {
		title: '锅巴单口蒸发',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('喷火伤害')!, GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: '旋火轮单次伤害',
		params: { isQ: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('旋火轮伤害')!, GsTalentType.q)
	}, {
		title: '旋火轮单次蒸发',
		params: { isQ: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('旋火轮伤害')!, GsTalentType.q, DmgTypes.vaporize)
	}],
	defDmgIdx: 3,
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	buffs: [{
		cons: 1,
		title: '香菱1命：锅巴降低敌人火抗15',
		data: {
			kx: 15
		}
	}, {
		check: ({ params }) => !params.isQ,
		title: '香菱6命：旋火轮持续期间获得15%火伤加成',
		cons: 6,
		data: {
			dmg: 15
		}
	}]
}
import { AttrKeys, CharCalcRuleType } from "@/types"
import { DmgTypes } from "@/types/panel/AttrModel/Dmg"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '重击伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击伤害')!, [GsTalentType.a, 2])
	}, {
		title: '重击蒸发',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击伤害')!, [GsTalentType.a, 2], DmgTypes.vaporize)
	}, {
		title: 'E每跳治疗',
		dmg: ({ talent, attr, calc }, { heal }) =>
			heal((talent[GsTalentType.e].get('持续治疗量2')![0] as number) * calc(attr.hp) / 100 + (talent[GsTalentType.e].get('持续治疗量2')![1] as number))
	}, {
		title: 'Q治疗量',
		dmg: ({ talent, attr, calc }, { heal }) =>
			heal((talent[GsTalentType.q].get('治疗量2')![0] as number) * calc(attr.hp) / 100 + (talent[GsTalentType.q].get('治疗量2')![1] as number))
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 3,
	buffs: [{
		title: '芭芭拉2命：开E水环持续期间获得15%水伤加成',
		cons: 2,
		data: {
			dmg: 15
		}
	}]
}
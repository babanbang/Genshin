import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 莱依拉 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '满层E护盾量',
		dmg: ({ talent: { e }, attr, calc, cons }, { shield }) => {
			const sheildPlus = cons >= 1 ? 1.2 : 1
			return shield((calc(attr.hp) * metaData.talentData.e["护盾基础吸收量2"][e.level][0] / 100 + metaData.talentData.e["护盾基础吸收量2"][e.level][1]) * sheildPlus)
		}
	}, {
		title: 'E飞星单伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["飞星伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q星光弹伤害',
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.q["星光弹伤害"][q.level] / 100)
	}],
	buffs: [{
		title: '莱依拉1命：安眠帷幕护盾的伤害吸收量提高20%',
		check: ({ cons }) => cons >= 1,
		data: {
			_shield: 20
		}
	}, {
		title: '莱依拉6命：飞星与星光弹造成的伤害提升40%',
		check: ({ cons }) => cons >= 6,
		data: {
			eDmg: 40,
			qDmg: 40
		}
	}, {
		title: '莱依拉被动：满层护盾强效提升24%',
		data: {
			shield: 24
		}
	}, {
		title: '莱依拉被动：飞星造成的伤害值基于生命值提高[ePlus]',
		sort: 9, data: {
			ePlus: ({ attr, calc }) => calc(attr.hp) * 0.015
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0
}
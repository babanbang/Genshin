import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 烟绯 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '开Q满丹火印重击',
		params: { dhy: 15 },
		dmg: ({ talent: { a }, cons }, { dmg }) => dmg(metaData.talentData.a["重击伤害2"][a.level][cons === 6 ? 4 : 3], [GsTalentType.a, 2])
	}, {
		title: '开Q满丹火印重击蒸发',
		params: { dhy: 15 },
		dmg: ({ talent: { a }, cons }, { dmg }) => dmg(metaData.talentData.a["重击伤害2"][a.level][cons === 6 ? 4 : 3], [GsTalentType.a, 2], DmgTypes.vaporize)
	}, {
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: '4命护盾量',
		check: ({ cons }) => cons >= 4,
		dmg: ({ attr, calc }, { shield }) => shield(calc(attr.hp) * 0.45)
	}],
	buffs: [({ cons }) => ({
		title: `烟绯被动：重击消耗${cons === 6 ? 4 : 3}枚丹火印增加30%火伤`,
		data: {
			a2Dmg: ({ params }) => params.dhy ? (cons === 6 ? 20 : 15) : 0
		}
	}), {
		title: '烟绯被动：开Q后提高重击伤害[a2Dmg]%',
		data: {
			a2Dmg: ({ talent: { q } }) => metaData.talentData.q["重击伤害额外加成"][q.level]
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1
}
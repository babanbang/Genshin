import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 多莉 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '断除烦恼炮总伤害',
		dmg: ({ talent: { e }, cons }, { dmg }) => dmg(metaData.talentData.e["断除烦恼炮伤害"][e.level] + metaData.talentData.e["售后服务弹伤害"][e.level] * (cons >= 1 ? 3 : 2), GsTalentType.e)
	}, {
		title: 'Q每跳恢复生命',
		dmg: ({ talent: { q }, calc, attr }, {
			heal
		}) => heal(metaData.talentData.q["持续治疗量2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["持续治疗量2"][q.level][1])
	}],
	buffs: [{
		title: '多莉1命：断除烦恼炮命中后增加一枚炮弹',
		check: ({ cons }) => cons >= 1,
	}, {
		title: '多莉4命：角色生命值低于50%时，获得50%治疗加成',
		check: ({ cons }) => cons >= 4,
		data: {
			healInc: 50
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
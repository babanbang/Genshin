import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 可莉 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后带火花重击',
		params: { q: false },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: 'E后带火花重击蒸发',
		params: { q: false },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2], DmgTypes.vaporize)
	}, {
		title: '单次轰轰火花伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["轰轰火花伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '可莉天赋：爆裂火花使重击伤害提升50%',
		data: {
			a2Dmg: 50
		}
	}, {
		title: '可莉2命：蹦蹦炸弹的诡雷会使敌人的防御力降低23%',
		check: ({ cons }) => cons >= 2,
		data: {
			enemyDef: 23
		}
	}, {
		title: '可莉6命：释放轰轰火花后获得10%火元素伤害加成',
		check: ({ cons }) => cons === 6,
		data: {
			dmg: ({ params }) => params.q === false ? 0 : 10
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1
}
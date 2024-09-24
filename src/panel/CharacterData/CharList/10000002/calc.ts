import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 神里绫华 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '霰步E后重击总伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '神里流·冰华 伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: '神里流·霜灭 单段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["切割伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		passive: 1,
		title: '神里被动：释放E后普攻与重击伤害提高30%',
		data: {
			aDmg: 30,
			a2Dmg: 30
		}
	}, {
		passive: 2,
		title: '神里被动：霰步命中敌人获得18%冰伤加成',
		data: {
			dmg: 18
		}
	}, {
		title: '神里4命：元素爆发后敌人防御力降低30%',
		check: ({ cons }) => cons >= 4,
		data: {
			qDef: 30
		}
	}, {
		title: '神里6命：每10秒重击伤害提高[a2Dmg]%',
		check: ({ cons }) => cons === 6,
		data: {
			a2Dmg: 298
		}
	}],

	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2
}
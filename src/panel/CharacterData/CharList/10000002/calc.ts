import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '霰步E后重击总伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent.a.get('重击伤害')!, [GsTalentType.a, 2])
	}, {
		title: '神里流·冰华 伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent.e.get('技能伤害')!, GsTalentType.e)
	}, {
		title: '神里流·霜灭 单段伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent.q.get('切割伤害')!, GsTalentType.q)
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2,
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
		cons: 4,
		title: '神里4命：元素爆发后敌人防御力降低30%',
		data: {
			qDef: 30
		}
	}, {
		cons: 6,
		title: '神里6命：每10秒重击伤害提高[a2Dmg]%',
		data: {
			a2Dmg: 298
		}
	}]
}
import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 旅行者 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '短按E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["初始爆风伤害"][e.level], GsTalentType.e)
	}, {
		title: '长按E总伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["初始切割伤害"][e.level] * 2 + metaData.talentData.e["最大切割伤害"][e.level] * 4 + metaData.talentData.e["最大爆风伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q每段伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["龙卷风伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q转化元素每段伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["附加元素伤害"][q.level], GsTalentType.q, DmgTypes.phy)
	}, {
		title: '扩散反应伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.swirl)
	}],
	buffs: [{
		title: '风主2命：元素充能效率提高[recharge]%',
		check: ({ cons }) => cons >= 2,
		data: {
			recharge: 16
		}
	}, {
		title: '风主6命：受到Q伤害的目标，风抗降低[kx]%，转化的对应元素抗性降低[kx]%',
		check: ({ cons, params }) => cons === 6 && params.q === true,
		data: {
			kx: 20,
			fykx: 20
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1,
	createdBy: 'Aluxes'

}
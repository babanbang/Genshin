import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 温迪 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E点按伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["点按伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q单段伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["持续伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q含转化单段',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => {
			const basic = dmg(metaData.talentData.q["持续伤害"][q.level], GsTalentType.q)
			// 暂时以物伤近似计算
			const fj = dmg(metaData.talentData.q["附加元素伤害"][q.level], GsTalentType.q, DmgTypes.phy)
			return {
				dmg: basic.dmg + fj.dmg,
				avg: basic.avg + fj.avg
			}
		}
	}, {
		title: '扩散反应伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.swirl)
	}],
	buffs: [{
		title: '温迪2命：E降低12%风抗与物抗',
		check: ({ cons }) => cons >= 2,
		data: {
			kx: 12
		}
	}, {
		title: '温迪4命：温迪获取元素晶球或元素微粒后，获得25%风元素伤害加成',
		check: ({ cons }) => cons >= 4,
		data: {
			dmg: 25
		}
	}, {
		title: '温迪6命：Q降低20%风抗',
		check: ({ cons }) => cons === 6,
		data: {
			kx: ({ params }) => params.q ? 20 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1
}
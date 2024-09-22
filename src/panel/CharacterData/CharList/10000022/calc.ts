import { AttrKeys, CharCalcRuleType } from "@/types"
import { DmgTypes } from "@/types/panel/AttrModel/Dmg"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E点按伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('点按伤害')!, GsTalentType.e)
	}, {
		title: 'Q单段伤害',
		params: { q: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('持续伤害')!, GsTalentType.q)
	}, {
		title: 'Q含转化单段',
		params: { q: true },
		dmg: ({ talent }, { dmg }) => {
			const basic = dmg(talent[GsTalentType.q].get('持续伤害')!, GsTalentType.q)
			// 暂时以物伤近似计算
			const fj = dmg(talent[GsTalentType.q].get('附加元素伤害')!, GsTalentType.q, DmgTypes.phy)
			return {
				dmg: basic.dmg + fj.dmg,
				avg: basic.avg + fj.avg
			}
		}
	}, {
		title: '扩散反应伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.swirl)
	}],
	defDmgIdx: 1,
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	buffs: [{
		title: '温迪2命：E降低12%风抗与物抗',
		cons: 2,
		data: {
			kx: 12
		}
	}, {
		title: '温迪4命：温迪获取元素晶球或元素微粒后，获得25%风元素伤害加成',
		cons: 4,
		data: {
			dmg: 25
		}
	}, {
		title: '温迪6命：Q降低20%风抗',
		cons: 6,
		data: {
			kx: ({ params }) => params.q ? 20 : 0
		}
	}]
}
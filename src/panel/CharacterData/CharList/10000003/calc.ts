import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '风压剑伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent.e.get('技能伤害')!, GsTalentType.e)
	}, {
		title: 'Q爆发伤害',
		params: { q: true },
		dmg: ({ talent }, { dmg }) => dmg(talent.q.get('爆发伤害')!, GsTalentType.q)
	}, {
		title: 'Q爆发治疗',
		dmg: ({ talent, calc, attr }, { heal }) =>
			heal((talent.q.get('领域发动治疗量2')![0] as number) * calc(attr.atk) / 100 + (talent.q.get('领域发动治疗量2')![1] as number))
	}, {
		title: 'Q每跳治疗',
		dmg: ({ talent, calc, attr }, { heal }) =>
			heal((talent.q.get('持续治疗2')![0] as number) * calc(attr.atk) / 100 + (talent.q.get('持续治疗2')![1] as number))
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2,
	buffs: [{
		cons: 1,
		title: '琴1命：长按1秒后风压剑伤害提升40%',
		data: {
			eDmg: 40
		}
	}, {
		cons: 4,
		title: '琴4命：蒲公英之风的领域内敌人风元素抗性降低40%',
		data: {
			kx: ({ params }) => params.q ? 40 : 0
		}
	}]
}
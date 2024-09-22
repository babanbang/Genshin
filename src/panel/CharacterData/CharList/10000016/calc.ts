import { AttrKeys, CharCalcRuleType } from "@/types"
import { DmgTypes } from "@/types/panel/AttrModel/Dmg"
import { GsTalentType } from "karin-plugin-mystool"

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E三段伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('三段伤害')!, GsTalentType.e)
	}, {
		title: 'E三段蒸发',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('三段伤害')!, GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: 'Q爆发伤害',
		params: { q: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('斩击伤害')!, GsTalentType.q)
	}, {
		title: '开Q后单次重击',
		params: { q: true },
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击循环伤害')!, [GsTalentType.a, 2])
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defParams: () => ({ monv: 3 }),
	defDmgIdx: 1,
	buffs: [{
		title: '迪卢克天赋：释放元素爆发后获得20%火伤加成',
		data: {
			dmg: ({ params }) => params.q ? 20 : 0
		}
	}, {
		title: '迪卢克1命：对于生命值高于50%的敌人，造成伤害提高15%',
		cons: 1,
		data: {
			dmg: 15
		}
	}, {
		title: '迪卢克2命：受伤3层提高攻击力30%',
		cons: 2,
		data: {
			atkPct: 30
		}
	}, {
		title: '迪卢克4命：间隔2秒释放E提高伤害40%',
		cons: 4,
		data: {
			eDmg: 40
		}
	}]
}
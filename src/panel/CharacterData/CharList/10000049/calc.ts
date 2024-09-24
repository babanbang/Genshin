import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 宵宫 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '开E后首段普攻',
		params: { num: 1 },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a)
	}, {
		title: '开E满Buff普攻尾箭',
		params: { num: 10 },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["五段伤害"][a.level], GsTalentType.a)
	}, {
		title: '开E满Buff尾箭蒸发',
		params: { num: 10 },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["五段伤害"][a.level], GsTalentType.a, DmgTypes.vaporize)
	}],
	buffs: [{
		title: '焰硝庭火舞：开启E后额外提升普通[aMulti]%伤害',
		data: {
			aMulti: ({ talent: { e } }) => metaData.talentData.e["炽焰箭伤害"][e.level] - 100
		}
	}, {
		title: '宵宫被动：袖火百景图10层提高20%火伤加成',
		data: {
			dmg: ({ params }) => params.num ? params.num as number * 2 : 20
		}
	}, {
		title: '宵宫2命：宵宫造成暴击后获得25%火伤加成',
		check: ({ cons }) => cons >= 2,
		data: {
			dmg: ({ params }) => params.num as number > 1 ? 25 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 2
}
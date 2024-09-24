import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 琳妮特 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E技能伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["谜影突刺伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q每段风伤',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["惊奇猫猫盒伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q转化元素每段伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["彩练术弹伤害"][q.level], GsTalentType.q, DmgTypes.phy)// 以物伤近似
	}],
	buffs: [{
		title: '天赋-巧施协同：开Q后，队伍中所有角色攻击力提升20%（按四色队计算）',
		data: {
			atkPct: 20
		}
	}, {
		title: '天赋-道具完备：Q发生元素转化后，Q造成伤害提升15%',
		data: {
			qDmg: 15
		}
	}, {
		title: '琳妮特6命：释放E突刺时，风元素伤害加成提升20%',
		check: ({ cons }) => cons === 6,
		data: {
			dmg: 20
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0,
	createdBy: 'Aluxes'
}
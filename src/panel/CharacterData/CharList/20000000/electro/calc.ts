import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 旅行者 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E提供元素充能加成',
		dmg: ({ attr, calc }) => {
			return {
				dmg: 0, avg: Number(((0.2 + calc(attr.recharge) * 0.1 / 100) * 100).toFixed(1)), unit: '%'
			}
		}
	}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q协同伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["威光落雷伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '天赋-回响的轰雷：基于自身元素充能效率的10%，提升E的勾玉提供的元素充能效率[_eRecharge]%',
		data: {
			_eRecharge: ({ attr, calc }) => calc(attr.recharge) * 0.1
		}
	}, {
		title: '雷主2命：Q的协同攻击会使敌人的雷元素抗性降低[kx]%',
		check: ({ cons }) => cons >= 2,
		data: {
			kx: 15
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1,
	createdBy: 'Aluxes'

}
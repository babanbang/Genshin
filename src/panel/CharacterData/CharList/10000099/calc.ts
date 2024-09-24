import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 艾梅莉埃 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '柔灯之匣一阶伤害',
		params: { e: true },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["柔灯之匣·一阶攻击伤害"][e.level], GsTalentType.e)
	}, {
		title: '柔灯之匣二阶单枚伤害',
		params: { e: true },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["柔灯之匣·二阶攻击伤害2"][e.level][0], GsTalentType.e)
	}, {
		title: '后台柔灯之匣二阶单枚',
		check: ({ weapon }) => weapon.id === 13507,
		params: { e: true, off_field: true },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["柔灯之匣·二阶攻击伤害2"][e.level][0], GsTalentType.e)
	}, {
		title: '天赋浸析伤害',
		params: { e: true },
		dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 600 / 100)
	}, {
		title: '柔灯之匣三阶(Q)伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["柔灯之匣·三阶攻击伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q完整对单',
		dmg: ({ talent: { q }, cons }, { dmg }) => {
			let q1 = dmg(metaData.talentData.q["柔灯之匣·三阶攻击伤害"][q.level], GsTalentType.q)
			let cons4 = cons >= 4 ? 12 : 4
			return {
				dmg: q1.dmg * cons4,
				avg: q1.avg * cons4
			}
		}
	}, {
		check: ({ cons }) => cons >= 6,
		title: 'Q后重击伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '燃烧反应伤害',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.burning)
	}],
	buffs: [{
		title: '艾梅莉埃天赋：基于攻击力，对处于燃烧状态下的敌人造成的伤害提升[dmg]%',
		data: {
			dmg: ({ attr, calc }) => Math.min(36, calc(attr.atk) / 1000 * 15)
		}
	}, {
		title: '艾梅莉埃1命：[淡香浸析] e与天赋造成的伤害提升[dmg]%',
		check: ({ cons, params }) => cons >= 1 && params.e === true,
		data: {
			dmg: 20
		}
	}, {
		title: '艾梅莉埃2命：EQ命中的敌人草元素抗性降低[kx]%',
		check: ({ cons }) => cons >= 2,
		data: {
			kx: 30
		}
	}, {
		title: '艾梅莉埃6命：施放EQ时,普攻与重击造成的伤害提升[aPlus]',
		check: ({ cons }) => cons === 6,
		data: {
			aPlus: ({ attr, calc }) => calc(attr.atk) * 300 / 100,
			a2Plus: ({ attr, calc }) => calc(attr.atk) * 300 / 100
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1,
	createdBy: 'liangshi'
}
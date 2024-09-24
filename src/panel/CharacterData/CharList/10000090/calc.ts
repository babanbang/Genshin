import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 夏沃蕾 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E点按伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["点按伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E长按伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["长按伤害"][e.level], GsTalentType.e)
	}, {
		title: '「超量装药弹头」伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["「超量装药弹头」伤害"][e.level], GsTalentType.e)
	}, {
		title: '2命额外伤害',
		check: ({ cons }) => cons >= 2,
		dmg: ({ calc, attr }, { basic }) => basic(calc(attr.atk) * 120 / 100, GsTalentType.e)
	}, {
		title: 'E持续治疗',
		dmg: ({ talent: { e },attr, calc }, { heal }) => heal(metaData.talentData.e["持续治疗量2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["持续治疗量2"][e.level][1]) 
}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["爆轰榴弹伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q分裂弹伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["二重毁伤弹伤害"][q.level], GsTalentType.q)
	}, {
		title: '6命额外治疗',
		check: ({ cons }) => cons >= 6,
		dmg: ({ attr, calc }, { heal }) => heal(calc(attr.hp) * 10 / 100)
	}],
	buffs: [{
		title: '夏沃蕾天赋：火元素与雷元素抗性降低[kx]%',
		data: {
			kx: 40
		}
	}, {
		title: '夏沃蕾天赋：发射「超量装药弹头」后攻击力提升[atkPct]%',
		data: {
			atkPct: ({ calc, attr }) => Math.min(40, calc(attr.hp) / 1000)
		}
	}, {
		title: '夏沃蕾6命：队伍中的角色受到「近迫式急促拦射」的治疗后，获得[dmg]%火元素伤害加成与雷元素伤害加成',
		check: ({ cons }) => cons === 6,
		data: {
			dmg: 60
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.heal],
	defDmgIdx: 4,
	createdBy: 'liangshi'
}
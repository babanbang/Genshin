import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 林尼 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '满蓄力重击伤害',
		params: { a2: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["隐具魔术箭伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '礼花术弹伤害',
		params: { catcathat: true },
		dmg: ({ talent: { a }, attr, calc }, { basic }) => {
			const atk = calc(attr.atk)
			return basic(atk * 0.8 + atk * metaData.talentData.a["礼花术弹伤害"][a.level] / 100, [GsTalentType.a, 2])
		}
	}, {
		title: '满层E伤害',
		dmg: ({ talent: { e } }, { dmg }) => {
			const eDmg = dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
			const ePlusDmg = dmg(metaData.talentData.e["技能伤害加成"][e.level] * 5, GsTalentType.e)
			return {
				dmg: eDmg.dmg + ePlusDmg.dmg,
				avg: eDmg.avg + ePlusDmg.avg
			}
		}
	}, {
		title: 'Q总伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level] + metaData.talentData.q["引爆礼花伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		check: ({ params }) => params.catcathat === true,
		title: '天赋-惊险演出：基于攻击力的80%，提高怪笑猫猫帽造成的伤害'
	}, {
		title: '天赋-完场喝彩：队伍有三名火元素角色时，对处于火元素影响下的敌人造成的伤害提升[dmg]%',
		data: {
			dmg: 100
		}
	}, {
		title: '双火共鸣：攻击力提高[atkPct]%',
		data: {
			atkPct: 25
		}
	}, {
		title: '林尼2命：在场6秒后，暴击伤害提高60%',
		check: ({ cons }) => cons >= 2,
		data: {
			cdmg: 60
		}
	}, {
		title: '林尼4命：重击命中敌人后，降低敌人火元素抗性20%',
		check: ({ cons }) => cons >= 4,
		data: {
			kx: 20
		}
	}, {
		title: '林尼6命：发射隐具魔术箭时，额外发射一枚礼花术弹·重奏，造成礼花术弹80%的伤害',
		check: ({ cons, params }) => cons === 6 && params.a2 === true,
		sort: 9, data: {
			a2Plus: ({ talent: { a }, attr, calc }) => metaData.talentData.a["礼花术弹伤害"][a.level] / 100 * calc(attr.atk) * 0.8
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0,
	createdBy: 'Aluxes'

}
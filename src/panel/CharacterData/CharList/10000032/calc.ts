import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 班尼特 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '点赞攻击力提升',
		dmg: ({ talent: { q }, attr, cons }) => {
			let baseAtk = attr.atk.base
			let pct = metaData.talentData.q["攻击力加成比例"][q.level]
			if (cons >= 1) {
				pct += 20
			}
			return {
				dmg: 0, avg: baseAtk * pct / 100
			}
		}
	}, {
		title: 'Q+点E总伤害',
		dmg: ({ talent: { e, q } }, { dmg }) => {
			const eDmg = dmg(metaData.talentData.e["点按伤害"][e.level], GsTalentType.e)
			const qDmg = dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
			return {
				dmg: eDmg.dmg + qDmg.dmg,
				avg: eDmg.avg + qDmg.avg
			}
		}
	}, {
		title: '点赞每跳治疗',
		dmg: ({ talent: { q }, attr, calc }, { heal }) => heal(metaData.talentData.q["持续治疗2"][q.level][0] * calc(attr.hp) / 100 + metaData.talentData.q["持续治疗2"][q.level][1])
	}],
	buffs: [{
		title: '班尼特1命：Q攻击力提升比例提高20%',
		check: ({ cons }) => cons >= 1,
	}, {
		title: '班尼特6命：获得15%火伤加成',
		check: ({ cons }) => cons === 6,
		data: {
			dmg: 15
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.hp, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2
}
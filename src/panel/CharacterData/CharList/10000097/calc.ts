import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 赛索斯 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '贯影箭伤害',
		dmg: ({ talent: { a }, attr, calc }, { basic }) => basic(metaData.talentData.a["贯影箭伤害2"][a.level][0] * calc(attr.atk) / 100 + metaData.talentData.a["贯影箭伤害2"][a.level][1] * calc(attr.mastery) / 100, [GsTalentType.a, 2])
	}, {
		title: '贯影箭激化',
		dmg: ({ talent: { a }, attr, calc }, { basic }) => basic(metaData.talentData.a["贯影箭伤害2"][a.level][0] * calc(attr.atk) / 100 + metaData.talentData.a["贯影箭伤害2"][a.level][1] * calc(attr.mastery) / 100, [GsTalentType.a, 2], DmgTypes.aggravate)
	}, {
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E激化伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e, DmgTypes.aggravate)
	}, {
		title: 'Q后普攻一段',
		params: { q: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: 'Q后普攻一段激化',
		params: { q: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], [GsTalentType.a, 2], DmgTypes.aggravate)
	}, {
		title: 'Q后普攻三段',
		params: { q: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["三段伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: 'Q后普攻三段激化',
		params: { q: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["三段伤害"][a.level], [GsTalentType.a, 2], DmgTypes.aggravate)
	}],
	buffs: [{
		title: '赛索斯技能：暝弦矢造成的伤害提升[a2Plus]',
		check: ({ params }) => params.q === true,
		data: {
			a2Plus: ({ talent: { q }, attr, calc }) => calc(attr.mastery) / 100 * metaData.talentData.q["瞑弦矢伤害提升"][q.level]
		}
	}, {
		title: '赛索斯天赋：贯影箭造成的伤害值提升[a2Plus]',
		check: ({ params }) => params.q !== true,
		data: {
			a2Plus: ({ attr, calc }) => calc(attr.mastery) * 600 / 100
		}
	}, {
		title: '赛索斯1命：贯影箭的暴击率提升[a2Cpct]%',
		check: ({ cons, params }) => cons >= 1 && params.q !== true,
		data: {
			a2Cpct: 15
		}
	}, {
		title: '赛索斯2命：释放EQ获得[dmg]%雷伤加成',
		check: ({ cons }) => cons >= 2,
		data: {
			dmg: 15 * 2
		}
	}, {
		title: '赛索斯4命：贯影箭与暝弦矢命中2名及以上的敌人元素精通提升[mastery]',
		check: ({ cons }) => cons >= 4,
		data: {
			mastery: 80
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1,
	createdBy: 'liangshi'
}
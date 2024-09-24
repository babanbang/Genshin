import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 提纳里 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '花筥箭激化伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["花筥箭伤害"][a.level], [GsTalentType.a, 2], DmgTypes.spread)
	}, {
		title: '满蓄力重击总伤害',
		dmg: ({ talent: { a }, cons }, { dmg }) => {
			const d1 = dmg(metaData.talentData.a["花筥箭伤害"][a.level], [GsTalentType.a, 2])
			const d2 = dmg(metaData.talentData.a["藏蕴花矢伤害"][a.level], [GsTalentType.a, 2])
			const d2c6 = dmg(150.0, [GsTalentType.a, 2])
			const count = cons >= 6 ? 1 : 0
			return {
				dmg: d1.dmg + d2.dmg * 4 + d2c6.dmg * count,
				avg: d1.avg + d2.avg * 4 + d2c6.avg * count
			}
		}
	}, {
		title: '满蓄力重击激化总伤害',
		dmg: ({ talent: { a }, cons }, { dmg }) => {
			const d1j = dmg(metaData.talentData.a["花筥箭伤害"][a.level], [GsTalentType.a, 2], DmgTypes.spread)
			const d2 = dmg(metaData.talentData.a["藏蕴花矢伤害"][a.level], [GsTalentType.a, 2])
			const d2j = dmg(metaData.talentData.a["藏蕴花矢伤害"][a.level], [GsTalentType.a, 2], DmgTypes.spread)
			const d2jc6 = dmg(150.0, [GsTalentType.a, 2], DmgTypes.spread)
			const count = cons >= 6 ? 1 : 0
			return {
				dmg: d1j.dmg + d2.dmg * 3 + d2j.dmg + d2jc6.dmg * count,
				avg: d1j.avg + d2.avg * 3 + d2j.dmg + d2jc6.dmg * count
			}
		}
	}, {
		title: 'Q总伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["缠藤箭伤害"][q.level] * 6 + metaData.talentData.q["次级缠藤箭伤害"][q.level] * 6, GsTalentType.q)
	}, {
		title: 'Q激化总伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => {
			const q1 = dmg(metaData.talentData.q["缠藤箭伤害"][q.level], GsTalentType.q)
			const q1j = dmg(metaData.talentData.q["缠藤箭伤害"][q.level], GsTalentType.q, DmgTypes.spread)
			const q2 = dmg(metaData.talentData.q["次级缠藤箭伤害"][q.level], GsTalentType.q)
			const q2j = dmg(metaData.talentData.q["次级缠藤箭伤害"][q.level], GsTalentType.q, DmgTypes.spread)
			return {
				dmg: q1.dmg * 4 + q1j.dmg * 2 + q2.dmg * 4 + q2j.dmg * 2,
				avg: q1.avg * 4 + q1j.avg * 2 + q2.avg * 4 + q2j.avg * 2
			}
		}
	}],
	buffs: [{
		title: '提纳里被动：发射花筥箭后，元素精通提升50点',
		data: {
			mastery: 50
		}
	}, {
		title: '提纳里被动：基于元素精通提升重击及Q伤害[a2Dmg]%',
		sort: 9, data: {
			a2Dmg: ({ calc, attr }) => Math.min(60, calc(attr.mastery) * 0.06),
			qDmg: ({ calc, attr }) => Math.min(60, calc(attr.mastery) * 0.06)
		}
	}, {
		title: '提纳里1命：重击暴击率提高15%',
		check: ({ cons }) => cons >= 1,
		data: {
			a2Cpct: 15
		}
	}, {
		title: '提纳里2命：E范围中存在敌人时，获得20%草伤加成',
		check: ({ cons }) => cons >= 2,
		data: {
			dmg: 20
		}
	}, {
		title: '提纳里4命：释放Q时提高元素精通60，触发反应进一步提升60',
		check: ({ cons }) => cons >= 4,
		data: {
			mastery: ({ params }) => params.q ? 120 : 0
		}
	}, {
		title: '提纳里6命：花筥箭在命中后能产生1枚额外的藏蕴花矢',
		check: ({ cons }) => cons === 6
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defParams: () => ({ mArtisDiffCount: 2 }),
	defDmgIdx: 4
}
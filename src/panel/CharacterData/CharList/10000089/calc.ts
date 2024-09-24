import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 芙宁娜 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E众水歌者治疗',
		dmg: ({ talent: { e }, attr, calc }, { heal }) =>
			heal(metaData.talentData.e["众水的歌者治疗量2"][e.level][0] * calc(attr.hp) / 100 + metaData.talentData.e["众水的歌者治疗量2"][e.level][1])
	}, {
		title: 'E海薇玛夫人(海马)·伤害',
		params: { talentQ: true },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["海薇玛夫人伤害"][e.level] / 100 * 1.4, GsTalentType.e)
	}, {
		title: 'E乌瑟勋爵(章鱼)·伤害',
		params: { talentQ: true },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["乌瑟勋爵伤害"][e.level] / 100 * 1.4, GsTalentType.e)
	}, {
		title: 'E谢贝蕾妲小姐(螃蟹)·伤害',
		params: { talentQ: true },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["谢贝蕾妲小姐伤害"][e.level] / 100 * 1.4, GsTalentType.e)
	}, {
		title: 'E谢贝蕾妲小姐(螃蟹)·蒸发',
		params: { talentQ: true },
		dmg: ({ talent: { e }, attr, calc }, { basic }) => basic(calc(attr.hp) * metaData.talentData.e["谢贝蕾妲小姐伤害"][e.level] / 100 * 1.4, GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: 'Q万众狂欢·伤害',
		params: { talentQ: true },
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.q["技能伤害"][q.level] / 100), GsTalentType.q)
	}, {
		title: 'Q万众狂欢伤害·蒸发',
		params: { talentQ: true },
		dmg: ({ talent: { q }, attr, calc }, { basic }) => basic(calc(attr.hp) * (metaData.talentData.q["技能伤害"][q.level] / 100), GsTalentType.q, DmgTypes.vaporize)
	}, {
		title: '六命荒刀每秒治疗',
		check: ({ cons }) => cons === 6,
		params: { talentQ: true },
		dmg: ({ attr, calc }, { heal }) => heal(calc(attr.hp) * 0.04)
	}, {
		title: '六命荒刀普攻伤害',
		check: ({ cons }) => cons === 6,
		params: { talentQ: true },
		dmg: ({ talent: { a }, attr, calc }, { basic }) => basic(calc(attr.atk) * metaData.talentData.a["一段伤害"][a.level] / 100 + calc(attr.hp) * 0.18, GsTalentType.a)
	}, {
		title: '六命芒刀普攻伤害',
		check: ({ cons }) => cons === 6,
		params: { talentQ: true },
		dmg: ({ talent: { a }, attr, calc }, { basic }) => basic(calc(attr.atk) * metaData.talentData.a["一段伤害"][a.level] / 100 + calc(attr.hp) * 0.43, GsTalentType.a)
	}],
	buffs: [{
		title: '芙宁娜天赋：消耗4队友生命值，E伤害提升140%'
	}, {
		title: '天赋Q·万众狂欢：300层气氛值提升[dmg]%伤害，[healInc]%受治疗加成',
		data: {
			dmg: ({ talent: { q } }) => metaData.talentData.q["气氛值转化提升伤害比例"][q.level] * 300,
			healInc: ({ talent: { q } }) => metaData.talentData.q["气氛值转化受治疗加成比例"][q.level] * 300
		}
	}, {
		title: '芙宁娜被动：基于生命值，提升召唤物伤害[eDmg]%',
		sort: 9, data: {
			eDmg: ({ attr, calc }) => Math.min(28, calc(attr.hp) / 1000 * 0.7)
		}
	}, {
		title: '芙宁娜1命：气氛值层数上限提升100',
		check: ({ cons }) => cons >= 1,
		data: {
			dmg: ({ talent: { q } }) => metaData.talentData.q["气氛值转化提升伤害比例"][q.level] * 100,
			healInc: ({ talent: { q } }) => metaData.talentData.q["气氛值转化受治疗加成比例"][q.level] * 100
		}
	}, {
		title: '芙宁娜2命：万众狂欢持续期间，满气氛值提升芙宁娜140%生命值',
		check: ({ cons, params }) => cons >= 2 && params.talentQ === true,
		data: {
			hpPct: 140
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.mastery, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.dmg],
	defDmgIdx: 3
}
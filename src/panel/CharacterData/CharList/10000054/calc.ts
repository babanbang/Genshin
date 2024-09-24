import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { lodash } from "node-karin/modules.js"
import { metaData } from "./meta"

/** 珊瑚宫心海 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '半血水母每跳治疗',
		dmg: ({ talent: { e }, attr, calc, cons }, { heal }) => {
			const hp = calc(attr.hp)
			const eheal = metaData.talentData.e["治疗量2"][e.level]
			return heal(hp * eheal[0] / 100 + eheal[1] + (cons >= 2 ? hp * 0.045 : 0))
		}
	}, {
		title: '开Q普攻三段伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["三段伤害"][a.level], GsTalentType.a)
	}, {
		title: '开Q重击伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '开Q普攻三段总伤',
		dmg: ({ talent: { a }, attr, cons, calc }, { dmg, basic }) => {
			const ret = { dmg: 0, avg: 0 }
			lodash.forEach('一二三'.split(''), (num) => {
				const dmgRet = dmg(metaData.talentData.a[`${num}段伤害` as '一段伤害' | '二段伤害' | '三段伤害'][a.level], GsTalentType.a)
				ret.dmg += dmgRet.dmg
				ret.avg += dmgRet.avg
			})
			if (cons > 0) {
				const dmgRet = basic(calc(attr.hp) * 0.3)
				ret.dmg += dmgRet.dmg
				ret.avg += dmgRet.avg
			}
			return ret
		}
	}],
	buffs: [{
		title: '心海被动：暴击率降低100%，治疗加成提高25%',
		isStatic: true,
		data: {
			cpct: -100,
			heal: 25
		}
	}, {
		title: '心海被动：开Q后重击伤害基于治疗加成提高[aPlus]',
		sort: 9, data: {
			aPlus: ({ attr, calc }) => calc(attr.hp) * calc(attr.heal) * 0.15 / 100,
			a2Plus: ({ attr, calc }) => calc(attr.hp) * calc(attr.heal) * 0.15 / 100
		}
	}, {
		title: '海人化羽：开Q后普攻伤害提高[aPlus]',
		sort: 9, data: {
			aPlus: ({ talent: { q }, attr, calc }) => calc(attr.hp) * metaData.talentData.q["普通攻击伤害提升"][q.level] / 100
		}
	}, {
		title: '海人化羽：开Q后重击伤害提高[a2Plus]',
		sort: 9, data: {
			a2Plus: ({ talent: { q }, attr, calc }) => calc(attr.hp) * metaData.talentData.q["重击伤害提升"][q.level] / 100
		}
	}, {
		title: '心海1命：开Q后第三段普攻额外释放一只游鱼，造成生命值上限30%的水元素伤害',
		check: ({ cons }) => cons >= 1,
	}, {
		title: '心海6命：开Q攻击获得治疗后，获得40%水伤加成',
		check: ({ cons }) => cons >= 6,
		sort: 6, data: {
			dmg: 40
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.atk],
	defDmgIdx: 0
}
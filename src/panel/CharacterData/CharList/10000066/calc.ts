import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 神里绫人 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后瞬水剑三段伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["三段瞬水剑伤害"][e.level], GsTalentType.a)
	}, {
		title: 'E后瞬水剑三段蒸发',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["三段瞬水剑伤害"][e.level], GsTalentType.a, DmgTypes.vaporize)
	}, {
		title: '神里流·水囿每段伤害',
		params: { q: 1 },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["水花剑伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '绫人1命：对于生命值低于或等于50%的敌人，瞬水剑造成的伤害提升40%',
		check: ({ cons }) => cons >= 1,
		data: {
			aDmg: 40
		}
	}, {
		title: '绫人2命：3层浪闪以上时提高50%生命值',
		check: ({ cons }) => cons >= 2,
		data: {
			hpPct: ({ params }) => params.q ? 0 : 50
		}
	}, {
		title: '绫人2命：5层浪闪提高瞬水剑伤害[aPlus]',
		check: ({ cons }) => cons >= 2,
		sort: 9, data: {
			aPlus: ({ talent: { e }, attr, calc }) => calc(attr.hp) * metaData.talentData.e["浪闪伤害值提高"][e.level] / 100 * 5
		}
	}, {
		title: '4层浪闪：提高瞬水剑伤害[aPlus]',
		check: ({ cons }) => cons < 2,
		sort: 9, data: {
			aPlus: ({ talent: { e }, attr, calc }) => calc(attr.hp) * metaData.talentData.e["浪闪伤害值提高"][e.level] / 100 * 4
		}
	}],
	mainAttr: [AttrKeys.hp, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1
}
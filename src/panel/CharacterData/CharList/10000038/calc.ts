import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 阿贝多 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E阳华伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E刹那之花伤害',
		dmg: ({ talent: { e }, attr, calc }, { basic }) =>
			basic(metaData.talentData.e["刹那之花伤害"][e.level] * calc(attr.def) / 100 + attr.e.plus, GsTalentType.e)
	}, {
		title: 'E刹那之花(打半血)',
		params: { half: true },
		dmg: ({ talent: { e }, attr, calc }, { basic }) =>
			basic(metaData.talentData.e["刹那之花伤害"][e.level] * calc(attr.def) / 100 + attr.e.plus, GsTalentType.e)
	}, ({ cons }) => ({
		title: cons >= 2 ? '满Buff-Q总伤害' : 'Q总伤害',
		params: { buff: cons >= 2 ? 1 : 0 },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["爆发伤害"][q.level] + metaData.talentData.q["生灭之花伤害"][q.level] * 7, GsTalentType.q)
	})],
	buffs: [{
		title: '阿贝多被动：刹那之花对生命值低于50%的敌人造成的伤害提高25%',
		data: {
			eDmg: ({ params }) => params.half ? 25 : 0
		}
	}, {
		title: '阿贝多2命：4层Buff提高Q [qPlus]伤害',
		check: ({ cons }) => cons >= 2,
		sort: 9, data: {
			qPlus: ({ params, attr, calc }) => params.buff === 0 ? 0 : calc(attr.def) * 1.2
		}
	}],
	mainAttr: [AttrKeys.def, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 1
}
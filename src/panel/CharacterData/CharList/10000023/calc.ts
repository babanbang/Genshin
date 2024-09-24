import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 香菱 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '锅巴单口伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["喷火伤害"][e.level], GsTalentType.e)
	}, {
		title: '锅巴单口蒸发',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["喷火伤害"][e.level], GsTalentType.e, DmgTypes.vaporize)
	}, {
		title: '旋火轮单次伤害',
		params: { isQ: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["旋火轮伤害"][q.level], GsTalentType.q)
	}, {
		title: '旋火轮单次蒸发',
		params: { isQ: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["旋火轮伤害"][q.level], GsTalentType.q, DmgTypes.vaporize)
	}],
	buffs: [{
		title: '香菱1命：锅巴降低敌人火抗15',
		check: ({ cons }) => cons >= 1,
		data: {
			kx: 15
		}
	}, {
		check: ({ params, cons }) => cons === 6 && !params.isQ,
		title: '香菱6命：旋火轮持续期间获得15%火伤加成',
		data: {
			dmg: 15
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 3
}
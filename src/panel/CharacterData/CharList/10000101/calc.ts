import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 基尼奇 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '迴猎贯鳞炮伤害',
		params: { Scalespiker: true },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["迴猎贯鳞炮伤害"][e.level], [GsTalentType.e, 'nightsoul'])
	}, {
		check: ({ cons }) => cons >= 2,
		title: '2命首次猎贯鳞炮',
		params: { Scalespiker: true, cons2: true },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["迴猎贯鳞炮伤害"][e.level], [GsTalentType.e, 'nightsoul'])
	}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], [GsTalentType.q, 'nightsoul'])
	}, {
		title: 'Q龙息伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["龙息伤害"][q.level], [GsTalentType.q, 'nightsoul'])
	}, {
		title: 'Q龙息激化',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["龙息伤害"][q.level], [GsTalentType.q, 'nightsoul'], DmgTypes.spread)
	}],
	buffs: [{
		title: '焰灵的契约：2层buff使迴猎贯鳞炮造成的伤害提高[ePlus]',
		check: ({ params }) => params.Scalespiker === true,
		data: {
			ePlus: ({ calc, attr }) => calc(attr.atk) * 320 / 100 * 2
		}
	}, {
		title: '基尼奇1命：迴猎贯鳞炮的暴击伤害提升[eCdmg]%',
		check: ({ cons, params }) => cons >= 1 && params.Scalespiker === true,
		data: {
			eCdmg: 100
		}
	}, {
		title: '基尼奇2命：元素战技命中敌人使其草元素抗性降低[kx]%,首次猎贯鳞炮的伤害提升[eDmg]%',
		check: ({ cons }) => cons >= 2,
		data: {
			kx: 30,
			eDmg: ({ params }) => params.cons2 === true ? 100 : 0
		}
	}, {
		title: '基尼奇4命：向伟大圣龙致意造成的伤害提升[qDmg]%',
		check: ({ cons }) => cons >= 4,
		data: {
			qDmg: 70
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defParams: () => ({ Nightsoul: true }),
	defDmgIdx: 0,
	createdBy: 'liangshi'

}
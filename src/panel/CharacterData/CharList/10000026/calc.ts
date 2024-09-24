import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 魈 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '风轮两立',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: '开Q满被动E',
		params: { e: 1, layer: 5 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["技能伤害"][e.level], GsTalentType.e)
	}, {
		title: '靖妖傩舞·首插',
		params: {
			layer: 1
		},
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["低空/高空坠地冲击伤害"][a.level][1], [GsTalentType.a, 3])
	}, {
		title: '靖妖傩舞·尾插',
		params: {
			layer: 5
		},
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["低空/高空坠地冲击伤害"][a.level][1], [GsTalentType.a, 3])
	}],
	buffs: [{
		title: '靖妖傩舞：下落攻击伤害提升[a3Dmg]%',
		data: {
			a3Dmg: ({ talent: { q } }) => metaData.talentData.q["普通攻击/重击/下落攻击伤害提升"][q.level]
		}
	}, {
		title: '魈天赋：开Q后每3秒伤害提升5%，满层提高25%',
		data: {
			dmg: ({ params }) => params.layer as number * 5
		}
	}, {
		title: '魈被动：3层E使E的伤害提高45%',
		data: {
			eDmg: ({ params }) => params.e ? 45 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defParams: () => ({ layer: 0 }),
	defDmgIdx: 3
}
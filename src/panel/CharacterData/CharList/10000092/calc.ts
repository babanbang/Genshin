import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 嘉明 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '下落攻击·踏云献瑞伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["下落攻击·踏云献瑞伤害"][e.level], [GsTalentType.a, 3])
	}, {
		title: '下落攻击·踏云献瑞蒸发',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["下落攻击·踏云献瑞伤害"][e.level], [GsTalentType.a, 3], DmgTypes.vaporize)
	}, {
		title: '猊兽·文仔砸击伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["猊兽·文仔砸击伤害"][q.level], GsTalentType.q)
	}, {
		title: '猊兽·文仔砸击蒸发',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["猊兽·文仔砸击伤害"][q.level], GsTalentType.q, DmgTypes.vaporize)
	}],
	buffs: [{
		title: '嘉明天赋：生命值低于50%时,获得[heal]%受治疗加成。生命值高于或等于50%时,下落攻击·踏云献瑞造成的伤害提升[a3Dmg]%。',
		data: {
			heal: 20,
			a3Dmg: 20
		}
	}, {
		title: '嘉明2命：受到治疗溢出,攻击力提升[atkPct]%',
		check: ({ cons }) => cons >= 2,
		data: {
			atkPct: 20
		}
	}, {
		title: '嘉明6命：下落攻击·踏云献瑞的暴击率提升[a3Cpct]%，暴击伤害提升[a3Cdmg]%',
		check: ({ cons }) => cons === 6,
		data: {
			a3Cpct: 20,
			a3Cdmg: 40
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 1,
	createdBy: 'liangshi'

}
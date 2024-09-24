import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 娜维娅 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后普通攻击一段',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a)
	}, {
		title: '0消耗典仪式晶火',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["玫瑰晶弹基础伤害"][e.level], GsTalentType.e)
	}, {
		title: '3消耗典仪式晶火',
		params: { jp: 3 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["玫瑰晶弹基础伤害"][e.level] * 2, GsTalentType.e)
	}, {
		title: '6消耗典仪式晶火',
		params: { jp: 6 },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["玫瑰晶弹基础伤害"][e.level] * 2, GsTalentType.e)
	}, {
		title: '如霰澄天的鸣礼伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: '支援炮击伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["支援炮击伤害"][q.level], GsTalentType.q)
	}, {
		title: '结晶护盾吸收量',
		dmg: ({ }, { reaction }) => reaction(DmgTypes.crystallize)
	}],
	buffs: [{
		title: '典仪式晶火：消耗[_count]枚弹片将使本次射击造成的伤害额外提升[eDmg]%',
		check: ({ params }) => params.jp as number > 3,
		data: {
			_count: ({ params }) => params.jp as number,
			eDmg: ({ params }) => (params.jp as number - 3) * 15
		}
	}, {
		title: '娜维娅天赋：施放典仪式晶火后娜维娅的普攻,重击，下落攻击造成的伤害提升[aDmg]%',
		data: {
			aDmg: 40,
			a2Dmg: 40,
			a3Dmg: 40
		}
	}, {
		title: '娜维娅天赋：队伍中存在三位火雷冰水元素角色,攻击力提升[atkPct]%',
		data: {
			atkPct: 40
		}
	}, {
		title: '娜维娅2命：施放典仪式晶火时消耗「裂晶弹片」使本次典仪式晶火的暴击率提升[eCpct]%',
		check: ({ cons, params }) => cons >= 2 && params.jp !== undefined,
		data: {
			eCpct: ({ params }) => Math.min(36, params.jp as number * 12)
		}
	}, {
		title: '娜维娅4命：被如霰澄天的鸣礼命中的敌人抗性降低[kx]%',
		check: ({ cons }) => cons >= 4,
		data: {
			kx: 20
		}
	}, {
		title: '娜维娅6命：消耗[_count]枚弹片,使典仪式晶火的暴击伤害提升[eCdmg]%',
		check: ({ cons, params }) => cons === 6 && params.jp as number > 3,
		data: {
			_count: ({ params }) => params.jp as number,
			eCdmg: ({ params }) => Math.min(135, (params.jp as number - 3) * 45)
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 3,
	createdBy: 'liangshi'
}
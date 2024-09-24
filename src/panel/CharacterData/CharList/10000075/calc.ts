import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 流浪者 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '开E后首段普攻',
		params: { pyro: false, cryo: false },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a)
	}, {
		title: '开E后重击',
		params: { pyro: false, cryo: false },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '开E满染火冰首段普攻',
		params: { pyro: true, cryo: true },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a)
	}, {
		title: 'Q伤害',
		params: { pyro: true, cryo: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '羽画·风姿华歌：开启E后额外提升普通[aMulti]%伤害,重击[a2Multi]%伤害',
		data: {
			aMulti: ({ talent: { e } }) => metaData.talentData.e["空居·不生断伤害"][e.level] - 100,
			a2Multi: ({ talent: { e } }) => metaData.talentData.e["空居·刀风界伤害"][e.level] - 100
		}
	}, {
		title: '天赋拾玉得花：火元素攻击力提升30%,冰元素暴击率提升20%',
		data: {
			atkPct: ({ params }) => params.pyro ? 30 : 0,
			cpct: ({ params }) => params.cryo ? 20 : 0
		}
	}, {
		title: '二番·箙岛月白浪：至多使狂言·式乐五番造成的伤害提升200%',
		check: ({ cons }) => cons >= 2,
		data: {
			qDmg: 200
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 2
}
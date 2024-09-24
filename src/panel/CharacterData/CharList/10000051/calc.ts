import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 优菈 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '普攻尾段2次伤害',
		params: { e: false },
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["五段伤害"][a.level], GsTalentType.a, DmgTypes.phy)
	}, {
		title: 'E0层长按伤害',
		params: { gj: false },
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["长按伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E2层长按伤害',
		params: { gj: true },
		dmg: ({ talent: { e, q } }, { dmg }) => {
			const _dmg = dmg(metaData.talentData.e["长按伤害"][e.level], GsTalentType.e)
			const g = dmg(metaData.talentData.e["冰涡之剑伤害"][e.level], GsTalentType.e)
			const j = dmg(metaData.talentData.q["光降之剑基础伤害"][q.level], GsTalentType.e, DmgTypes.phy)
			return {
				dmg: _dmg.dmg + g.dmg * 2 + j.dmg * 0.5,
				avg: _dmg.avg + g.avg * 2 + j.avg * 0.5
			}
		}
	}, ({ cons, weapon }) => {
		let buffCount = 12
		/** 松籁响起之时 */
		if (weapon.id === 12503) {
			buffCount = 13
			if (weapon.affix >= 4) {
				buffCount = 14
			}
		}
		if (cons === 6) {
			buffCount = buffCount + 11
		}
		return {
			title: `光降之剑${buffCount}层伤害`,
			params: { gj: true },
			dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["光降之剑基础伤害"][q.level] + metaData.talentData.q["每层能量伤害"][q.level] * buffCount, GsTalentType.q, DmgTypes.phy)
		}
	}],
	buffs: [{
		title: '优菈天赋：E消耗冰涡之剑后降低抗性[kx]%',
		check: ({ params }) => params.gj !== false,
		data: {
			kx: ({ talent: { e } }) => metaData.talentData.e["冰元素抗性降低"][e.level]
		}
	}, {
		title: '优菈一命：消耗冷酷之心后物理伤害提高30%',
		check: ({ cons }) => cons >= 1,
		data: {
			phy: ({ params }) => params.gj ? 30 : 0
		}
	}, {
		title: '优菈四命：对生命值低于50%的敌人，光降之剑造成的伤害提高25%',
		check: ({ cons }) => cons >= 4,
		data: {
			qDmg: 25
		}
	}, {
		title: '优菈6命：光降之剑额外获得5层Buff，普攻/E有50%概率额外获得1层',
		check: ({ cons }) => cons === 6,
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 3
}
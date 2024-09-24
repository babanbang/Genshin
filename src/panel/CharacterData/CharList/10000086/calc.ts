import { AttrKeys, CharCalcRuleType, DmgTypes, CalcRuleDetailDmgParams, CalcRuleDetailFuncRet } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 莱欧斯利 */
const dmgCalc: (ds: CalcRuleDetailDmgParams['ds'], Func: CalcRuleDetailDmgParams['Func'], type?: DmgTypes) => {
	[key in 'a1Dmg' | 'a2Dmg' | 'a3Dmg' | 'a5Dmg' | 'azDmg']: CalcRuleDetailFuncRet
} = ({ talent: { a } }, { dmg }, type) => ({
	a1Dmg: dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a, type),
	a2Dmg: dmg(metaData.talentData.a["二段伤害"][a.level], GsTalentType.a),
	a3Dmg: dmg(metaData.talentData.a["三段伤害"][a.level], GsTalentType.a),
	a5Dmg: dmg(metaData.talentData.a["五段伤害"][a.level], GsTalentType.a),
	azDmg: dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2], type)
})

export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E后普攻首段',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a)
	}, {
		title: 'E后强化重击伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: 'E后强化重击融化伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["重击伤害"][a.level], [GsTalentType.a, 2], DmgTypes.melt)
	}, {
		title: 'Q总伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q融化总伤害',
		dmg: ({ talent: { q } }, { dmg }) => {
			const td = metaData.talentData.q["技能伤害2"][q.level][0]
			const normalDmg = dmg(td, GsTalentType.q)
			const meltDmg = dmg(td, GsTalentType.q, DmgTypes.melt)
			return {
				dmg: normalDmg.dmg * 3 + meltDmg.dmg * 2,
				avg: normalDmg.avg * 3 + meltDmg.avg * 2
			}
		}
	}, {
		title: '一轮普攻5A接重击',
		dmg: (ds, Dmg) => {
			const { a1Dmg, a2Dmg, a3Dmg, a5Dmg, azDmg } = dmgCalc(ds, Dmg)
			const a4Dmg = Dmg.dmg(metaData.talentData.a["四段伤害"][ds.talent.a.level], GsTalentType.a)
			const azCount = ds.cons < 6 ? 1 : 2
			return {
				dmg: a1Dmg.dmg + a2Dmg.dmg + a3Dmg.dmg + a4Dmg.dmg + a5Dmg.dmg + azDmg.dmg * azCount,
				avg: a1Dmg.avg + a2Dmg.avg + a3Dmg.avg + a4Dmg.avg + a5Dmg.avg + azDmg.avg * azCount
			}
		}
	}, {
		title: '一轮普攻5A接重击(融化)',
		dmg: (ds, Dmg) => {
			const { a1Dmg, a2Dmg, a3Dmg, a5Dmg, azDmg } = dmgCalc(ds, Dmg, DmgTypes.melt)
			const a41Dmg = Dmg.dmg(metaData.talentData.a["四段伤害2"][ds.talent.a.level][0], GsTalentType.a, DmgTypes.melt)
			const a42Dmg = Dmg.dmg(metaData.talentData.a["四段伤害2"][ds.talent.a.level][0], GsTalentType.a)
			const azMeltCount = ds.cons < 6 ? 1 : 2
			return {
				dmg: a1Dmg.dmg + a2Dmg.dmg + a3Dmg.dmg + a41Dmg.dmg + a42Dmg.dmg + a5Dmg.dmg + azDmg.dmg * azMeltCount,
				avg: a1Dmg.avg + a2Dmg.avg + a3Dmg.avg + a41Dmg.avg + a42Dmg.avg + a5Dmg.avg + azDmg.avg * azMeltCount
			}
		}
	}],
	buffs: [{
		title: '冰牙突驰：强化普攻，使其造成的伤害提升至[_aMulti]%',
		data: {
			_aMulti: ({ talent: { e } }) => metaData.talentData.e["强化斥逐拳伤害"][e.level],
			aMulti: ({ talent: { e } }) => metaData.talentData.e["强化斥逐拳伤害"][e.level] - 100
		}
	}, {
		title: '天赋-公理终有辩诉之日：重击造成的伤害提升[a2Dmg]%',
		data: {
			a2Dmg: 50
		}
	}, {
		title: '天赋-罪业终有报偿之时：生命变动时获得1层Buff，5层Buff使得攻击力提升[atkPct]%',
		data: {
			atkPct: 30
		}
	}, {
		title: '莱欧1命：重击造成的伤害额外提升[a2Dmg]%',
		check: ({ cons }) => cons >= 1,
		data: {
			a2Dmg: 150
		}
	}, {
		title: '莱欧2命：5层Buff使得Q造成的伤害提升[qDmg]%',
		check: ({ cons }) => cons >= 2,
		data: {
			qDmg: 200
		}
	}, {
		title: '莱欧6命：重击的暴击率提升[a2Cpct]%,暴击伤害提升[a2Cdmg]%,并能够额外造成一次伤害',
		check: ({ cons }) => cons === 6,
		data: {
			a2Cpct: 10,
			a2Cdmg: 80
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 6,
	createdBy: 'Aluxes'

}
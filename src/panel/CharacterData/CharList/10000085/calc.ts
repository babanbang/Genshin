import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 菲米尼 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '普攻首段伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a, DmgTypes.phy)
	}, {
		title: 'E伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["上挑攻击伤害"][e.level], GsTalentType.e)
	}, {
		title: '0阶E伤害',
		dmg: ({ talent: { e } }, { dynamic }) => dynamic(metaData.talentData.e["零阶高压粉碎伤害"][e.level], GsTalentType.e, { dynamicDmg: 40, dynamicCpct: 15 })
	}, {
		title: '4阶E伤害',
		dmg: ({ talent: { e } }, { dynamic }) => dynamic(metaData.talentData.e["四阶高压粉碎伤害"][e.level], GsTalentType.e, { dynamicPhy: 40, dynamicCpct: 15 }, DmgTypes.phy)
	}, {
		title: 'Q伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q状态·冰伤流4轮EEA',
		check: ({ calc, attr }) => calc(attr.phy) < 58,
		dmg: ({ talent: { a, e } }, { dmg, dynamic }) => {
			const normalEDmg = dmg(metaData.talentData.e["上挑攻击伤害"][e.level], GsTalentType.e)
			const e2Dmg = dynamic(metaData.talentData.e["零阶高压粉碎伤害"][e.level], GsTalentType.e, { dynamicDmg: 40, dynamicCpct: 15 })
			const a1Dmg = dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a, DmgTypes.phy)
			return {
				dmg: (normalEDmg.dmg + e2Dmg.dmg + a1Dmg.dmg) * 4,
				avg: (normalEDmg.avg + e2Dmg.avg + a1Dmg.avg) * 4
			}
		}
	}, {
		title: 'Q状态·物理流3轮EAAAA',
		check: ({ calc, attr }) => calc(attr.phy) >= 58,
		dmg: ({ talent: { a, e } }, { dmg, dynamic }) => {
			const normalEDmg = dmg(metaData.talentData.e["上挑攻击伤害"][e.level], GsTalentType.e)
			const a1Dmg = dmg(metaData.talentData.a["一段伤害"][a.level], GsTalentType.a, DmgTypes.phy)
			const a2Dmg = dmg(metaData.talentData.a["二段伤害"][a.level], GsTalentType.a, DmgTypes.phy)
			const e2Dmg = dynamic(metaData.talentData.e["四阶高压粉碎伤害"][e.level], GsTalentType.e, { dynamicPhy: 40, dynamicCpct: 15 }, DmgTypes.phy)
			return {
				dmg: (normalEDmg.dmg + a1Dmg.dmg * 2 + a2Dmg.dmg + e2Dmg.dmg) * 3,
				avg: (normalEDmg.avg + a1Dmg.avg * 2 + a2Dmg.avg + e2Dmg.avg) * 3
			}
		}
	}],
	buffs: [{
		title: '天赋-并流式冷凝机关：触发碎冰反应后，使浮冰增压·高压粉碎造成的伤害提高40%'
	}, {
		title: '菲米尼1命：浮冰增压·高压粉碎的暴击率提高15%',
		check: ({ cons }) => cons >= 1
	}, {
		title: '菲米尼4命：触发冰冻、碎冰、超导反应后，满层Buff提升攻击力[atkPct]%',
		check: ({ cons }) => cons >= 4,
		data: {
			atkPct: 18
		}
	}, {
		title: '菲米尼6命：触发冰冻、碎冰、超导反应后，满层Buff提升暴击伤害[cdmg]%',
		check: ({ cons }) => cons === 6,
		data: {
			cdmg: 36
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
	defDmgIdx: 0,
	createdBy: 'Aluxes'
}
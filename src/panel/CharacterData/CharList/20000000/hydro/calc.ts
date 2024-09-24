import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 旅行者 */
export const CharCalcRule: CharCalcRuleType = {
  details: [{
    title: 'E点按伤害',
    dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["喷发激流伤害"][e.level], GsTalentType.e)
  }, {
    title: 'E点按伤害·蒸发',
    dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["喷发激流伤害"][e.level], GsTalentType.e, DmgTypes.vaporize)
  }, {
    title: 'E长按露滴伤害',
    params: { talentE1: true },
    dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["露滴伤害"][e.level], GsTalentType.e)
  }, {
    title: 'E长按结束伤害',
    params: { talentE2: true },
    dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["喷发激流伤害"][e.level], GsTalentType.e)
  }, {
    title: 'E长按结束伤害·蒸发',
    params: { talentE2: true },
    dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["喷发激流伤害"][e.level], GsTalentType.e, DmgTypes.vaporize)
  }, {
    title: 'Q每跳伤害',
    dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
  }, {
    title: 'Q每跳伤害·蒸发',
    dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q, DmgTypes.vaporize)
  }],
  buffs: [{
    title: '天赋E-水纹剑：长按E释放时，基于自身生命值上限的[_hpPct]%，提高伤害值[ePlus]',
    check: ({ params }) => params.talentE1 === true,
    data: {
      _hpPct: ({ talent: { e } }) => metaData.talentData.e["充盈伤害增加"][e.level],
      ePlus: ({ talent: { e }, attr, calc }) => metaData.talentData.e["充盈伤害增加"][e.level] * calc(attr.hp) / 100
    }
  }, {
    title: '天赋-澄明的净水：长按E时，根据消耗的生命值的45%，提高伤害值[ePlus]',
    check: ({ params }) => params.talentE2 === true,
    data: {
      ePlus: ({ attr, calc }) => Math.min(5000, calc(attr.hp) * 0.24 * 0.45)
    }
  }],
  mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery, AttrKeys.dmg],
  defDmgIdx: 1,
  createdBy: 'Aluxes'
}
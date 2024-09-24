import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 钟离 */
export const CharCalcRule: CharCalcRuleType = {
  details: [{
    title: '玉璋护盾量',
    dmg: ({ talent: { e }, attr, calc }, { shield }) => shield(metaData.talentData.e["护盾基础吸收量"][e.level] + calc(attr.hp) * metaData.talentData.e["护盾附加吸收量"][e.level] / 100)
  }, {
    title: '共鸣伤害',
    dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["岩脊伤害/共鸣伤害"][e.level][1], GsTalentType.e) // 6856
  }, {
    title: '天星伤害',
    dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
  }],
  buffs: [{
    title: '钟离被动：满层Buff下护盾强效提高25%',
    data: {
      shield: 25
    }
  }, {
    title: '岩系护盾：岩系护盾吸收效率150%',
    data: {
      shieldInc: 50
    }
  }, {
    title: '钟离被动：基于生命值上限，共鸣伤害提高[ePlus]，天星伤害提高[qPlus]',
    sort: 9,
    data: {
      ePlus: ({ attr, calc }) => calc(attr.hp) * 0.019,
      qPlus: ({ attr, calc }) => calc(attr.hp) * 0.33
    }
  }, {
    title: '玉璋护盾：降低敌人全抗性20%',
    data: {
      kx: 20
    }
  }],
  mainAttr: [AttrKeys.hp, AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg],
  defDmgIdx: 0
}
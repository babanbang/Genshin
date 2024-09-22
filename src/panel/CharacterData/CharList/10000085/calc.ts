details = [{
  title: '普攻首段伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('一段伤害'], GsTalentType.a, 'phy')
}, {
  title: 'E伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('上挑攻击伤害'], GsTalentType.e)
}, {
  title: '0阶E伤害',
    dmg: ({ talent }, { dynamic }) => dynamic(talent[GsTalentType.e].get('零阶高压粉碎伤害'], GsTalentType.e, { dynamicDmg: 40, dynamicCpct: 15 })
}, {
  title: '4阶E伤害',
    dmg: ({ talent }, { dynamic }) => dynamic(talent[GsTalentType.e].get('四阶高压粉碎伤害'], GsTalentType.e, { dynamicPhy: 40, dynamicCpct: 15 }, 'phy')
}, {
  title: 'Q伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
}, {
  title: 'Q状态·冰伤流4轮EEA',
    check: ({ calc, attr }) => calc(attr.phy) < 58,
      dmgKey: GsTalentType.q,
        dmg: ({ talent }, { dmg }) => {
          let normalEDmg = dmg(talent[GsTalentType.e].get('上挑攻击伤害'], GsTalentType.e)
    let e2Dmg = dmg.dynamic(talent[GsTalentType.e].get('零阶高压粉碎伤害'], GsTalentType.e, { dynamicDmg: 40, dynamicCpct: 15 })
    let a1Dmg = dmg(talent[GsTalentType.a].get('一段伤害'], GsTalentType.a, 'phy')
    return {
            dmg: (normalEDmg.dmg + e2Dmg.dmg + a1Dmg.dmg) * 4,
            avg: (normalEDmg.avg + e2Dmg.avg + a1Dmg.avg) * 4
          }
        }
}, {
  title: 'Q状态·物理流3轮EAAAA',
    check: ({ calc, attr }) => calc(attr.phy) >= 58,
      dmgKey: GsTalentType.q,
        dmg: ({ talent }, { dmg }) => {
          let normalEDmg = dmg(talent[GsTalentType.e].get('上挑攻击伤害'], GsTalentType.e)
    let a1Dmg = dmg(talent[GsTalentType.a].get('一段伤害'], GsTalentType.a, 'phy')
    let a2Dmg = dmg(talent[GsTalentType.a].get('二段伤害'], GsTalentType.a, 'phy')
    let e2Dmg = dmg.dynamic(talent[GsTalentType.e].get('四阶高压粉碎伤害'], GsTalentType.e, { dynamicPhy: 40, dynamicCpct: 15 }, 'phy')
    return {
            dmg: (normalEDmg.dmg + a1Dmg.dmg * 2 + a2Dmg.dmg + e2Dmg.dmg) * 3,
            avg: (normalEDmg.avg + a1Dmg.avg * 2 + a2Dmg.avg + e2Dmg.avg) * 3
          }
        }
}]

defDmgKey = GsTalentType.q
mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '天赋-并流式冷凝机关：触发碎冰反应后，使浮冰增压·高压粉碎造成的伤害提高40%'
}, {
  title: '菲米尼1命：浮冰增压·高压粉碎的暴击率提高15%',
  cons: 1
}, {
  title: '菲米尼4命：触发冰冻、碎冰、超导反应后，满层Buff提升攻击力[atkPct]%',
  cons: 4,
  data: {
    atkPct: 18
  }
}, {
  title: '菲米尼6命：触发冰冻、碎冰、超导反应后，满层Buff提升暴击伤害[cdmg]%',
  cons: 6,
  data: {
    cdmg: 36
  }
}]

createdBy = 'Aluxes'

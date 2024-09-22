details = [{
  title: 'E后普攻一段',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('一段伤害'], GsTalentType.a)
}, {
  title: 'E突刺伤害',
    dmg: ({ talent, attr }, { basic }) => basic(talent[GsTalentType.e].get('上挑攻击伤害2'][0] * attr.atk / 100 + talent[GsTalentType.e].get('上挑攻击伤害2'][1] * attr.def / 100, GsTalentType.e)
}, {
  title: 'E人偶伤害',
    dmg: ({ talent, attr }, { basic }) => basic(talent[GsTalentType.e].get('袖伤害2'][0] * attr.atk / 100 + talent[GsTalentType.e].get('袖伤害2'][1] * attr.def / 100, GsTalentType.e)
}, {
  title: '2命人偶切斩伤害',
    check: ({ cons }) => cons >= 2,
      dmg: ({ talent, attr }, { basic }) => basic((talent[GsTalentType.e].get('袖伤害2'][0] * attr.atk / 100 + talent[GsTalentType.e].get('袖伤害2'][1] * attr.def / 100) * 1.7, GsTalentType.e)
}, {
  title: 'Q伤害',
    dmg: ({ talent, attr }, { basic }) => basic(talent[GsTalentType.q].get('技能伤害2'][0] * attr.atk / 100 + talent[GsTalentType.q].get('技能伤害2'][1] * attr.def / 100, GsTalentType.q)
}]

defDmgIdx = 2
mainAttr = 'atk,def,cpct,cdmg,dmg'

buffs = [{
  title: '千织天赋：队伍中角色创造岩造物时，获得[dmg]%岩伤加成',
  data: {
    dmg: 20
  }
}, {
  title: '千织6命：普攻造成的伤害提升[aPlus]',
  sort: 9,
  cons: 6,
  data: {
    aPlus: ({ attr }) => attr.def * 235 / 100
  }
}]

createdBy = 'liangshi'

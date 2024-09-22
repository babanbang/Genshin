details = [{
  title: 'E荒星伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'Q地震波单次伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('地震波单次伤害'], GsTalentType.q)
}]

mainAttr = 'atk,cpct,cdmg,dmg'

buffs = [{
  title: '岩主1命：处于Q岩造物范围内时，暴击率提高[cpct]%',
  cons: 1,
  data: {
    cpct: 10
  }
}]

createdBy = 'Aluxes'

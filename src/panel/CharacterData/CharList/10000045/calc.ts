details = [{
  title: 'E两段伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'Q技能伤害(2段)',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
}, {
  title: 'Q每跳伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('冰枪持续伤害'], GsTalentType.q)
}]

mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '修女被动：从背后攻击时，暴击率提升12%',
  data: {
    cpct: 12
  }
}]

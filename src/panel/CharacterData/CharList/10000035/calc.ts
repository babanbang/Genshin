details = [{
  title: 'E每跳治疗',
  dmg: ({ talent, attr, calc }, { heal }) =>
    heal(talent[GsTalentType.e].get('持续治疗量2'][0] * calc(attr.atk) / 100 + talent[GsTalentType.e].get('持续治疗量2'][1] * 1)
}, {
  title: '度厄真符每次治疗',
    dmg: ({ talent, attr, calc }, { heal }) => heal(talent[GsTalentType.q].get('治疗量2'][0] * calc(attr.atk) / 100 + talent[GsTalentType.q].get('治疗量2'][1] * 1)
}, {
  title: '重击伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击伤害'], [GsTalentType.a, 2], 'phy')
}]

mainAttr = 'atk,cpct,cdmg,heal'

buffs = [{
  title: '七七二命：对受冰元素影响的敌人普攻及重击伤害提升15%',
  cons: 2,
  data: {
    a2: 15
  }
}]

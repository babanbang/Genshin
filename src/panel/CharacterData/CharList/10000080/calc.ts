details = [{
  title: 'Q施放治疗量',
  dmg: ({ talent, calc, attr }, { heal }) => heal(talent[GsTalentType.q].get('施放治疗量2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.q].get('施放治疗量2'][1])
}, {
  title: '鹰翎治疗量',
    dmg: ({ talent, calc, attr }, { heal }) => heal(talent[GsTalentType.q].get('鹰翎治疗量2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.q].get('鹰翎治疗量2'][1])
}]

mainAttr = 'hp,cpct,cdmg'

buffs = []

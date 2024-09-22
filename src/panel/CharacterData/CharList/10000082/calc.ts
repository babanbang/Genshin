details = [{
  title: 'E每跳治疗量',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent[GsTalentType.e].get('治疗量2'][0] / 100 + talent[GsTalentType.e].get('治疗量2'][1])
}, {
  title: '2命·E+额外治疗量',
    cons: 2,
      dmg: ({ talent, calc, attr }, { heal }) => heal((calc(attr.hp) * talent[GsTalentType.e].get('治疗量2'][0] / 100 + talent[GsTalentType.e].get('治疗量2'][1]) * 1.2)
}, {
  title: 'Q每跳治疗量',
    dmg: ({ talent, calc, attr }, { heal }) =>
      heal(talent[GsTalentType.q].get('无郤气护盾治疗量2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.q].get('无郤气护盾治疗量2'][1])
}, {
  title: 'Q每跳护盾吸收量',
    dmg: ({ talent, calc, attr }, { shield }) => shield(talent[GsTalentType.q].get('无郤气护盾吸收量2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.q].get('无郤气护盾吸收量2'][1])
}, {
  title: 'Q每跳伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('灵气脉技能伤害'], GsTalentType.q)
}, {
  title: 'Q每跳激化伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('灵气脉技能伤害'], GsTalentType.q, 'spread')
}]

mainAttr = 'atk,hp,cpct,cdmg'

buffs = [{
  cons: 4,
  title: '白术4命：释放Q之后，队伍中附近所有角色元素精通提升80点',
  data: {
    mastery: 80
  }
}, {
  cons: 6,
  title: '白术6命：基于生命值上限的8%，灵气脉造成的伤害提高[qPlus]',
  sort: 9,
  data: {
    qPlus: ({ attr, calc }) => calc(attr.hp) * 0.08
  }
}, 'spread']

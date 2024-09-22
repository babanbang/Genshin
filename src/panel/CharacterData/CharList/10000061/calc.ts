details = [{
  title: '秘法·惊喜特派伤害',
  talent: GsTalentType.q,
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
}, {
  title: '护盾最大吸收量',
    talent: GsTalentType.e,
      dmg: ({ talent, calc, attr }, { shield }) => shield(talent[GsTalentType.e].get('护盾吸收量上限2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.e].get('护盾吸收量上限2'][1] * 1)
}]

mainAttr = 'atk,hp,cpct,cdmg'

buffs = [{
  title: '绮良良被动：基于绮良良的生命上限，秘法·惊喜特派伤害提升[qDmg]%',
  sort: 9,
  data: {
    qDmg: ({ attr, calc }) => calc(attr.hp) / 1000 * 0.3
  }
}]

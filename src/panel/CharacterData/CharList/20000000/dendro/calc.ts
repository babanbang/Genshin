details = [{
  title: 'E伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'E激化伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e, 'spread')
}, {
  title: 'Q每跳伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('草灯莲攻击伤害'], GsTalentType.q)
}, {
  title: 'Q每跳激化伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('草灯莲攻击伤害'], GsTalentType.q, 'spread')
}, {
  title: 'Q草灯爆炸伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('激烈爆发伤害'], GsTalentType.q)
}]

defDmgIdx = 3
mainAttr = 'atk,cpct,cdmg,mastery'

buffs = [{
  title: '天赋-蔓生的埜草：提升元素精通[mastery]点',
  data: {
    mastery: 60
  }
}, {
  title: '天赋-繁庑的丛草：基于自身元素精通，提高E造成的伤害[eDmg]%，Q造成的伤害[qDmg]%',
  sort: 9,
  data: {
    eDmg: ({ attr }) => attr.mastery * 0.15,
    qDmg: ({ attr }) => attr.mastery * 0.1
  }
}, {
  title: '草主6命：获得[dmg]%草元素伤害加成',
  cons: 6,
  data: {
    dmg: 12
  }
}, 'spread']

createdBy = 'Aluxes'

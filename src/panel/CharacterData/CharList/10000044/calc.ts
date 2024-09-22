details = [{
  title: 'E伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('挥舞伤害'], GsTalentType.e)
}, {
  title: '三级护盾量',
    dmg: ({ talent, calc, attr }, { shield }) =>
      shield(talent[GsTalentType.e].get('三级护盾吸收量2'][0] * calc(attr.def) / 100 + talent[GsTalentType.e].get('三级护盾吸收量2'][1] * 1)
}, {
  title: 'Q释放伤害',
    params: { phy: true },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q, 'phy')
}, {
  title: '重击循环伤害',
    params: { a2: true, phy: true },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击循环伤害'], [GsTalentType.a, 2], 'phy')
}]

mainAttr = 'atk,def,cpct,cdmg'
enemyName = '魔偶/女士/雷神/丘丘'

buffs = [{
  title: '辛焱被动：处于护盾下物理伤害提高15%',
  data: {
    phy: 15
  }
}, {
  title: '辛焱2命：Q的暴击率提升100%',
  cons: 2,
  data: {
    qCpct: 100
  }
}, {
  title: '辛焱4命：E造成伤害使敌人物理抗性降低15%',
  cons: 4,
  check: ({ params }) => params.phy === true,
  data: {
    kx: 15
  }
}, {
  title: '辛焱6命：进行重击时，基于防御力的50%获得[atkPlus]攻击力加成',
  cons: 6,
  sort: 9,
  check: ({ params }) => params.a2 === true,
  data: {
    atkPlus: ({ attr, calc }) => calc(attr.def) * 0.5
  }
}]

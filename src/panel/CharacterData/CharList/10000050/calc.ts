details = [{
  title: 'E基础护盾量',
  dmg: ({ attr, calc, talent }, { shield }) =>
    shield(talent[GsTalentType.e].get('护盾吸收量2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.e].get('护盾吸收量2'][1] * 1)
}, {
  title: 'E最大护盾量',
    params: { e: true },
  dmg: ({ attr, calc, talent }, { shield }) =>
    shield(talent[GsTalentType.e].get('护盾吸收量上限2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.e].get('护盾吸收量上限2'][1] * 1)
}, {
  title: 'Q每段伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('炽火崩破伤害'], GsTalentType.q)
}]

mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '托马被动：5层Buff提高护盾强效25%',
  data: {
    shieldPlus: ({ params }) => params.e ? 25 : 0
  }
}, {
  title: '托马被动：Q每段伤害提高[qPlus]',
  sort: 9,
  data: {
    qPlus: ({ calc, attr }) => calc(attr.hp) * 0.022
  }
}]

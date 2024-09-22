details = [{
  title: '长按E总伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('猫爪伤害'] * 5, GsTalentType.e)
}, {
  title: '长按E护盾量',
    dmg: ({ talent, attr, calc, cons }, { shield }) => {
      const sheildPlus = cons >= 2 ? 1.15 : 1
      return shield((talent[GsTalentType.e].get('护盾基础吸收量2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.e].get('护盾基础吸收量2'][1] * 1) * 1.75 * sheildPlus)
  }

}, ({ cons }) => {
  return {
    title: `${cons === 6 ? '半血' : ''}Q每跳治疗`,
    dmg: ({ talent, calc, attr }, { heal }) =>
      heal(talent[GsTalentType.q].get('持续治疗量2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.q].get('持续治疗量2'][1] * 1)
  }
}]

defDmgIdx = 1
mainAttr = 'atk,hp,cpct,cdmg'

buffs = [{
  title: '迪奥娜天赋：长按E获得75%护盾吸收量加成',
  data: {
    _shield: 75
  }
}, {
  title: '迪奥娜2命：猫爪冻冻造成的伤害提高15%，护盾吸收量提高15%',
  cons: 2,
  data: {
    eDmg: 15,
    _shield: 15
  }
}, {
  title: '迪奥娜6命：生命值低于50%时受治疗加成提升30%',
  cons: 6,
  data: {
    heal: 30
  }
}]

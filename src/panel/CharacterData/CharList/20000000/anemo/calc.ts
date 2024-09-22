details = [{
  title: '短按E伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('初始爆风伤害'], GsTalentType.e)
}, {
  title: '长按E总伤害',
    dmg: ({ talent }, { dmg }) => {
      const td = talent[GsTalentType.e].get('初始切割伤害'] * 2 + talent[GsTalentType.e].get('最大切割伤害'] * 4 + talent[GsTalentType.e].get('最大爆风伤害']
    return dmg(td, GsTalentType.e)
    }
}, {
  title: 'Q每段伤害',
    params: { q: true },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('龙卷风伤害'], GsTalentType.q)
}, {
  title: 'Q转化元素每段伤害',
    params: { q: true },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('附加元素伤害'], GsTalentType.q, 'phy')
}, {
  title: '扩散反应伤害',
    dmg: ({ }, { reaction }) => reaction('swirl')
}]

defDmgIdx = 1
mainAttr = 'atk,cpct,cdmg,mastery'

buffs = [{
  title: '风主2命：元素充能效率提高[recharge]%',
  cons: 2,
  data: {
    recharge: 16
  }
}, {
  title: '风主6命：受到Q伤害的目标，风抗降低[kx]%，转化的对应元素抗性降低[kx]%',
  cons: 6,
  check: ({ params }) => params.q === true,
  data: {
    kx: 20,
    fykx: 20
  }
}]

createdBy = 'Aluxes'

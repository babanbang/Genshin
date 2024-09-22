details = [{
  title: '开Q提供风系伤害',
  dmg: ({ attr }) => {
    return {
      avg: (attr.atk.base || 0) * 0.32
    }
  }
}, {
  title: 'E减抗后Q伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
}, {
  check: ({ cons }) => cons >= 6,
    title: '开Q后E后台伤害',
      dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('风压坍陷风涡伤害'], GsTalentType.e)
}, {
  title: '开Q后飓烈箭伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('满蓄力瞄准射击'], [GsTalentType.a, 2])
}]

defDmgIdx = 1
mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '珐露珊6命：Q提升暴击伤害40%',
  cons: 6,
  data: {
    cdmg: 40
  }
}, {
  title: '诡风之祸：降低敌人风抗[kx]%',
  data: {
    kx: 30
  }
}, {
  title: '祈风之赐：获得风伤加成[dmg]%',
  data: {
    dmg: ({ talent }) => talent[GsTalentType.q].get('风元素伤害加成']
  }
}]

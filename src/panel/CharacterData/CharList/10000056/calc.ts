details = [{
  title: 'E提升攻击力',
  dmg: ({ talent, attr }) => {
    return {
      avg: talent[GsTalentType.e].get('攻击力加成比例'] * attr.atk.base / 100
    }
  }
}, {
  title: 'E后Q首段伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('天狗咒雷·金刚坏 伤害'], GsTalentType.q)
}, {
  title: 'E后Q每段',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('天狗咒雷·雷砾 伤害'], GsTalentType.q)
}]

defDmgIdx = 1
mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '九条E技能：提升攻击力[atkPlus]',
  data: {
    atkPlus: ({ attr, talent }) => talent[GsTalentType.e].get('攻击力加成比例'] * attr.atk.base / 100
  }
}, {
  title: '九条6命：提升60%雷元素爆伤',
    cons: 6,
      data: {
    cdmg: 60
  }
}]

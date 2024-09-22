details = [{
  title: 'E技能伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('谜影突刺伤害'], GsTalentType.e)
}, {
  title: 'Q释放伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
}, {
  title: 'Q每段风伤',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('惊奇猫猫盒伤害'], GsTalentType.q)
}, {
  title: 'Q转化元素每段伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('彩练术弹伤害'], GsTalentType.q, 'phy')// 以物伤近似
}]

defDmgIdx = 0
mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '天赋-巧施协同：开Q后，队伍中所有角色攻击力提升20%（按四色队计算）',
  data: {
    atkPct: 20
  }
}, {
  title: '天赋-道具完备：Q发生元素转化后，Q造成伤害提升15%',
  data: {
    qDmg: 15
  }
}, {
  title: '琳妮特6命：释放E突刺时，风元素伤害加成提升20%',
  cons: 6,
  data: {
    dmg: 20
  }
}]

createdBy = 'Aluxes'

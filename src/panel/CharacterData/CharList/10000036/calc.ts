details = [{
  title: '重云E伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, ({ cons }) => {
  let count = cons === 6 ? 4 : 3
  return {
    title: `Q ${count}柄灵刃总伤害`,
    dmg: ({ talent, cons }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'] * count, GsTalentType.q)
  }
}]

defDmgIdx = 1
mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '重云6命：对于生命百分比低于重云的敌人伤害提升15%，同时额外多一柄灵刃',
  cons: 6,
  data: {
    qDmg: 15
  }
}]

details = [{
  title: 'E长按伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('长按技能伤害'], GsTalentType.e)
}, {
  title: 'Q斩击伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('斩击伤害'], GsTalentType.q)
}, {
  title: 'Q无转化每段伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('持续伤害'], GsTalentType.q)
}, {
  title: '扩散反应伤害',
    dmg: ({ }, { reaction }) => reaction('swirl')
}]

mainAttr = 'atk,cpct,cdmg,mastery'

buffs = [{
  title: '万叶2命：开Q后精通提高200',
  cons: 2,
  data: {
    mastery: 200
  }
}, 'swirl']

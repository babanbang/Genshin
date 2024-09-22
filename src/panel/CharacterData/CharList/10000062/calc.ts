details = [{
  title: '附魔普攻第四段',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('四段伤害'], GsTalentType.a)
}, {
  title: 'E冰尘弹伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('冰尘弹伤害'], GsTalentType.e)
}, {
  title: 'E冷冻炸弹伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('冷冻炸弹伤害'], GsTalentType.e)
}, {
  title: 'Q技能伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
}]

buffs = [{
  title: '埃洛伊天赋：冰驰状态提高普攻伤害',
  data: {
    aDmg: ({ talent }) => talent[GsTalentType.e].get('冰驰普通攻击伤害提升']
  }
}]

details = [{
  title: 'E单次伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'Q爆发伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('爆发伤害'], GsTalentType.q)
}, {
  title: 'Q每跳伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('跃动伤害'], GsTalentType.q)
}]

mainAttr = 'atk,cpct,cdmg'

buffs = []

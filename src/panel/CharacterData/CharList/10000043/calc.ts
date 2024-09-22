details = [{
  title: 'E伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'Q每跳基础伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('持续伤害'], GsTalentType.q)
}, {
  title: '为队友提升精通',
    dmg: ({ calc, attr }) => {
      return {
        avg: calc(attr.mastery) * 0.2 + 50 + (attr.mastery.inc || 0)
      }
    }
}, {
  title: '扩散反应伤害',
    dmg: ({ }, { reaction }) => reaction('swirl')
}]

mainAttr = 'atk,cpct,cdmg,mastery'

buffs = ['swirl']

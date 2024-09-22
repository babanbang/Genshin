details = [{
  title: '开E后重击',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('重击伤害'], [GsTalentType.a, 2])
}, {
  title: '断流·斩 伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('断流·斩 伤害'], GsTalentType.e)
}, {
  title: '开E后Q伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害·近战'], GsTalentType.q)
}, {
  title: '开E后Q蒸发',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害·近战'], GsTalentType.q, DmgTypes.vaporize)
}]

mainAttr = 'atk,cpct,cdmg,mastery'

buffs = [DmgTypes.vaporize]

details = [{
  title: '重击伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击伤害'], [GsTalentType.a, 2])
}, {
  title: '璇玑屏伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'Q单颗宝石伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('宝石伤害'], GsTalentType.q)
}]

mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '凝光被动：穿过璇玑屏获得12%岩伤加成',
  data: {
    dmg: 12
  }
}]

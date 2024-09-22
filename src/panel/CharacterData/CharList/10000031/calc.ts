details = [{
  title: '奥兹攻击激化伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('奥兹攻击伤害'], GsTalentType.e, 'aggravate')
}, {
  title: '奥兹攻击伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('奥兹攻击伤害'], GsTalentType.e)
}, {
  title: '奥兹召唤伤害',
    params: { e: true },
  dmg: ({ talent, cons }, { dmg }) => dmg(talent[GsTalentType.e].get('召唤伤害'], GsTalentType.e)
}, {
  title: '至夜幻现伤害',
    dmg: ({ talent, cons }, { dmg }) => dmg(talent[GsTalentType.q].get('落雷伤害'], GsTalentType.q)
}]

mainAttr = 'atk,cpct,cdmg,mastery'

buffs = [{
  title: '皇女2命：施放夜巡影翼时，能额外造成200%攻击力的伤害',
  data: {
    ePct: ({ params }) => params.e ? 200 : 0
  }
}, {
  title: '皇女4命：施放夜巡影翼时，能额外造成200%攻击力的伤害',
  data: {
    qPct: ({ params }) => params.q ? 222 : 0
  }
}, 'aggravate']

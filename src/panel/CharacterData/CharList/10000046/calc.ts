details = [{
  title: '半血开E重击',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击伤害'], [GsTalentType.a, 2])
}, {
  title: '半血开E重击蒸发',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击伤害'], [GsTalentType.a, 2], DmgTypes.vaporize)
}, {
  title: '半血开E后Q',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('低血量时技能伤害'], GsTalentType.q)
}]

defDmgIdx = 1
mainAttr = 'hp,atk,cpct,cdmg,mastery'

buffs = [{
  title: '蝶引来生：开E获得[atkPlus]点攻击力加成',
  sort: 9,
  data: {
    atkPlus: ({ talent, attr, calc }) => {
      return Math.min(talent[GsTalentType.e].get('攻击力提高'] * calc(attr.hp) / 100, attr.atk.base * 4)
    }
  }
}, {
  title: '胡桃被动：半血获得33%火伤加成',
    data: {
    dmg: 33
  }
}, DmgTypes.vaporize]

details = [{
  title: '下落攻击·踏云献瑞伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('下落攻击·踏云献瑞伤害'], 'a3')
}, {
  title: '下落攻击·踏云献瑞蒸发',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('下落攻击·踏云献瑞伤害'], 'a3', DmgTypes.vaporize)
}, {
  title: '猊兽·文仔砸击伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('猊兽·文仔砸击伤害'], GsTalentType.q)
}, {
  title: '猊兽·文仔砸击蒸发',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('猊兽·文仔砸击伤害'], GsTalentType.q, DmgTypes.vaporize)
}]

defDmgIdx = 1
mainAttr = 'atk,cpct,cdmg,mastery'

buffs = [{
  title: '嘉明天赋：生命值低于50%时,获得[heal]%受治疗加成。生命值高于或等于50%时,下落攻击·踏云献瑞造成的伤害提升[a3Dmg]%。',
  data: {
    heal: 20,
    a3Dmg: 20
  }
}, {
  title: '嘉明2命：受到治疗溢出,攻击力提升[atkPct]%',
  cons: 2,
  data: {
    atkPct: 20
  }
}, {
  title: '嘉明6命：下落攻击·踏云献瑞的暴击率提升[a3Cpct]%，暴击伤害提升[a3Cdmg]%',
  cons: 6,
  data: {
    a3Cpct: 20,
    a3Cdmg: 40
  }
}, DmgTypes.vaporize]

createdBy = 'liangshi'

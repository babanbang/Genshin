details = [{
  title: '破局矢伤害',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent[GsTalentType.a].get('破局矢伤害'] / 100, [GsTalentType.a, 2])

}, {
  title: 'E络命丝伤害',
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent[GsTalentType.e].get('技能伤害']/ 100, GsTalentType.e)

}, {
  title: 'E络命丝蒸发',
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent[GsTalentType.e].get('技能伤害']/ 100, GsTalentType.e, '蒸发')

}, {
  title: 'Q协同单段伤害',
    params: { q: true },
  dmg: ({ talent, attr, calc, cons }, { basic }) => {
    return basic(calc(attr.hp) * (talent[GsTalentType.q].get('玄掷玲珑伤害']/ 3 / 100), GsTalentType.q)
  }
}, {
  title: 'Q协同单段蒸发',
    params: { q: true },
  dmg: ({ talent, attr, calc, cons }, { basic }) => {
    return basic(calc(attr.hp) * (talent[GsTalentType.q].get('玄掷玲珑伤害']/ 3 / 100), GsTalentType.q, '蒸发')
  }
}]

defDmgIdx = 4
mainAttr = 'hp,cpct,cdmg,mastery'

buffs = [{
  title: '夜兰被动：有4个不同元素类型角色时，夜兰生命值上限提高30%',
  data: {
    hpPct: 30
  }
}, {
  title: '夜兰4命：E络命丝爆发提高生命值，满Buff下提高40%',
  cons: 4,
  data: {
    hpPct: 40
  }
}, {
  title: '夜兰被动：Q持续过程中满层Buff下提高伤害50%',
  data: {
    dmg: ({ params }) => params.q ? 50 : 0
  }
}, DmgTypes.vaporize]

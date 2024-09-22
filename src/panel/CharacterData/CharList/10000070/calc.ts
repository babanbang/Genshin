details = [{
  title: '水月伤害',
  params: { sy: true },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent[GsTalentType.e].get('水月/水轮伤害2'][0] / 100, GsTalentType.e)
}, {
  title: '水月蒸发伤害',
    params: { sy: true },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent[GsTalentType.e].get('水月/水轮伤害2'][0] / 100, GsTalentType.e, '蒸发')
}, {
  title: '剑舞步三段伤害',
    dmg: ({ talent, calc, attr, cons }, { basic }) => {
      let pct = talent[GsTalentType.e].get('剑舞步/旋舞步一段伤害2'][0] * 1 + talent[GsTalentType.e].get('剑舞步/旋舞步二段伤害2'][0] * 1
    let ret1 = basic(calc(attr.hp) * pct / 100, GsTalentType.e)
    if (cons >= 1) {
        attr.e.dmg += 65
      }
      let ret2 = basic(calc(attr.hp) * talent[GsTalentType.e].get('水月/水轮伤害2'][0] / 100, GsTalentType.e)
    return {
        dmg: ret1.dmg + ret2.dmg,
        avg: ret2.avg + ret2.avg
      }
    }
}, {
  title: 'Q两段总伤害',
    dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * (talent[GsTalentType.q].get('技能伤害']+ talent[GsTalentType.q].get('永世流沔伤害']) / 100, GsTalentType.q)
}, {
  title: 'Q两段总蒸发伤害',
    dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * (talent[GsTalentType.q].get('技能伤害']+ talent[GsTalentType.q].get('永世流沔伤害']) / 100, GsTalentType.q, '蒸发')
}, {
  title: '丰穰之核伤害',
    params: { bloom: true },
  dmg: ({ calc, attr }, { reaction }) => {
    return reaction('bloom')
  }
}]

mainAttr = 'hp,atk,cpct,cdmg,mastery'

buffs = [{
  title: '天赋-折旋落英之庭：元素精通提升100点',
  data: {
    mastery: ({ params }) => params.bloom ? 100 : 0
  }
}, {
  title: '天赋-翩舞永世之梦：丰穰之核增伤[bloom]%',
  sort: 9,
  data: {
    bloom: ({ attr }) => Math.min(400, attr.hp <= 30000 ? 0 : (attr.hp - 30000) / 1000 * 9)
  }
}, {
  title: '妮露1命：水月造成的伤害提升65%',
  cons: 1,
  data: {
    eDmg: ({ params }) => params.sy ? 65 : 0
  }
}, {
  title: '妮露2命：金杯的丰馈下降低敌人35%水抗与草抗',
  cons: 2,
  data: {
    kx: 35
  }
}, {
  title: '妮露4命：第三段舞步命中敌人Q伤害提高50%',
  cons: 4,
  data: {
    qDmg: 50
  }
}, {
  title: '妮露6命：提高暴击[cpct]%，爆伤[cdmg]%',
  cons: 6,
  sort: 9,
  data: {
    cpct: ({ attr }) => Math.min(30, attr.hp / 1000 * 0.6),
    cdmg: ({ attr }) => Math.min(60, attr.hp / 1000 * 1.2)
  }
}, DmgTypes.vaporize]

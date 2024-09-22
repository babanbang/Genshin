details = [{
  title: 'E后普通攻击',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('驰猎伤害2'][0], GsTalentType.a)
}, {
  title: 'E后穿透射击',
    params: { blPct: 0.5 },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('驰猎伤害2'][1], GsTalentType.a)
}, {
  title: 'E剑击伤害',
    params: { blPct: 0 },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('贯夜伤害2'][0], GsTalentType.a)
}, {
  title: 'E强化剑击伤害',
    params: { blPct: 0.5 },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('贯夜伤害2'][1], GsTalentType.a)
}, {
  title: 'E贯夜·契令伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('贯夜伤害2'][2], GsTalentType.a)
}, {
  title: 'Q单段伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害2'][0], GsTalentType.q)
}, {
  title: 'Q完整伤害',
    dmg: ({ talent }, { dmg }) => {
      let q1 = dmg(talent[GsTalentType.q].get('技能伤害2'][0], GsTalentType.q)
      return {
        dmg: q1.dmg * 5,
        avg: q1.avg * 5
      }
    }
}]

defParams = ({ weapon }) => weapon.name === '海渊终曲' ? { BondOfLife: 35 * 3 + 25, blPct: 1 } : { BondOfLife: 35 * 3, blPct: 1 }// 生命之契在此调整,请勿超过200,默认生命之契未计入队友治疗转化
defDmgIdx = 4
mainAttr = 'atk,cpct,cdmg,mastery,dmg'

buffs = [{
  title: '克洛琳德天赋：触发雷元素反应普通攻击与残光将终造成的伤害提升[aPlus]',
  data: {
    aPlus: ({ attr, cons }) => Math.min((attr.atk * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800)),
    qPlus: ({ attr, cons }) => Math.min((attr.atk * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800))
  }
}, {
  title: '克洛琳德天赋：生命之契的数值提升或降低时，暴击率提升[cpct]% ',
  data: {
    cpct: 10 * 2
  }
}, {
  title: '克洛琳德4命：[buffCount]%最大生命值的生命之契使残光将终造成的伤害提升[qDmg]',
  cons: 4,
  data: {
    buffCount: ({ talent, params, weapon }) => Math.min(params.blPct * (talent[GsTalentType.q].get('赋予生命之契'] + params.BondOfLife), 200),
qDmg: ({ talent, params, weapon }) => Math.min((params.blPct * (talent[GsTalentType.q].get('赋予生命之契']+ params.BondOfLife) * 2), 200)
  }
}, {
    title: '克洛琳德6命：施放狩夜之巡后暴击率提高[cpct]%,暴击伤害提高[cdmg]%',
    cons: 6,
    data: {
      cpct: 10,
      cdmg: 70
    }
  }]

  createdBy = 'liangshi'
details = [{
  title: '点赞攻击力提升',
  dmg: ({ attr, talent, cons }) => {
    let baseAtk = attr.atk.base
    let pct = talent[GsTalentType.q].get('攻击力加成比例']
if (cons >= 1) {
  pct += 20
}
return {
  avg: baseAtk * pct / 100
}
  }
}, {
  title: 'Q+点E总伤害',
    dmg: ({ attr, talent, cons }, { dmg }) => {
      let eDmg = dmg(talent[GsTalentType.e].get('点按伤害'], GsTalentType.e)
let qDmg = dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
return {
        avg: eDmg.avg + qDmg.avg,
        dmg: eDmg.dmg + qDmg.dmg
      }
    }
}, {
  title: '点赞每跳治疗',
    dmg: ({ attr, calc, talent }, { heal }) => heal(talent[GsTalentType.q].get('持续治疗2'][0] * calc(attr.hp) / 100 + talent[GsTalentType.q].get('持续治疗2'][1] * 1)
}]

defDmgIdx = 2
mainAttr = 'atk,hp,cpct,cdmg'

buffs = [{
  cons: 1,
  title: '班尼特1命：Q攻击力提升比例提高20%'
}, {
  cons: 6,
  title: '班尼特6命：获得15%火伤加成',
  data: {
    dmg: 15
  }
}]

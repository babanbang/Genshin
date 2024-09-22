details = [{
  title: 'E后重击伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('重击伤害'], [GsTalentType.a, 2])
}, {
  title: 'Q单段伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('连斩伤害2'][0], GsTalentType.q)
}, {
  title: 'Q总伤害',
    params: { q: 1 },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害']+ talent[GsTalentType.q].get('连斩伤害']+ talent[GsTalentType.q].get('最后一击伤害'], GsTalentType.q)
}, {
  title: 'Q总伤害·超激化',
    params: { q: 1 },
  dmg: ({ talent }, { dmg }) => {
    let t1j = dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q, '超激化')
    let t2j = dmg(talent[GsTalentType.q].get('连斩伤害']/ 8, GsTalentType.q, '超激化')
    let t2 = dmg(talent[GsTalentType.q].get('连斩伤害']/ 8, GsTalentType.q)
    let t3j = dmg(talent[GsTalentType.q].get('最后一击伤害'], GsTalentType.q, '超激化')
    return {
      dmg: t1j.dmg + t2j.dmg * 2 + t2.dmg * 6 + t3j.dmg,
      avg: t1j.avg + t2j.avg * 2 + t2.avg * 6 + t3j.avg
    }
  }
}]

defDmgIdx = 3
mainAttr = 'atk,cpct,cdmg,mastery'

buffs = [{
  title: '刻晴被动：释放Q获得15%暴击率',
  data: {
    qCpct: 15
  }
}, {
  title: '刻晴4命：触发雷元素相关反应提升攻击力25%',
  cons: 4,
  data: {
    atkPct: 25
  }
}, {
  title: '刻晴6命：4层获得24%雷伤加成',
  cons: 6,
  data: {
    dmg: 24
  }
}, 'aggravate']

let tmpDmg = false

details = [{
  title: '普攻尾段2次伤害',
  params: { e: false },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.a].get('五段伤害'], GsTalentType.a, 'phy')
}, {
  title: 'E0层长按伤害',
    params: { gj: false },
  dmg: ({ talent }, { dmg }) => {
    tmpDmg = dmg(talent[GsTalentType.e].get('长按伤害'], GsTalentType.e)
return tmpDmg
  }
}, {
  title: 'E2层长按伤害',
    params: { gj: true },
  dmg: ({ talent }, { dmg }) => {
    let e = tmpDmg
    let g = dmg(talent[GsTalentType.e].get('冰涡之剑伤害'], GsTalentType.e)
    let j = dmg(talent[GsTalentType.q].get('光降之剑基础伤害'], GsTalentType.e, 'phy')
    return {
      dmg: e.dmg * 1 + g.dmg * 2 + j.dmg * 0.5,
      avg: e.avg * 1 + g.avg * 2 + j.avg * 0.5
    }
  }
}, ({ cons, weapon }) => {
  let buffCount = 12
  if (weapon.name === '松籁响起之时') {
    buffCount = 13
    if (weapon.affix >= 4) {
      buffCount = 14
    }
  }
  if (cons === 6) {
    buffCount = buffCount + 11
  }
  return {
    title: `光降之剑${buffCount}层伤害`,
    params: { gj: true },
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('光降之剑基础伤害']+ talent[GsTalentType.q].get('每层能量伤害'] * buffCount, GsTalentType.q, 'phy')
  }
}]

defDmgIdx = 3
mainAttr = 'atk,cpct,cdmg'
enemyName = '魔偶/女士/雷神'

buffs = [{
  title: '优菈天赋：E消耗冰涡之剑后降低抗性[kx]%',
  check: ({ params }) => params.gj !== false,
  data: {
    kx: ({ talent }) => talent[GsTalentType.e].get('冰元素抗性降低']
  }
}, {
  title: '优菈一命：消耗冷酷之心后物理伤害提高30%',
    cons: 1,
      data: {
    phy: ({ params }) => params.gj ? 30 : 0
  }
}, {
  title: '优菈四命：对生命值低于50%的敌人，光降之剑造成的伤害提高25%',
    cons: 4,
      data: {
    qDmg: 25
  }
}, {
  title: '优菈6命：光降之剑额外获得5层Buff，普攻/E有50%概率额外获得1层',
    cons: 6
}]

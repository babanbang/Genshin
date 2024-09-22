details = [{
  title: 'Q状态·普攻首段',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('一段伤害'], GsTalentType.a)
}, {
  title: 'Q状态·E伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('冥祭伤害'], GsTalentType.e)
}, {
  title: 'Q状态·强化E伤害',
    params: { showEBuff: true, eBuff: true },
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('冥祭伤害'], GsTalentType.e)
}, {
  title: 'Q状态·QTE总伤害',
    params: { showEBuff: true },
  dmg: ({ attr, calc, talent }, { basic, dynamic }) => {
    const em = calc(attr.mastery)
    const atk = calc(attr.atk)
    const ePlustd = 1.00 * atk + em * 2.5
    let eDmg = dynamic(talent[GsTalentType.e].get('冥祭伤害'], GsTalentType.e, { dynamicDmg: 35 })
    let ePlusDmg = basic(ePlustd, GsTalentType.e)
    return {
      dmg: eDmg.dmg + ePlusDmg.dmg * 3,
      avg: eDmg.avg + ePlusDmg.avg * 3
    }
  }
}, {
  title: 'Q状态·QTE超激化总伤害',
    params: { showEBuff: true },
  dmg: ({ attr, calc, talent }, { basic, dynamic }) => {
    const em = calc(attr.mastery)
    const atk = calc(attr.atk)
    const ePlustd = 1.00 * atk + em * 2.5
    let eAggrDmg = dynamic(talent[GsTalentType.e].get('冥祭伤害'], GsTalentType.e, { dynamicDmg: 35 }, 'aggravate')
    let ePlusDmg = basic(ePlustd, GsTalentType.e)
    let ePlusAggrDmg = basic(ePlustd, GsTalentType.e, 'aggravate')
    return {
      dmg: eAggrDmg.dmg + ePlusAggrDmg.dmg + ePlusDmg.dmg * 2,
      avg: eAggrDmg.avg + ePlusAggrDmg.avg + ePlusDmg.avg * 2
    }
  }
}, {
  check: ({ cons }) => cons < 6,
    dmgKey: GsTalentType.q,
      title: 'Q状态·一轮普攻5A+QTE超激化总伤害',
        params: { showEBuff: true },
  dmg: ({ attr, calc, talent }, { dmg }) => {
    const em = calc(attr.mastery)
    const atk = calc(attr.atk)
    const ePlustd = 1.00 * atk + em * 2.5
    let eAggrDmg = dmg.dynamic(talent[GsTalentType.e].get('冥祭伤害'], GsTalentType.e, { dynamicDmg: 35 }, 'aggravate')
    let ePlusDmg = dmg.basic(ePlustd, GsTalentType.e)
    let ePlusAggrDmg = dmg.basic(ePlustd, GsTalentType.e, 'aggravate')
    let eAllDmg = {
      dmg: eAggrDmg.dmg + ePlusAggrDmg.dmg + ePlusDmg.dmg * 2,
      avg: eAggrDmg.avg + ePlusAggrDmg.avg + ePlusDmg.avg * 2
    }

    let a1Aggrdmg = dmg(talent[GsTalentType.q].get('一段伤害'], GsTalentType.a, 'aggravate')
    let a2dmg = dmg(talent[GsTalentType.q].get('二段伤害'], GsTalentType.a)
    let a3dmg = dmg(talent[GsTalentType.q].get('三段伤害'], GsTalentType.a)
    let a4Aggrdmg = dmg(talent[GsTalentType.q].get('四段伤害2'][0], GsTalentType.a, 'aggravate')
    let a4dmg = dmg(talent[GsTalentType.q].get('四段伤害2'][1], GsTalentType.a)
    let a5dmg = dmg(talent[GsTalentType.q].get('五段伤害'], GsTalentType.a)
    return {
      dmg: eAllDmg.dmg + a1Aggrdmg.dmg + a2dmg.dmg + a3dmg.dmg + a4Aggrdmg.dmg + a4dmg.dmg + a5dmg.dmg,
      avg: eAllDmg.avg + a1Aggrdmg.avg + a2dmg.avg + a3dmg.avg + a4Aggrdmg.avg + a4dmg.avg + a5dmg.avg
    }
  }
}, {
  check: ({ cons }) => cons >= 6,
    dmgKey: GsTalentType.q,
      title: 'Q状态·一轮普攻5A+QTE超激化总伤害（消耗4层豺祭）',
        params: { showEBuff: true },
  dmg: ({ attr, calc, talent }, { dmg }) => {
    const em = calc(attr.mastery)
    const atk = calc(attr.atk)
    const ePlustd = 1.00 * atk + em * 2.5
    let eAggrDmg = dmg.dynamic(talent[GsTalentType.e].get('冥祭伤害'], GsTalentType.e, { dynamicDmg: 35 }, 'aggravate')
    let ePlusDmg = dmg.basic(ePlustd, GsTalentType.e)
    let ePlusAggrDmg = dmg.basic(ePlustd, GsTalentType.e, 'aggravate')
    let eAllDmg = {
      dmg: eAggrDmg.dmg + ePlusAggrDmg.dmg + ePlusDmg.dmg * 2,
      avg: eAggrDmg.avg + ePlusAggrDmg.avg + ePlusDmg.avg * 2
    }

    let a1Aggrdmg = dmg(talent[GsTalentType.q].get('一段伤害'], GsTalentType.a, 'aggravate')
    let a2dmg = dmg(talent[GsTalentType.q].get('二段伤害'], GsTalentType.a)
    let a3dmg = dmg(talent[GsTalentType.q].get('三段伤害'], GsTalentType.a)
    let a4Aggrdmg = dmg(talent[GsTalentType.q].get('四段伤害2'][0], GsTalentType.a, 'aggravate')
    let a4dmg = dmg(talent[GsTalentType.q].get('四段伤害2'][1], GsTalentType.a)
    let a5dmg = dmg(talent[GsTalentType.q].get('五段伤害'], GsTalentType.a)
    return {
      dmg: eAllDmg.dmg + a1Aggrdmg.dmg + a2dmg.dmg + a3dmg.dmg + a4Aggrdmg.dmg + a4dmg.dmg + a5dmg.dmg + ePlusDmg.dmg * 3 + ePlusAggrDmg.dmg,
      avg: eAllDmg.avg + a1Aggrdmg.avg + a2dmg.avg + a3dmg.avg + a4Aggrdmg.avg + a4dmg.avg + a5dmg.avg + ePlusDmg.avg * 3 + ePlusAggrDmg.avg
    }
  }
}]

defDmgKey = GsTalentType.q
mainAttr = 'atk,cpct,cdmg,mastery'
defParams = { mArtisDiffCount: 2 }

buffs = [{
  title: '圣仪·煟煌随狼行：Q状态下提升元素精通100点',
  data: {
    mastery: 100
  }
}, {
  title: '赛诺2命：普攻后提高雷伤，满5层Buff增加50%雷元素伤害',
  cons: 2,
  data: {
    dmg: 50
  }
}, {
  check: ({ params }) => params.showEBuff === true,
  title: '天赋-落羽的裁择：末途真眼状态提升秘仪·律渊渡魂35%伤害，发射渡荒之雷造成100%攻击力伤害',
  data: {
    eDmg: ({ params }) => params.eBuff ? 35 : 0
  }
}, {
  title: '天赋-九弓的执命：基于元素精通提升普攻[aPlus]点伤害值，渡荒之雷提升[_ePlus]伤害值',
  sort: 9,
  data: {
    aPlus: ({ attr, calc }) => calc(attr.mastery) * 1.5,
    _ePlus: ({ attr, calc }) => calc(attr.mastery) * 2.5
  }
}, 'aggravate']

createdBy = 'Aluxes'

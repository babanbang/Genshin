details = [{
  check: ({ cons }) => cons < 2,
  dmgKey: GsTalentType.e,
  title: '叄阶杀生樱伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('杀生樱伤害·叁阶'], GsTalentType.e)
}, {
  check: ({ cons }) => cons >= 2,
    dmgKey: GsTalentType.e,
      title: '肆阶杀生樱伤害',
        dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('杀生樱伤害·肆阶'], GsTalentType.e)
}, {
  check: ({ cons }) => cons < 2,
    title: '叄阶杀生樱激化伤害',
      dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('杀生樱伤害·叁阶'], GsTalentType.e, 'aggravate')
}, {
  check: ({ cons }) => cons >= 2,
    title: '肆阶杀生樱激化伤害',
      dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('杀生樱伤害·肆阶'], GsTalentType.e, 'aggravate')
}, {
  title: '四段Q总伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害']+ talent[GsTalentType.q].get('天狐霆雷伤害'] * 3, GsTalentType.q)
}, {
  title: '四段Q总激化伤害',
    dmg: ({ talent }, { dmg }) => {
      let q1j = dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q, 'aggravate')
      let q2j = dmg(talent[GsTalentType.q].get('天狐霆雷伤害'], GsTalentType.q, 'aggravate')
      return {
        dmg: q1j.dmg + q2j.dmg * 3,
        avg: q1j.avg + q2j.avg * 3
      }
    }
}]

mainAttr = 'atk,cpct,cdmg,mastery,dmg'
defDmgKey = GsTalentType.e

buffs = [{
  title: '被动天赋：基于元素精通提高杀生樱伤害[eDmg]%',
  sort: 9,
  data: {
    eDmg: ({ attr, calc }) => calc(attr.mastery) * 0.15
  }
}, {
  check: ({ cons }) => cons >= 4,
  title: '4命效果：杀生樱命中敌人后提高雷伤[dmg]%',
  data: {
    dmg: 20
  }
}, {
  cons: 6,
  title: '6命效果：杀生樱无视敌人[eDef]%防御',
  data: {
    eDef: 60
  }
}, 'aggravate']

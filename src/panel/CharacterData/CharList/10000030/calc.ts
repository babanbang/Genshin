details = [{
  title: '玉璋护盾量',
  talent: GsTalentType.e,
  dmg: ({ attr, calc, talent }, { shield }) => shield(talent[GsTalentType.e].get('护盾基础吸收量'] + calc(attr.hp) * talent[GsTalentType.e].get('护盾附加吸收量']/ 100)
}, {
      title: '共鸣伤害',
      talent: GsTalentType.e,
      dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('岩脊伤害/共鸣伤害'][1], GsTalentType.e) // 6856
}, {
    title: '天星伤害',
    talent: GsTalentType.q,
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
  }]

    mainAttr = 'hp,atk,cpct,cdmg'

buffs = [{
      title: '钟离被动：满层Buff下护盾强效提高25%',
      data: {
        shield: 25
      }
    }, {
      title: '岩系护盾：岩系护盾吸收效率150%',
      data: {
        shieldInc: 50
      }
    }, {
      title: '钟离被动：基于生命值上限，共鸣伤害提高[ePlus]，天星伤害提高[qPlus]',
      sort: 9,
      data: {
        ePlus: ({ attr, calc }) => calc(attr.hp) * 0.019,
        qPlus: ({ attr, calc }) => calc(attr.hp) * 0.33
      }
    }, {
      title: '玉璋护盾：降低敌人全抗性20%',
      data: {
        kx: 20
      }
    }]

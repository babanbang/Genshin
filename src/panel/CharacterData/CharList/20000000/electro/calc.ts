import { Format } from '#MysTool/profile'
details = [{
  title: 'E伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'E提供元素充能加成',
    dmg: ({ attr }) => {
      return {
        avg: Format.percent(0.2 + attr.recharge * 0.1 / 100),
        type: 'text'
      }
    }
}, {
  title: 'Q释放伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('技能伤害'], GsTalentType.q)
}, {
  title: 'Q协同伤害',
    dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('威光落雷伤害'], GsTalentType.q)
}]

defDmgIdx = 1
mainAttr = 'atk,cpct,cdmg'

buffs = [{
  title: '天赋-回响的轰雷：基于自身元素充能效率的10%，提升E的勾玉提供的元素充能效率[_eRecharge]%',
  data: {
    _eRecharge: ({ attr }) => attr.recharge * 0.1
  }
}, {
  title: '雷主2命：Q的协同攻击会使敌人的雷元素抗性降低[kx]%',
  cons: 2,
  data: {
    kx: 15
  }
}]

createdBy = 'Aluxes'

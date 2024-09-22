details = [{
	title: 'E伤害',
	dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('基础伤害'], GsTalentType.e)
}, {
	title: '2层E伤害',
		dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('基础伤害']+ talent[GsTalentType.e].get('受击时伤害提升'] * 2, GsTalentType.e)
}, {
	title: 'Q每跳伤害',
		params: { q: true },
	dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.q].get('闪雷伤害'], GsTalentType.q)
}]

mainAttr = 'atk,cpct,cdmg'

buffs = [{
	title: '北斗6命：Q持续期间，周围敌人的雷元素抗性降低15%',
	cons: 6,
	data: {
		kx: ({ params }) => params.q ? 15 : 0
	}
}]

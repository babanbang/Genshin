export const enum AttrKeys {
	/** 攻击力 */
	atk = 'atk',
	/** 防御力 */
	def = 'def',
	/** 生命值 */
	hp = 'hp',
	/** 暴击率 */
	cpct = 'cpct',
	/** 暴击伤害 */
	cdmg = 'cdmg',
	/** 元素精通 */
	mastery = 'mastery',
	/** 充能效率 */
	recharge = 'recharge',
	/** 伤害加成 */
	dmg = 'dmg',
	/** 物理伤害 */
	phy = 'phy',
	/** 治疗加成 */
	heal = 'heal',
	/** 护盾强效 */
	shield = 'shield'
}

export type AttrDetailKeys = '1' | '20' | '40' | '50' | '60' | '70' | '80' | '90' | '20+' | '40+' | '50+' | '60+' | '70+' | '80+'
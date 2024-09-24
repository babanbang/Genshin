import { AttrKeys, CharCalcRuleType, DmgTypes } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 甘雨 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: '霜华绽发伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["霜华矢·霜华绽发伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '霜华矢两段总伤害',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["霜华矢·霜华绽发伤害"][a.level] + metaData.talentData.a["霜华矢命中伤害"][a.level], [GsTalentType.a, 2])
	}, {
		title: '霜华矢两段+融化',
		dmg: ({ talent: { a } }, { dmg }) => dmg(metaData.talentData.a["霜华矢·霜华绽发伤害"][a.level] + metaData.talentData.a["霜华矢命中伤害"][a.level], [GsTalentType.a, 2], DmgTypes.melt)
	}, {
		title: 'Q单个冰凌伤害',
		params: { q: true },
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["冰棱伤害"][q.level], GsTalentType.q)
	}],
	buffs: [{
		title: '甘雨被动：霜华矢发射后的5秒内霜华矢暴击率提高20%',
		data: {
			a2Cpct: 20
		}
	}, {
		title: '甘雨1命：霜华失命中减少敌人15%冰抗',
		check: ({ cons }) => cons >= 1,
		data: {
			kx: ({ params }) => params.q ? 0 : 15
		}
	}, {
		title: '甘雨4命：大招领域内敌人受到的伤害提升25%',
		check: ({ cons }) => cons >= 4,
		data: {
			dmg: ({ params }) => params.q ? 25 : 0
		}
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.mastery],
	defDmgIdx: 2
}
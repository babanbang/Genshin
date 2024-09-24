import { AttrKeys, CharCalcRuleType } from "@/types"
import { GsTalentType } from "karin-plugin-mystool"
import { metaData } from "./meta"

/** 夏洛蒂 */
export const CharCalcRule: CharCalcRuleType = {
	details: [{
		title: 'E点按拍照伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["点按拍照伤害"][e.level], GsTalentType.e)
	}, {
		title: 'E长按拍照伤害',
		dmg: ({ talent: { e } }, { dmg }) => dmg(metaData.talentData.e["长按拍照伤害"][e.level], GsTalentType.e)
	}, {
		title: 'Q释放伤害',
		dmg: ({ talent: { q } }, { dmg }) => dmg(metaData.talentData.q["技能伤害"][q.level], GsTalentType.q)
	}, {
		title: 'Q释放治疗量',
		dmg: ({ talent: { q }, attr, calc }, { heal }) => heal(metaData.talentData.q["施放治疗量2"][q.level][0] / 100 * calc(attr.atk) + metaData.talentData.q["施放治疗量2"][q.level][1])
	}, {
		title: 'Q持续治疗量',
		dmg: ({ talent: { q }, attr, calc }, { heal }) => heal(metaData.talentData.q["相机持续治疗量2"][q.level][0] / 100 * calc(attr.atk) + metaData.talentData.q["相机持续治疗量2"][q.level][1])
	}, {
		title: '六命额外治疗量',
		check: ({ cons }) => cons >= 6,
		dmg: ({ attr, calc }, { heal }) => heal(0.42 * calc(attr.atk))
	}],
	buffs: [{
		title: '天赋-多样性调查：按队伍存在2位枫丹角色，2位非枫丹角色计算，自身获得[heal]%治疗加成，[dmg]%冰元素伤害加成',
		data: {
			heal: 5,
			dmg: 10
		}
	}, {
		title: '夏洛蒂2命：E攻击命中3名及以上敌人时，自身攻击力提升[atk]%',
		check: ({ cons }) => cons >= 2,
		data: {
			atk: 30
		}
	}, {
		title: '夏洛蒂4命：Q命中带有E印记的敌人时，Q造成的伤害提升[dmg]%',
		check: ({ cons }) => cons >= 4,
		data: {
			qDmg: 10
		}
	}, {
		title: '夏洛蒂6命：场上角色普攻或重击命中E标记敌人时，产生相当于夏洛蒂42%攻击的额外治疗',
		check: ({ cons }) => cons === 6
	}],
	mainAttr: [AttrKeys.atk, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.heal],
	defDmgIdx: 3,
	createdBy: 'Aluxes'
}
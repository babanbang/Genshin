import { Data, GamePathType, GsElement, karinPath } from "karin-plugin-mystool"
import { CharCalcRuleType } from "@/types"
import { Format } from "../Format"

const CalcRules = new Map<number, CharCalcRuleType>()
const TravelerCalcRules = new Map<GsElement, CharCalcRuleType>()

const UserRulePath = Data.getFilePath('CalcRules', GamePathType.gs, karinPath.data)
const DefaultRulePath = Data.getFilePath('lib/panel/CharacterData/CharList', GamePathType.gs, karinPath.node)
export const CharCalcRule = {
	/** 加载所有伤害计算配置 */
	async initCalcRule() {
		const charIds = Data.readDir(DefaultRulePath, GamePathType.gs, karinPath.fullPath).map(Number)

		const importCalcRule = async (id: number, elem: GsElement = GsElement.anemo) => {
			const path = id === 20000000 ? `${id}/${elem}` : id
			if (Data.exists(`${UserRulePath}/${path}/calc.js`, GamePathType.gs, karinPath.fullPath)) {
				// 用户自定义配置
				await Data.importModule(`${UserRulePath}/${path}/calc.js`, GamePathType.gs, karinPath.fullPath)
			}
			// 默认配置
			const rule = (await Data.importModule(`${DefaultRulePath}/${path}/calc.js`, GamePathType.gs, karinPath.fullPath, { module: 'CharCalcRule' })).module
			if (id === 20000000) {
				TravelerCalcRules.set(elem, rule)
			} else {
				CalcRules.set(id, rule)
			}
		}
		await Promise.all(charIds.map(async charId => {
			if (charId === 20000000) {
				const elems = Data.readDir(`${DefaultRulePath}/${charId}`, GamePathType.gs, karinPath.fullPath)
				await Promise.all(elems.map(async elem => await importCalcRule(charId, Format.elem(elem))))
			} else {
				await importCalcRule(charId)
			}
			return true
		}))
	},
	getCalcRule(id: number, elem: GsElement) {
		let rule = id === 20000000 ? TravelerCalcRules.get(elem) : CalcRules.get(id)
		if (!rule) rule = { details: [], defDmgIdx: 0, mainAttr: [], buffs: [] }
		return rule
	}
}
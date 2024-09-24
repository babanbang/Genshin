import { GsTalentType } from "karin-plugin-mystool"
import { AttrKeys, DmgTypes } from ".."

export interface CalcRuleDetailFuncRet { dmg: number, avg: number, unit?: string }

type talentParams = {
	[key in GsTalentType]: {
		level: number
	}
}

type calcFunc = (ds: { base: number, plus: number, pct: number, inc: number }) => number

type attrParams = {
	[key in AttrKeys | GsTalentType]: {
		base: number, plus: number, pct: number, inc: number, dmg: number
	}
}

export interface CalcRuleDetailDmgParams {
	ds: { talent: talentParams, calc: calcFunc, attr: attrParams, weapon: { id: number, affix: number }, cons: number },
	Func: {
		heal: (ds: number) => CalcRuleDetailFuncRet
		shield: (ds: number) => CalcRuleDetailFuncRet
		reaction: (type: DmgTypes) => CalcRuleDetailFuncRet
		dmg: (ds: number, talent: GsTalentType | [GsTalentType, number], type?: DmgTypes) => CalcRuleDetailFuncRet
		basic: (ds: number, talent?: GsTalentType | [GsTalentType, number], type?: DmgTypes) => CalcRuleDetailFuncRet
		dynamic: (ds: number, talent: GsTalentType | [GsTalentType, number], ds2: { dynamicPhy?: number, dynamicCpct?: number, dynamicDmg?: number }, type?: DmgTypes) => CalcRuleDetailFuncRet
	}
}

interface CalcRuleDetail {
	title: string
	/** 满足条件才计算 */
	check?: (ds: { cons: number, calc: calcFunc, attr: attrParams }) => boolean
	params?: { [key: string]: number | boolean }
	dmg: (ds: CalcRuleDetailDmgParams['ds'], Func: CalcRuleDetailDmgParams['Func']) => CalcRuleDetailFuncRet
}

interface CalcRuleBuff {
	title: string
	sort?: number
	check?: (ds: { params: { [key: string]: boolean | number }, cons: number }) => boolean
	passive?: number
	isStatic?: boolean
	data?: {
		[key: string]: number | ((ds: CalcRuleDetailDmgParams['ds'] & {
			params: {
				[key: string]: number | boolean
			}
		}) => number | false[] | number[] | (number | undefined)[][])
	}
}

export interface CharCalcRuleType {
	details: (CalcRuleDetail | ((ds: { cons: number, weapon: { id: number, affix: number } }) => CalcRuleDetail))[]
	buffs: (CalcRuleBuff | ((ds: { cons: number }) => CalcRuleBuff))[]
	defParams?: (ds: { weapon: { id: number, affix: number } }) => { [key: string]: number | boolean }
	mainAttr: AttrKeys[]
	defDmgIdx: number
	createdBy?: string
}
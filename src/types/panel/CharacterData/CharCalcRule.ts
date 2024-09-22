import { GsTalentType } from "karin-plugin-mystool"
import { CharDetailInfo, AttrKeys } from ".."
import { DmgTypes } from "../AttrModel/Dmg"

export interface CharCalcRuleType {
	details: {
		check?: (ds: { cons: number }) => boolean
		cons?: number
		title: string
		params?: { [key: string]: number | boolean }
		dmg: (
			ds: {
				talent: CharDetailInfo['talentData']
				calc: (ds: {
					base: number, plus: number, pct: number, inc: number
				}) => number
				attr: {
					[key in AttrKeys]: {
						base: number, plus: number, pct: number, inc: number
					}
				}
			},
			Func: {
				dmg: (
					talentData: false[] | number[] | (number | undefined)[][],
					talent: GsTalentType | [GsTalentType, number],
					type?: DmgTypes
				) => { dmg: number, avg: number },
				heal: (ds: number) => { dmg: number, avg: number },
				reaction: (type: DmgTypes) => { dmg: number, avg: number }
			}
		) => { dmg: number, avg: number }
	}[]
	defDmgIdx: number
	mainAttr: AttrKeys[]
	defParams?: () => { [key: string]: number }
	buffs: {
		check?: (ds: { params: { [key: string]: boolean } }) => boolean
		passive?: number
		cons?: number
		title: string
		isStatic?: boolean
		data: {
			[key: string]: number | ((ds: {
				params: { [key: string]: number | boolean }
			}) => number)
		}
	}[]
	createdBy?: string
}
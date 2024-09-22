import { CharBaseInfo, GameList, GsElement, GsTalentType } from "karin-plugin-mystool";
import { AttrKeys, AttrDetailKeys } from "./AttrModel/Attr";
import { MaterialType } from ".";

export interface CharDetailInfo {
	info: {
		title: string
		allegiance: string
		birth: string
		astro: string
		desc: string
		cncv: string
		jpcv: string
		ver: number
	}
	costumes: number[]
	/** 基础属性 */
	baseAttr: {
		[key in AttrKeys]?: number
	}
	/** 突破成长属性 */
	growAttr: {
		key: string
		value: number
	}
	materials: {
		[MaterialType.gem]: string
		[MaterialType.boss]?: string
		[MaterialType.normal]: string
		[MaterialType.specialty]: string
		[MaterialType.talent]: string
		[MaterialType.weekly]: string
	}
	talent: {
		[key in GsTalentType]: {
			id: number
			name: string
			desc: string[]
			tables: {
				name: string
				unit?: string
				isSame: boolean
				values: string[]
			}[]
		}
	}
	/** 主角可根据技能确定元素 */
	talentElem?: Map<number, GsElement>
	talentData: {
		[key in GsTalentType]: Map<string, false[] | number[] | (number | undefined)[][]>
	}
	cons: Map<number, {
		name: string
		desc: string[]
	}>
	/** 固有天赋 */
	passive: {
		name: string
		desc: string[]
	}[]
	attr: {
		keys: string[]
		details: Map<AttrDetailKeys, number[]>
	}
}
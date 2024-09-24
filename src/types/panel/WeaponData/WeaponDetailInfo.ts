import { MaterialType, AttrDetailKeys } from "..";

export interface WeaponDetailInfo {
	desc: string
	attr: {
		atk: Map<AttrDetailKeys, number>
		bonusKey?: string
		bonusData: Map<AttrDetailKeys, number>
	}
	materials: {
		[MaterialType.weapon]: string
		[MaterialType.monster]: string
		[MaterialType.normal]: string
	}
	affixData: {
		title: string
		desc: string
		datas: {
			[key: string]: string[]
		}
	}
}
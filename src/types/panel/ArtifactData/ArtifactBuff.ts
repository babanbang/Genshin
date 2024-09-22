import { AttrKeys } from "@/types";
import { GsElement, GsTalentType, GsWeaponType } from "karin-plugin-mystool";

export interface ArtifactBuffData {
	title: string;
	check?: ((ds: {
		cons: number
		elem: GsElement
		talent: {
			[key in GsTalentType]: { [key: string]: number }
		}
		weaponType: GsWeaponType
		currentTalent: GsTalentType
	}) => boolean)
	isStatic?: boolean
	elem?: GsElement
	sort?: number
	data: {
		[key: string]: undefined | number | ((ds: {
			attr: {
				[key in AttrKeys]: {
					base: number, plus: number, pct: number, inc: number
				}
			}
			params: {
				monv?: number
				mArtisDiffCount?: number
			}
		}) => number)
	}
}

export type ArtifactBuffDataMap = Map<2 | 4, ArtifactBuffData>
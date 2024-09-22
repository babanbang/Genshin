import { BaseMysResData } from "karin-plugin-mystool"
export interface ReqCharList extends BaseMysResData {
	data: {
		list: {
			id: number
			level: number
			element: string
			fetter: number
			actived_constellation_num: number
			weapon: {
				id: number
				level: number
				/** 精炼等级 */
				affix_level: number
			}
		}[]
	}
}

export interface ReqBaseAvatarInfo {
	id: number
	level: number
	fetter: number
	element: string
	/** 命座 */
	actived_constellation_num: number
}

export interface ReqWeaponInfo {
	id: number
	level: number
	/** 精炼等级 */
	affix_level: number
}

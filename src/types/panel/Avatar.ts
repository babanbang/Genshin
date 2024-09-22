import { GsElement, GsTalentType } from "karin-plugin-mystool"
import { ArtifactMapKey } from "./ArtifactData"

export interface AvatarBaseData {
	level: number
	fetter: number
	/** 突破等级 */
	promote: number
	/** 皮肤 */
	costumes?: number[]
	/** 命座 */
	cons: number
}

export type AvatarTalent = { [key in GsTalentType]: number }

export type AvatarWeapon = {
	id: number
	level: number
	/** 突破等级 */
	promote: number
	/** 精炼等级 */
	affix: number
}

export type AvatarArtifactBase = {
	id: number
	level: number
	/** 主词条 */
	mainId: number
	/** 副词条 */
	attrIds: number[]
}

export type AvatarArtifactMap = Map<ArtifactMapKey, AvatarArtifactBase>

export interface AvatarSaveData extends AvatarBaseData {
	/** 天赋等级 */
	talent?: AvatarTalent
	/** 武器详情 */
	weapon?: AvatarWeapon
	/** 圣遗物详情 */
	artis?: AvatarArtifactMap
	/** 数据来源 */
	source?: string
}

export interface AvatarData extends AvatarBaseData {
	id: number
	elem: GsElement
	/** 天赋等级 */
	talent: AvatarTalent
	/** 武器详情 */
	weapon: AvatarWeapon
	/** 圣遗物详情 */
	artis: {
		[key in ArtifactMapKey]?: AvatarArtifactBase
	}
	/** 数据来源 */
	source: string
	/** 更新时间 */
	update: number
}
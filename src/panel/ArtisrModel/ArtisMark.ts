import { Avatar } from "../Avatar"
import { ArtisMarkCfg } from "./ArtisMarkCfg"

export const ArtisMark = {
	getMarkDetail(avatar: Avatar, withDetail = true) {
		if (!avatar.isProfile) return {}

		const charCfg = ArtisMarkCfg.getCfg(profile)
	},

}
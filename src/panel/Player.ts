import { BasePlayer, GameList, Data, GamePathType, karinPath, GsElement } from "karin-plugin-mystool";
import { Character } from "./Character";
import { Avatar } from "./Avatar";
import { lodash } from "node-karin/modules.js";
import { AvatarData } from "@/types";

export class Player extends BasePlayer<GameList.Gs> {
	Avatars: Map<number, AvatarData | Avatar> = new Map()
	constructor(uid: string) {
		super(uid, GameList.Gs)
	}

	static Create(uid: string) {
		const player = new Player(uid)
		const cache = player._getCache<Player>(`player:${GameList.Gs}:${uid}`)
		if (cache) return cache

		player.reload()
		return player._cache<Player>(100)
	}

	/** 加载面板数据文件 */
	reload() {
		const data = Data.readJSON(this.PlayerDataPath, GamePathType[this.game], karinPath.data, {})
		this.setBasicData(data)
		lodash.forEach(data.avatars, (avatar: AvatarData) => {
			if (!avatar.id) return true
			this.Avatars.set(avatar.id, avatar)
		})
	}

	Save() {
		const avatars: Record<number, AvatarData> = {}
		this.forEachAvatar(
			(avatar: Avatar) => {
				avatars[avatar.id] = avatar.toJSON()
			}
		)
		this.save({
			...this.getData(BasePlayer.BasicKeys),
			avatars
		})
	}

	/** 获取角色数据 */
	getAvatar(ds: { id: number, elem?: GsElement }, create: boolean = false) {
		const char = Character.Create(ds)
		if (!char) return false

		if (char.isTraveler && !create) {
			ds.id = this.Avatars.has(10000005) ? 10000005 : 10000007
		}

		let avatar: Avatar | undefined = undefined
		if (!this.Avatars.has(ds.id)) {
			if (!create) return false
			avatar = new Avatar(ds)
		} else {
			const a = this.Avatars.get(ds.id)!
			if (a instanceof Avatar) {
				return a
			} else {
				avatar = Avatar.Create(ds, a)
			}
		}

		if (!avatar?.id) return false
		this.Avatars.set(avatar.id, avatar)

		return avatar
	}

	/** 循环Avatar */
	async forEachAvatar(fn: Function) {
		for (const [id, v] of this.Avatars) {
			const avatar = this.getAvatar({ id, elem: v.elem })
			if (avatar && avatar.hasData) {
				let ret = fn(avatar, id)
				ret = Data.isPromise(ret) ? await ret : ret
				if (ret === false) {
					return false
				}
			}
		}
	}
}
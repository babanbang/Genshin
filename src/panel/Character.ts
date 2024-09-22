import { AvatarData, CharDetailInfo } from "@/types";
import { BaseCharacter, CharBaseInfo, Data, GameList, GamePathType, GsElement, GsTalentType, karinPath } from "karin-plugin-mystool";
import { lodash } from "node-karin/modules.js";
import { Avatar } from "./Avatar";
import { CharCalcRule, CharMap } from "./CharacterData";

export class Character extends BaseCharacter<GameList.Gs> {
	/** 图片缓存 */
	#images: Record<string, any> = {}
	#detailInfo!: CharDetailInfo
	constructor(Info: CharBaseInfo<GameList.Gs>) {
		super(GameList.Gs, Info)
	}

	get weaponType() {
		return this.weapon
	}

	get isTraveler() {
		return [10000007, 10000005, 20000000].some(id => this.id === id)
	}

	get detail() {
		if (this.#detailInfo) {
			return this.#detailInfo
		}

		const id = this.isTraveler ? `${this.id}/${this.elem}` : this.id
		this.#detailInfo = Data.readJSON(`resources/metaData/characters/${id}/data.json`, GamePathType[this.game], karinPath.node, {})

		return this.#detailInfo
	}

	static Create(ds: { id?: number, name?: string, elem?: GsElement }) {
		if (!ds.id && !ds.name) return false

		const data = ds.id ? CharMap.getById(ds.id) : CharMap.getByName(ds.name!)
		if (!data) return false

		const char = new Character(data)
		const cache = char._getCache<Character>(`weapon:${GameList.Gs}:${char.id}:${char.elem}`)
		if (cache) return cache

		return char._cache<Character>(100)
	}

	/** 检查时装 */
	checkCostume(id?: number) {
		if (!id || !this.detail?.costumes) return 0
		return this.detail.costumes.some(costume => costume === id) ? id : 0
	}

	calcAvatarTalent(ds: AvatarData['talent'], cons: number, mode: 'original' | 'level') {
		const ret = {} as Avatar['talent']
		this.talentCons.forEach(([Cons, add], key) => {
			const lv = ds[key]
			if (lv > 10) mode = 'level'

			ret[key] = {
				name: this.detail.talent[key].name,
				max: 10, level: 0, original: 0
			}

			const _mode = mode === 'level' ? 'original' : 'level'
			ret[key][mode] = ret[key][_mode] = lv
			if (cons >= Cons) {
				ret[key].max += add
				ret[key][_mode] += add * (mode === 'level' ? -1 : 1)
			}

		})
		if (lodash.isEmpty(ret)) return false

		return ret
	}

	getImages(costumes: number[] = []): {
		face: string
		side: string
		gacha: string
		splash: string
		[key: string]: string
	} {
		const costume = this.checkCostume(lodash.sample(costumes))
		const cacheId = `costume-${costume}`
		if (!this.#images[cacheId]) {
			this.#images[cacheId] = {}
			const basePath = `metaData/characters/${this.id}${this.isTraveler ? `/${this.elem}` : ''}/`
			const add = (key: string, path: string, path2?: string) => {
				if (path2 && Data.exists(`resources/${basePath}/${path2}.webp`, GamePathType.gs, karinPath.node)) {
					this.#images[cacheId][key] = `${basePath}/${path2}.webp`
				} else {
					this.#images[cacheId][key] = `${basePath}/${path}.png`
				}
			}
			const tAdd = (key: string, path: string) => {
				this.#images[cacheId][key] = `${basePath}/${path}.webp`
			}

			add('splash', 'images/splash', `images/splash-${costume}`)
			add('face', 'images/face', `images/face-${costume}`)
			add('side', 'images/side', `images/side-${costume}`)
			add('gacha', 'images/gacha')

			for (let i = 1; i <= 6; i++) {
				tAdd(`cons${i}`, `icons/cons-${i}`)
			}

			for (let i = 0; i <= 3; i++) {
				tAdd(`passive${i}`, `icons/passive-${i}`)
			}

			this.#images[cacheId][GsTalentType.a] = `metaData/common/icons/atk-${this.weaponType}.webp`
			for (const t of [GsTalentType.e, GsTalentType.q]) {
				const [Cons, add] = this.talentCons.get(t) || [0, 0]
				this.#images[cacheId][t] = Cons > 0 ? this.#images[cacheId][`cons${Cons}`] : `${basePath}/icons/talent-${t}.webp`
			}
		}

		return this.#images[cacheId]
	}

	/** 获取伤害计算配置 */
	getCalcRule() {
		return CharCalcRule.getCalcRule(this.id, this.elem)
	}
}
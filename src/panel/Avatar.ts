import { AvatarData, AvatarSaveData } from "@/types";
import { BasePanel, CharBaseInfo, Data, GameList, GsElement, GsTalentType, WeaponBaseInfo } from "karin-plugin-mystool";
import lodash from 'node-karin/lodash';
import { Character, Weapon } from ".";
import { Artis, ArtisMark } from "./ArtisrModel";
import { Attr } from "./AttrModel";

export class Avatar extends BasePanel<GameList.Gs> {
	declare id: AvatarData['id']
	declare name: string
	declare elem: AvatarData['elem']
	declare char: Character
	declare Artis: Artis
	declare Attr: Attr

	cons: AvatarData['cons'] = 0
	level: AvatarData['level'] = 1
	fetter: AvatarData['fetter'] = 0
	costumes: AvatarData['costumes'] = []
	declare promote: AvatarData['promote']
	declare talent: {
		[key in GsTalentType]: {
			name: string
			max: number
			level: number
			original: number
		}
	}
	declare weapon: AvatarData['weapon'] & WeaponBaseInfo<GameList.Gs>
	source: AvatarData['source'] = ''
	declare update: AvatarData['update']

	_now?: number
	constructor(ds: { id?: number, name?: string, elem?: GsElement }) {
		super(GameList.Gs)
		const char = Character.Create(ds)
		if (!char) return

		this.id = char.id
		this.name = char.name
		this.elem = char.elem
		this.char = char
		this.Artis = new Artis()
	}

	/** 面板属性 */
	get attr() {
		return this.Attr.getAttr()
	}
	/** 面板基础属性 */
	get attrBase() {
		return this.Attr.getBase()
	}

	get isProfile() {
		if (!this.source) {
			return false
		}

		if (this.char.isTraveler) {
			return !!this.elem
		}

		return true
	}

	get hasData() {
		return !!(this.level > 1 || this.weapon?.name)
	}

	get weaponType(): CharBaseInfo<GameList.Gs>['weapon'] {
		return this.char.weapon
	}

	get originalTalent() {
		return lodash.mapValues(this.talent, (ds) => ds.original)
	}

	/** 圣遗物 */
	getArtifacts() {
		return this.Artis.getArtis()
	}

	static calcPromote(lv: AvatarData['level']) {
		if (lv === 20) return 1
		if (lv === 90) return 6

		const lvs = [1, 20, 40, 50, 60, 70, 80, 90]
		let promote = 0
		for (let idx = 0; idx < lvs.length - 1; idx++) {
			if (lv >= lvs[idx] && lv <= lvs[idx + 1]) {
				return promote
			}
			promote++
		}
		return promote
	}

	static Create(ds: { id?: number, name?: string, elem?: GsElement }, data: AvatarSaveData) {
		const avatar = new Avatar(ds)

		avatar.setAvatar(data)
		return avatar
	}

	getDetail<T extends string>(keys: T[] = []) {
		return {
			...this.getData(keys),
			rarity: this.char.rarity,
			weaponType: this.char.weaponType,
			images: this.char.getImages(this.costumes),
			artisDetail: this.getArtisMark(false)
		}
	}

	setAvatar(ds: AvatarSaveData, source?: string) {
		this.setBasic(ds, source)
		if (!lodash.isEmpty(ds.weapon)) this.setWeapon(ds.weapon)
		if (ds.artis?.size) {
			this.Artis.setArtisData(ds.artis, source || ds.source)
		}
		if (this.isProfile) {
			this.Attr = new Attr(this)
		}
	}

	setBasic(ds: AvatarSaveData, source?: string) {
		const now = this._now || new Date().getTime()
		this.cons = ds.cons || this.cons
		this.level = ds.level || this.level
		this.fetter = ds.fetter || this.fetter
		this.costumes = ds.costumes || this.costumes
		this.promote = ds.promote || this.promote
		this.source = source || this.source
		this.update = this.update || now

		// 存在数据源时更新时间
		if (source) {
			this.update = now
			this.source = source !== 'mys' ? source : this.source
		}
	}

	setTalent(ds: AvatarData['talent'], mode: 'original' | 'level') {
		const ret = this.char.calcAvatarTalent(ds, this.cons, mode)
		if (ret) this.talent = ret
	}

	setWeapon(ds: AvatarData['weapon']) {
		const weapon = Weapon.Create(ds)
		if (!weapon) return false

		this.weapon = {
			...weapon.getData(['id', 'name', 'type', 'rarity']),
			affix: ds.affix,
			level: ds.level || 1,
			promote: ds.promote
		}
	}

	getArtisMark(withDetail = true) {
		return ArtisMark.getMarkDetail(this, withDetail)
	}

	toJSON(): AvatarData {
		return {
			...this.getData(['id', 'elem', 'level', 'cons', 'promote', 'fetter', 'costume']),
			talent: this.originalTalent,
			weapon: Data.getData(this.weapon, ['id', 'level', 'affix', 'promote']),
			artis: {},
			...this.getData(['source', 'update'])
		}
	}
}
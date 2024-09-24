import { BaseWeapon, GameList, WeaponBaseInfo, Data, GamePathType, karinPath } from "karin-plugin-mystool";
import { AvatarWeapon, WeaponDetailInfo, AttrDetailKeys } from '@/types'
import { WeaponMap, getWeaponMetaData } from "./WeaponData";

export class Weapon extends BaseWeapon<GameList.Gs>{
	#detailInfo!: WeaponDetailInfo
	constructor(Info: WeaponBaseInfo<GameList.Gs>) {
		super(GameList.Gs, Info)
	}

	get detail() {
		if (this.#detailInfo) {
			return this.#detailInfo
		}

		this.#detailInfo = getWeaponMetaData(this.id)!
		return this.#detailInfo
	}

	static Create(ds: { id?: number, name?: string }) {
		if (!ds.id && !ds.name) return false

		const data = ds.id ? WeaponMap.getById(ds.id) : WeaponMap.getByName(ds.name!)
		if (!data) return false

		const weapon = new Weapon(data)
		const cache = weapon._getCache<Weapon>(`weapon:${GameList.Gs}:${weapon.id}-${weapon.name}`)
		if (cache) return cache

		return weapon._cache<Weapon>(100)
	}

	/** 计算武器主属性 */
	calcAttr(level: AvatarWeapon['level'], promote: AvatarWeapon['promote']) {
		let currPromote = 0
		const lv = { left: 0, right: 0 }
		const lvStep = [1, 20, 40, 50, 60, 70, 80, 90]
		for (let idx = 0; idx < lvStep.length - 1; idx++) {
			if (currPromote === promote) {
				if (level >= lvStep[idx] && level <= lvStep[idx + 1]) {
					lv.left = lvStep[idx]
					lv.right = lvStep[idx + 1]
					break
				}
			}
			currPromote++
		}

		const lvLeft = String(lv.left) as AttrDetailKeys
		const lvRight = String(lv.right) as AttrDetailKeys
		const { atk, bonusData, bonusKey } = this.detail.attr

		const valueLeft = atk.get(lv.left + '+' as AttrDetailKeys) || atk.get(lvLeft)!
		const bonusLeft = bonusData.get(lv.left + '+' as AttrDetailKeys) || bonusData.get(lvLeft)!

		const stepCount = Math.ceil((lv.right - lv.left) / 5)
		const valueStep = (bonusData.get(lvRight)! - bonusLeft) / stepCount

		return {
			atkBase: valueLeft + ((atk.get(lvRight)! - valueLeft) * (level - lv.left) / (lv.right - lv.left)),
			attr: {
				key: bonusKey,
				value: bonusLeft + (stepCount - Math.ceil((lv.right - level) / 5)) * valueStep
			}
		}
	}
}
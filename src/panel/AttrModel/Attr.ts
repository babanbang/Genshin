import { AttrKeys, AttrDetailKeys } from "@/types";
import { BasePanel, GameList } from "karin-plugin-mystool";
import { lodash } from "node-karin/modules.js";
import { Avatar, Weapon, getWeaponBuff } from "..";
import { AttrData } from "./AttrData";

export class Attr extends BasePanel<GameList.Gs>{
	avatar: Avatar
	declare AttrData: AttrData
	constructor(avatar: Avatar) {
		super(GameList.Gs)
		this.avatar = avatar
		this.calcAttr()
	}

	getAttr() {
		return this.AttrData.getAttr()
	}

	getBase() {
		return this.AttrData.getBase()
	}

	/** 面板属性计算 */
	calcAttr() {
		this.AttrData = new AttrData(this.avatar.char)
		this.addAttr(AttrKeys.recharge, 100, true)
		this.addAttr(AttrKeys.cpct, 5, true)
		this.addAttr(AttrKeys.cdmg, 50, true)

		this.calcCharAttr()
		this.calcWeaponAttr()
		this.calcArtisAttr()
	}

	addAttr(key: string, val: number, isBase: boolean = false) {
		this.AttrData.addAttr(key, val, isBase)
	}

	/** 计算角色属性 */
	calcCharAttr() {
		const { char, level, promote, cons } = this.avatar
		const { keys, details } = char.detail.attr

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

		const detailLeft = details.get((lv.left + '+') as AttrDetailKeys) || details.get(String(lv.left) as AttrDetailKeys)!
		const detailRight = details.get(String(lv.right) as AttrDetailKeys)!

		const getLvData = (idx: number, step: boolean = false) => {
			const valueLeft = detailLeft[idx]
			const valueRight = detailRight[idx]
			if (!step) {
				return valueLeft * 1 + ((valueRight - valueLeft) * (level - lv.left) / (lv.right - lv.left))
			} else {
				return valueLeft * 1 + ((valueRight - valueLeft) * Math.floor((level - lv.left) / 5) / Math.round(((lv.right - lv.left) / 5)))
			}
		}

		this.addAttr(AttrKeys.hp + 'Base', getLvData(0), true)
		this.addAttr(AttrKeys.atk + 'Base', getLvData(1), true)
		this.addAttr(AttrKeys.def + 'Base', getLvData(2), true)
		this.addAttr(keys[3], getLvData(3, true), !/(hp|atk|def)/.test(keys[3]))

		const charBuffs = char.getCalcRule()
		lodash.forEach(charBuffs.buffs, (buff) => {
			if (typeof buff === 'function') buff = buff({ cons })
			if (!buff.isStatic) return true

			if (buff) {
				lodash.forEach(buff.data, (val, key) => {
					this.addAttr(key, val as number)
				})
			}
		})
	}

	/** 计算武器属性 */
	calcWeaponAttr() {
		const wData = this.avatar.weapon
		const weapon = Weapon.Create(wData)
		if (!weapon) return false

		const wCalcRet = weapon.calcAttr(wData.level, wData.promote)
		this.addAttr(AttrKeys.atk + 'Base', wCalcRet.atkBase)
		wCalcRet.attr.key && this.addAttr(wCalcRet.attr.key, wCalcRet.attr.value)

		const wBuffs = getWeaponBuff(wData.id)
		if (wBuffs) {
			wBuffs.forEach(buff => {
				if (!buff.isStatic) return true

				lodash.forEach(buff.refine, (val, key) => {
					if (Array.isArray(val)) {
						this.addAttr(key, val[wData.affix - 1] * (buff.buffCount || 1))
					}
				})
			})
		}
	}

	/** 计算圣遗物属性 */
	calcArtisAttr() {
		const Artis = this.avatar.Artis


	}
}
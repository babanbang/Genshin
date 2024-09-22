import { BasePanel, GameList } from "karin-plugin-mystool";
import { Character } from "../Character";
import { AttrKeys } from "@/types/panel/";
import { lodash } from "node-karin/modules.js";

const baseAttrKeys = [AttrKeys.atk, AttrKeys.def, AttrKeys.hp, AttrKeys.mastery, AttrKeys.recharge, AttrKeys.cpct, AttrKeys.cdmg, AttrKeys.dmg, AttrKeys.phy, AttrKeys.heal, AttrKeys.shield]
const attrReg = new RegExp(`^(${baseAttrKeys.join('|')})(Base|Plus|Pct|Inc)$`)

export class AttrData extends BasePanel<GameList.Gs> {
	char: Character
	attr: {
		[key in string]: {
			base: number, plus: number, pct: number, inc: number
		}
	} = {}
	base: { [key in string]: number } = {}

	constructor(char: Character) {
		super(GameList.Gs)
		this.char = char
		lodash.forEach(baseAttrKeys, (key) => {
			this.attr[key] = { base: 0, plus: 0, pct: 0, inc: 0 }
			this.base[key] = 0
		})
	}

	#calc(key: string) {
		if (baseAttrKeys.some((k) => k === key)) {
			const a = this.attr[key]
			return a.base * (1 + a.pct / 100) + a.plus
		}

		const testRet = attrReg.exec(key)
		if (testRet && testRet[1] && testRet[2]) {
			const key2 = testRet[2].toLowerCase() as 'base' | 'plus' | 'pct' | 'inc'
			return this.attr[testRet[1]][key2] || 0
		}
		return 0
	}

	getBase() {
		return this.base
	}

	getAttr() {
		const attr: { [key in string]: number } = {}
		lodash.forEach(baseAttrKeys, (key) => {
			attr[key] = this.#calc(key)
			if ([AttrKeys.atk, AttrKeys.def, AttrKeys.hp].some((k) => k === key)) {
				attr[`${key}Base`] = this.#calc(`${key}Base`)
			}
		})

		return attr as {
			[key in AttrKeys | 'atkBase' | 'defBase' | 'hpBase']: number
		}
	}

	addAttr(key: string, val: number, isBase: boolean = false) {
		if (baseAttrKeys.some((k) => k === key)) {
			this.attr[key].plus += val
			if (isBase) {
				this.base[key] = (this.base[key] || 0) + val
			}
			return true
		}

		const testRet = attrReg.exec(key)
		if (testRet && testRet[1] && testRet[2]) {
			const key = testRet[1]
			const key2 = testRet[2].toLowerCase() as 'base' | 'plus' | 'pct' | 'inc'
			this.attr[key][key2] = (this.attr[key][key2] || 0) + val
			if (key2 === 'base' || isBase) {
				this.base[key] = (this.base[key] || 0) + val
			}
			return true
		}
		return false
	}
}
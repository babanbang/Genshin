import { WeaponBuffData } from '@/types'
import { lodash } from 'node-karin/modules.js'
import { BowBuffs } from './bow'
import { CatalystBuffs } from './catalyst'
import { ClaymoreBuffs } from './claymore'
import { PolearmBuffs } from './polearm'
import { SwordBuffs } from './sword'

const step = (start: number, step = 0) => {
	if (!step) step = start / 4

	const ret = []
	for (let idx = 0; idx <= 5; idx++) {
		ret.push(start + step * idx)
	}
	return ret
}

const attr = (key: string, start: number, _step?: number) => ({
	title: `${key}提高[key]`,
	isStatic: true,
	refine: {
		[key]: step(start, _step)
	}
})

const weaponBuffs = new Map<number, WeaponBuffData[]>();
[BowBuffs, CatalystBuffs, ClaymoreBuffs, PolearmBuffs, SwordBuffs].forEach(buffs => {
	lodash.forEach(buffs(step, attr), (buff, id) => {
		weaponBuffs.set(Number(id), buff)
	})
})

export const getWeaponBuff = (id: number) => weaponBuffs.get(id)
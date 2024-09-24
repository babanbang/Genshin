import { GameList, WeaponBaseInfo } from "karin-plugin-mystool";
import { BowMap } from "./bow";
import { CatalystMap } from "./catalyst";
import { ClaymoreMap } from "./claymore";
import { PolearmMap } from "./polearm";
import { SwordMap } from "./sword";

const WeaponNameIdMap = new Map<string, number>();
const WeaponIdMap = new Map<number, WeaponBaseInfo<GameList.Gs>>();

[BowMap, CatalystMap, ClaymoreMap, PolearmMap, SwordMap].forEach(map => {
	const { type, list } = map
	list.forEach(item => {
		WeaponNameIdMap.set(item.name, item.id)
		WeaponIdMap.set(item.id, {
			...item, type
		})
	})
})

export const WeaponMap = {
	getById: WeaponIdMap.get,
	getByName: (name: string) => {
		const id = WeaponNameIdMap.get(name)
		return WeaponIdMap.get(id || 0)
	}
}
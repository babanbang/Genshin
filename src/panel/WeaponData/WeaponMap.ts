import { WeaponDetailInfo } from "@/types";
import { Data, GameList, GamePathType, WeaponBaseInfo, karinPath } from "karin-plugin-mystool";
import { BowMap } from "./bow";
import { CatalystMap } from "./catalyst";
import { ClaymoreMap } from "./claymore";
import { PolearmMap } from "./polearm";
import { SwordMap } from "./sword";

const WeaponNameIdMap = new Map<string, number>();
const WeaponIdMap = new Map<number, WeaponBaseInfo<GameList.Gs>>();

const WeaponMetaDataMap = new Map<number, WeaponDetailInfo>();

const AllMeta: (() => Promise<boolean>)[] = [];

[BowMap, CatalystMap, ClaymoreMap, PolearmMap, SwordMap].forEach(map => {
	const { type, list } = map
	list.forEach(item => {
		WeaponNameIdMap.set(item.name, item.id)
		WeaponIdMap.set(item.id, {
			...item, type
		})

		if (Data.exists(`lib/panel/WeaponData/${type}/details/${item.id}.js`, GamePathType.gs, karinPath.node)) {
			AllMeta.push(
				async () => {
					WeaponMetaDataMap.set(item.id,
						(await Data.importModule(`lib/panel/WeaponData/${type}/details/${item.id}.js`, GamePathType.gs, karinPath.node, { module: 'metaData' })).module
					)
					return true
				}
			)
		}
	})
})

await Promise.all(AllMeta)

export const WeaponMap = {
	getById: WeaponIdMap.get,
	getByName: (name: string) => {
		const id = WeaponNameIdMap.get(name)
		return WeaponIdMap.get(id || 0)
	}
}

export const getWeaponMetaData = WeaponMetaDataMap.get
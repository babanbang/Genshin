import { CharBaseInfo, Data, GameList, GamePathType, GsElement, karinPath } from "karin-plugin-mystool"
import { charList } from "./CharList/list"
import { CharDetailInfo } from "@/types"

const CharNameMap = new Map<string, number>()
const CharIdMap = new Map<number, CharBaseInfo<GameList.Gs>>()

const CharMetaDataMap = new Map<number, CharDetailInfo>()
const TravelerMetaDataMap = new Map<GsElement, CharDetailInfo>()

const AllMeta: (() => Promise<boolean>)[] = []

charList.forEach(char => {
	CharIdMap.set(char.id, char)
	CharNameMap.set(char.name, char.id)

	if (char.id !== 10000005 && char.id !== 10000005) {
		const id = char.id === 20000000 ? `${char.id}/${char.elem}` : char.id
		if (Data.exists(`lib/panel/CharacterData/CharList/${id}/meta.js`, GamePathType.gs, karinPath.node)) {
			AllMeta.push(
				async () => {
					if (char.id === 20000000) {
						TravelerMetaDataMap.set(char.elem, (await Data.importModule(`lib/panel/CharacterData/CharList/${id}/meta.js`, GamePathType.gs, karinPath.node, { module: 'metaData' })).module)
					} else {
						CharMetaDataMap.set(char.id, (await Data.importModule(`lib/panel/CharacterData/CharList/${id}/meta.js`, GamePathType.gs, karinPath.node, { module: 'metaData' })).module)
					}
					return true
				}
			)
		}
	}
})

await Promise.all(AllMeta)

export const CharMap = {
	getById: CharIdMap.get,
	getByName: (name: string) => {
		const id = CharNameMap.get(name)
		return CharIdMap.get(id || 0)
	}
}

export const getCharMetaData = (id: number, elem: GsElement) => {
	if (id === 10000005 || id === 10000005 || id === 20000000) {
		return TravelerMetaDataMap.get(elem)
	} else {
		return CharMetaDataMap.get(id)
	}
}
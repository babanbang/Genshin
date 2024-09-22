import { CharBaseInfo, GameList } from "karin-plugin-mystool"
import { charList } from "./CharList/list"

const CharNameMap = new Map<string, number>()
const CharIdMap = new Map<number, CharBaseInfo<GameList.Gs>>()

charList.forEach(char => {
	CharIdMap.set(char.id, char)
	CharNameMap.set(char.name, char.id)
})

export const CharMap = {
	getById: (id: number) => CharIdMap.get(id),
	getByName: (name: string) => {
		const id = CharNameMap.get(name)
		return CharIdMap.get(id || 0)
	}
}
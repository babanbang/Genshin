import { GameList, GsWeaponType, WeaponBaseInfo } from "karin-plugin-mystool"

export interface WeaponMapType {
	type: GsWeaponType
	list: {
		id: WeaponBaseInfo<GameList.Gs>["id"]
		name: WeaponBaseInfo<GameList.Gs>["name"]
		rarity: WeaponBaseInfo<GameList.Gs>["rarity"]
	}[]
}
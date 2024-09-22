import { GameList, WeaponBaseInfo } from "karin-plugin-mystool";
import { AttrKeys, AttrDetailKeys } from "./AttrModel/Attr";

export interface WeaponDetailInfo extends WeaponBaseInfo<GameList.Gs> {
	desc: string
	attr: {
		atk: {
			[key in AttrDetailKeys]: number
		}
		bonusKey: AttrKeys
		bonusData: {
			[key in AttrDetailKeys]: number
		}
	}
}
import { BaseFormat, GameList, GsElement } from "karin-plugin-mystool"

export const Format = new BaseFormat<GameList.Gs>({
	[GsElement.anemo]: ['风', '蒙德'],
	[GsElement.geo]: ['岩', '璃月'],
	[GsElement.cryo]: ['冰', '至冬'],
	[GsElement.electro]: ['雷', '电', '雷电', '稻妻'],
	[GsElement.dendro]: ['草', '须弥'],
	[GsElement.pyro]: ['火', '纳塔'],
	[GsElement.hydro]: ['水', '枫丹'],
	[GsElement.multi]: ['无']
})
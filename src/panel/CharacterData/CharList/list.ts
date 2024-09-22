import { CharBaseInfo, GameList, GsElement, GsTalentType, GsWeaponType } from "karin-plugin-mystool";

export const charList: CharBaseInfo<GameList.Gs>[] = [
	{
		id: 10000002,
		name: "神里绫华",
		rarity: 5,
		elem: GsElement.cryo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10018, GsTalentType.e],
			[10019, GsTalentType.q],
			[10024, GsTalentType.a]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000003,
		name: "琴",
		rarity: 5,
		elem: GsElement.anemo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10031, GsTalentType.a],
			[10033, GsTalentType.e],
			[10034, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000005,
		name: "空",
		rarity: 5,
		elem: GsElement.multi,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10067, GsTalentType.e],
			[10068, GsTalentType.q],
			[10077, GsTalentType.e],
			[10078, GsTalentType.q],
			[10117, GsTalentType.e],
			[10118, GsTalentType.q],
			[10602, GsTalentType.e],
			[10605, GsTalentType.q],
			[100543, GsTalentType.a],
			[100545, GsTalentType.a],
			[100546, GsTalentType.a],
			[100547, GsTalentType.a]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000006,
		name: "丽莎",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10060, GsTalentType.a],
			[10061, GsTalentType.e],
			[10062, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000007,
		name: "荧",
		rarity: 5,
		elem: GsElement.multi,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10067, GsTalentType.e],
			[10068, GsTalentType.q],
			[10077, GsTalentType.e],
			[10078, GsTalentType.q],
			[10117, GsTalentType.e],
			[10118, GsTalentType.q],
			[10602, GsTalentType.e],
			[10605, GsTalentType.q],
			[100553, GsTalentType.a],
			[100555, GsTalentType.a],
			[100556, GsTalentType.a],
			[100557, GsTalentType.a]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000014,
		name: "芭芭拉",
		rarity: 4,
		elem: GsElement.hydro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10070, GsTalentType.a],
			[10071, GsTalentType.e],
			[10072, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000015,
		name: "凯亚",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10073, GsTalentType.a],
			[10074, GsTalentType.e],
			[10075, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000016,
		name: "迪卢克",
		rarity: 5,
		elem: GsElement.pyro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10160, GsTalentType.a],
			[10161, GsTalentType.e],
			[10165, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000020,
		name: "雷泽",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10201, GsTalentType.a],
			[10202, GsTalentType.e],
			[10203, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000021,
		name: "安柏",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10017, GsTalentType.q],
			[10032, GsTalentType.e],
			[10041, GsTalentType.a]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000022,
		name: "温迪",
		rarity: 5,
		elem: GsElement.anemo,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10221, GsTalentType.a],
			[10224, GsTalentType.e],
			[10225, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000023,
		name: "香菱",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10231, GsTalentType.a],
			[10232, GsTalentType.e],
			[10235, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000024,
		name: "北斗",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10241, GsTalentType.a],
			[10242, GsTalentType.e],
			[10245, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000025,
		name: "行秋",
		rarity: 4,
		elem: GsElement.hydro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10381, GsTalentType.a],
			[10382, GsTalentType.e],
			[10385, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000026,
		name: "魈",
		rarity: 5,
		elem: GsElement.anemo,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10261, GsTalentType.a],
			[10262, GsTalentType.e],
			[10265, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000027,
		name: "凝光",
		rarity: 4,
		elem: GsElement.geo,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10271, GsTalentType.a],
			[10272, GsTalentType.e],
			[10274, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000029,
		name: "可莉",
		rarity: 5,
		elem: GsElement.pyro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10291, GsTalentType.a],
			[10292, GsTalentType.e],
			[10295, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000030,
		name: "钟离",
		rarity: 5,
		elem: GsElement.geo,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10301, GsTalentType.a],
			[10302, GsTalentType.e],
			[10303, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000031,
		name: "菲谢尔",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10311, GsTalentType.a],
			[10312, GsTalentType.e],
			[10313, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000032,
		name: "班尼特",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10321, GsTalentType.a],
			[10322, GsTalentType.e],
			[10323, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000033,
		name: "达达利亚",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10331, GsTalentType.a],
			[10332, GsTalentType.e],
			[10333, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.a, [0, 1]],
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000034,
		name: "诺艾尔",
		rarity: 4,
		elem: GsElement.geo,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10341, GsTalentType.a],
			[10342, GsTalentType.e],
			[10343, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000035,
		name: "七七",
		rarity: 5,
		elem: GsElement.cryo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10351, GsTalentType.a],
			[10352, GsTalentType.e],
			[10353, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000036,
		name: "重云",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10401, GsTalentType.a],
			[10402, GsTalentType.e],
			[10403, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000037,
		name: "甘雨",
		rarity: 5,
		elem: GsElement.cryo,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10371, GsTalentType.a],
			[10372, GsTalentType.e],
			[10373, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000038,
		name: "阿贝多",
		rarity: 5,
		elem: GsElement.geo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10386, GsTalentType.a],
			[10387, GsTalentType.e],
			[10388, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000039,
		name: "迪奥娜",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10391, GsTalentType.a],
			[10392, GsTalentType.e],
			[10395, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000041,
		name: "莫娜",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10411, GsTalentType.a],
			[10412, GsTalentType.e],
			[10415, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000042,
		name: "刻晴",
		rarity: 5,
		elem: GsElement.electro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10421, GsTalentType.a],
			[10422, GsTalentType.e],
			[10425, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000043,
		name: "砂糖",
		rarity: 4,
		elem: GsElement.anemo,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10431, GsTalentType.a],
			[10432, GsTalentType.e],
			[10435, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000044,
		name: "辛焱",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10441, GsTalentType.a],
			[10442, GsTalentType.e],
			[10443, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000045,
		name: "罗莎莉亚",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10451, GsTalentType.a],
			[10452, GsTalentType.e],
			[10453, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000046,
		name: "胡桃",
		rarity: 5,
		elem: GsElement.pyro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10461, GsTalentType.a],
			[10462, GsTalentType.e],
			[10463, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000047,
		name: "枫原万叶",
		rarity: 5,
		elem: GsElement.anemo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10471, GsTalentType.a],
			[10472, GsTalentType.e],
			[10475, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000048,
		name: "烟绯",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10481, GsTalentType.a],
			[10482, GsTalentType.e],
			[10485, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000049,
		name: "宵宫",
		rarity: 5,
		elem: GsElement.pyro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10491, GsTalentType.a],
			[10492, GsTalentType.e],
			[10495, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000050,
		name: "托马",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10501, GsTalentType.a],
			[10502, GsTalentType.e],
			[10505, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000051,
		name: "优菈",
		rarity: 5,
		elem: GsElement.cryo,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10511, GsTalentType.a],
			[10512, GsTalentType.e],
			[10515, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000052,
		name: "雷电将军",
		rarity: 5,
		elem: GsElement.electro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10521, GsTalentType.a],
			[10522, GsTalentType.e],
			[10525, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000053,
		name: "早柚",
		rarity: 4,
		elem: GsElement.anemo,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10531, GsTalentType.a],
			[10532, GsTalentType.e],
			[10535, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000054,
		name: "珊瑚宫心海",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10541, GsTalentType.a],
			[10542, GsTalentType.e],
			[10545, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000055,
		name: "五郎",
		rarity: 4,
		elem: GsElement.geo,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10551, GsTalentType.a],
			[10552, GsTalentType.e],
			[10555, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000056,
		name: "九条裟罗",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10561, GsTalentType.a],
			[10562, GsTalentType.e],
			[10565, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000057,
		name: "荒泷一斗",
		rarity: 5,
		elem: GsElement.geo,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10571, GsTalentType.a],
			[10572, GsTalentType.e],
			[10575, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000058,
		name: "八重神子",
		rarity: 5,
		elem: GsElement.electro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10581, GsTalentType.a],
			[10582, GsTalentType.e],
			[10585, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000059,
		name: "鹿野院平藏",
		rarity: 4,
		elem: GsElement.anemo,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10591, GsTalentType.a],
			[10592, GsTalentType.e],
			[10595, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000060,
		name: "夜兰",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10606, GsTalentType.a],
			[10607, GsTalentType.e],
			[10610, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000061,
		name: "绮良良",
		rarity: 4,
		elem: GsElement.dendro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10611, GsTalentType.a],
			[10612, GsTalentType.e],
			[10615, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000062,
		name: "埃洛伊",
		rarity: 5,
		elem: GsElement.cryo,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10621, GsTalentType.a],
			[10622, GsTalentType.e],
			[10625, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000063,
		name: "申鹤",
		rarity: 5,
		elem: GsElement.cryo,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10631, GsTalentType.a],
			[10632, GsTalentType.e],
			[10635, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000064,
		name: "云堇",
		rarity: 4,
		elem: GsElement.geo,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10641, GsTalentType.a],
			[10642, GsTalentType.e],
			[10643, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000065,
		name: "久岐忍",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10651, GsTalentType.a],
			[10652, GsTalentType.e],
			[10655, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000066,
		name: "神里绫人",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10661, GsTalentType.a],
			[10662, GsTalentType.e],
			[10665, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000067,
		name: "柯莱",
		rarity: 4,
		elem: GsElement.dendro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10671, GsTalentType.a],
			[10672, GsTalentType.e],
			[10675, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000068,
		name: "多莉",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10681, GsTalentType.a],
			[10682, GsTalentType.e],
			[10685, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000069,
		name: "提纳里",
		rarity: 5,
		elem: GsElement.dendro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10691, GsTalentType.a],
			[10692, GsTalentType.e],
			[10695, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000070,
		name: "妮露",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10701, GsTalentType.a],
			[10702, GsTalentType.e],
			[10705, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000071,
		name: "赛诺",
		rarity: 5,
		elem: GsElement.electro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10711, GsTalentType.a],
			[10712, GsTalentType.e],
			[10715, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000072,
		name: "坎蒂丝",
		rarity: 4,
		elem: GsElement.hydro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10721, GsTalentType.a],
			[10722, GsTalentType.e],
			[10725, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000073,
		name: "纳西妲",
		rarity: 5,
		elem: GsElement.dendro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10731, GsTalentType.a],
			[10732, GsTalentType.e],
			[10735, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000074,
		name: "莱依拉",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10741, GsTalentType.a],
			[10742, GsTalentType.e],
			[10745, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000075,
		name: "流浪者",
		rarity: 5,
		elem: GsElement.anemo,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10751, GsTalentType.a],
			[10752, GsTalentType.e],
			[10755, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000076,
		name: "珐露珊",
		rarity: 4,
		elem: GsElement.anemo,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10761, GsTalentType.a],
			[10762, GsTalentType.e],
			[10765, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000077,
		name: "瑶瑶",
		rarity: 4,
		elem: GsElement.dendro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10771, GsTalentType.a],
			[10772, GsTalentType.e],
			[10775, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000078,
		name: "艾尔海森",
		rarity: 5,
		elem: GsElement.dendro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10781, GsTalentType.a],
			[10782, GsTalentType.e],
			[10785, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000079,
		name: "迪希雅",
		rarity: 5,
		elem: GsElement.pyro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10791, GsTalentType.a],
			[10792, GsTalentType.e],
			[10795, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000080,
		name: "米卡",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10801, GsTalentType.a],
			[10802, GsTalentType.e],
			[10805, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000081,
		name: "卡维",
		rarity: 4,
		elem: GsElement.dendro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10811, GsTalentType.a],
			[10812, GsTalentType.e],
			[10815, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000082,
		name: "白术",
		rarity: 5,
		elem: GsElement.dendro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10821, GsTalentType.a],
			[10822, GsTalentType.e],
			[10825, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000083,
		name: "琳妮特",
		rarity: 4,
		elem: GsElement.anemo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10831, GsTalentType.a],
			[10832, GsTalentType.e],
			[10835, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000084,
		name: "林尼",
		rarity: 5,
		elem: GsElement.pyro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10841, GsTalentType.a],
			[10842, GsTalentType.e],
			[10845, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.a, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000085,
		name: "菲米尼",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10851, GsTalentType.a],
			[10852, GsTalentType.e],
			[10855, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.a, [3, 3]],
			[GsTalentType.e, [5, 3]],
		])
	},
	{
		id: 10000086,
		name: "莱欧斯利",
		rarity: 5,
		elem: GsElement.cryo,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10861, GsTalentType.a],
			[10862, GsTalentType.e],
			[10865, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.a, [3, 3]],

			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000087,
		name: "那维莱特",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10871, GsTalentType.a],
			[10872, GsTalentType.e],
			[10875, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.a, [3, 3]],

			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000088,
		name: "夏洛蒂",
		rarity: 4,
		elem: GsElement.cryo,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10881, GsTalentType.a],
			[10882, GsTalentType.e],
			[10885, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000089,
		name: "芙宁娜",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10891, GsTalentType.a],
			[10892, GsTalentType.e],
			[10895, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000090,
		name: "夏沃蕾",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10901, GsTalentType.a],
			[10902, GsTalentType.e],
			[10905, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000091,
		name: "娜维娅",
		rarity: 5,
		elem: GsElement.geo,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10911, GsTalentType.a],
			[10912, GsTalentType.e],
			[10915, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000092,
		name: "嘉明",
		rarity: 4,
		elem: GsElement.pyro,
		weapon: GsWeaponType.claymore,
		talentId: new Map([
			[10921, GsTalentType.a],
			[10922, GsTalentType.e],
			[10925, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000093,
		name: "闲云",
		rarity: 5,
		elem: GsElement.anemo,
		weapon: GsWeaponType.catalyst,
		talentId: new Map([
			[10931, GsTalentType.a],
			[10932, GsTalentType.e],
			[10935, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	},
	{
		id: 10000094,
		name: "千织",
		rarity: 5,
		elem: GsElement.geo,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10941, GsTalentType.a],
			[10942, GsTalentType.e],
			[10945, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000095,
		name: "希格雯",
		rarity: 5,
		elem: GsElement.hydro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10951, GsTalentType.a],
			[10952, GsTalentType.e],
			[10955, GsTalentType.q]
		]),
		talentCons: new Map([

			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000096,
		name: "阿蕾奇诺",
		rarity: 5,
		elem: GsElement.pyro,
		weapon: GsWeaponType.polearm,
		talentId: new Map([
			[10961, GsTalentType.a],
			[10962, GsTalentType.e],
			[10965, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.a, [3, 3]],

			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000097,
		name: "赛索斯",
		rarity: 4,
		elem: GsElement.electro,
		weapon: GsWeaponType.bow,
		talentId: new Map([
			[10971, GsTalentType.a],
			[10972, GsTalentType.e],
			[10975, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.a, [3, 3]],

			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 10000098,
		name: "克洛琳德",
		rarity: 5,
		elem: GsElement.electro,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10981, GsTalentType.a],
			[10982, GsTalentType.e],
			[10985, GsTalentType.q]
		]),
		talentCons: new Map([
			[GsTalentType.e, [3, 3]],
			[GsTalentType.q, [5, 3]]
		])
	},
	{
		id: 20000000,
		name: "旅行者",
		rarity: 5,
		elem: GsElement.multi,
		weapon: GsWeaponType.sword,
		talentId: new Map([
			[10067, GsTalentType.e],
			[10068, GsTalentType.q],
			[10077, GsTalentType.e],
			[10078, GsTalentType.q],
			[10117, GsTalentType.e],
			[10118, GsTalentType.q],
			[10602, GsTalentType.e],
			[10605, GsTalentType.q],
			[100553, GsTalentType.a],
			[100555, GsTalentType.a],
			[100556, GsTalentType.a],
			[100557, GsTalentType.a]
		]),
		talentCons: new Map([
			[GsTalentType.e, [5, 3]],
			[GsTalentType.q, [3, 3]]
		])
	}
]
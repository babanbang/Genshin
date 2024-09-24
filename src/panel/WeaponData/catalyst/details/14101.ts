import { MaterialType, WeaponDetailInfo } from "@/types";

/** 学徒笔记 */
export const metaData: WeaponDetailInfo = {
	desc: "某个优等生留下的学习笔记，娟秀的字迹非常好看。记录了不少实用的咒语。",
	attr: {
		atk: new Map([
			["1", 23.25],
			["20", 56.25],
			["40", 101.57],
			["50", 129.62],
			["60", 157.59],
			["70", 185.43],
			["20+", 67.95],
			["40+", 113.17],
			["50+", 141.32],
			["60+", 169.29]
		]),
		bonusData: new Map([
			
		])
	},
	materials: {
		[MaterialType.weapon]: "高塔孤王的断片",
		[MaterialType.monster]: "黑铜号角",
		[MaterialType.normal]: "污秽的面具"
	},
	affixData: {
		title: "",
		desc: "",
		datas: {
			
		}
	}
}
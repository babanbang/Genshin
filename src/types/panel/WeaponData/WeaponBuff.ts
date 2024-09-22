import { GsElement, GsTalentType } from "karin-plugin-mystool";
import { AttrKeys } from "..";

export interface WeaponBuffData {
	isStatic?: boolean
	check?: (ds: {
		cons: number
		elem: GsElement
		talent: {
			[key in GsTalentType]: { [key: string]: number }
		}
	}) => boolean;
	title: string;
	sort?: number
	data?: {
		[key: string]: number | number[] | ((ds: {
			attr: {
				[key in AttrKeys]: {
					base: number, plus: number, pct: number, inc: number
				}
			}
			calc: (ds: {
				base: number, plus: number, pct: number, inc: number
			}) => number
			refine: number
		}) => number | number[])
	}
	refine?: {
		[key: string]: undefined | number | number[]
	}
	buffCount?: number
}

export type WeaponBuffFunc = (
	step: (start: number, step?: number) => number[],
	attr: (key: string, start: number, _step?: number) => {
		title: string, isStatic: boolean, refine: { [key: string]: number[] }
	}
) => { [key: number]: WeaponBuffData[] }
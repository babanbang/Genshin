import { ArtifactSuitInfo } from "@/types/panel/ArtifactData";
import { artifactList } from "./data";

const ArtifactSuitNameMap = new Map<string, number>()
const ArtifactSuitIdMap = new Map<number, ArtifactSuitInfo>()

const ArtifactNameMap = new Map<string, number>()
const ArtifactIdMap = new Map<number, { id: number, name: string, suit: string }>()

artifactList.forEach((artifact) => {
	ArtifactSuitIdMap.set(artifact.id, artifact)
	ArtifactSuitNameMap.set(artifact.name, artifact.id)
	artifact.idxs.forEach((arti) => {
		ArtifactIdMap.set(arti.id, { ...arti, suit: artifact.name })
		ArtifactNameMap.set(arti.name, arti.id)
	})
})

export const ArtisMap = {
	getById: (id: number) => ArtifactIdMap.get(id),
	getByName: (name: string) => {
		const id = ArtifactNameMap.get(name)
		return ArtifactIdMap.get(id || 0)
	},
}

export const ArtisSuitMap = {
	getById: (id: number) => ArtifactSuitIdMap.get(id),
	getByName: (name: string) => {
		const id = ArtifactSuitNameMap.get(name)
		return ArtifactSuitIdMap.get(id || 0)
	}
}
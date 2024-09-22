export type ArtifactMapKey = 1 | 2 | 3 | 4 | 5

export interface ArtifactSuitInfo {
	id: number
	name: string
	idxs: Map<ArtifactMapKey, {
		id: number
		name: string
	}>
	skills: Map<1| 2 | 4, string>
}
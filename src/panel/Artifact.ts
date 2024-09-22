import { BasePanel, GameList } from "karin-plugin-mystool";
import { ArtifactBaseInfo } from "@/types";
import { ArtisMap } from "./ArtifactData";

export class Artifact extends BasePanel<GameList.Gs>{
	id: number
	name: string
	constructor(Info: ArtifactBaseInfo) {
		super(GameList.Gs)

		this.id = Info.id
		this.name = Info.name
	}

	static Create(ds: { id?: number, name?: string }) {
		if (!ds.id && !ds.name) return false

		const data = ds.id ? ArtisMap.getById(ds.id) : ArtisMap.getByName(ds.name!)
		if (!data) return false

		const artifact = new Artifact(data)
		const cache = artifact._getCache<Artifact>(`artifact:${GameList.Gs}:${artifact.id}-${artifact.name}`)
		if (cache) return cache

		return artifact._cache<Artifact>(100)
	}
}
import { ArtifactMapKey, ArtisData, AvatarArtifactBase, AvatarArtifactMap } from "@/types";
import { BasePanel, GameList } from "karin-plugin-mystool";
import { Artifact } from "../Artifact";

export class Artis extends BasePanel<GameList.Gs>{
	source: string = ''
	artis = new Map<ArtifactMapKey, ArtisData>()
	constructor() {
		super(GameList.Gs)
	}

	getArtis() {

	}

	#eachIdx(fn: Function) {
		for (let i = 1; i <= 5; i++) {
			const idx = i as ArtifactMapKey
			if (!this.artis.has(idx)) continue
			if (fn(this.artis.get(idx), idx) === false) break
		}
	}

	setArtisData(artis: AvatarArtifactMap, source?: string) {
		if (source) this.source = source

		this.#eachIdx((arti: AvatarArtifactBase, idx: ArtifactMapKey) => {
			this.setArtis(idx, arti)
		})
	}

	setArtis(idx: ArtifactMapKey, ds: AvatarArtifactBase) {
		const atrisData = Artifact.Create()
	}

}
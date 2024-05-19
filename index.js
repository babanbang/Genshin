import { Cfg, getDir } from '#Mys.tool'

const dir = getDir(import.meta.url)
for (const type of ['artifact', 'character', 'weapon']) {
  await import(`file://${dir.path}/resources/meta/${type}/index.js`)
}
Cfg.initCfg('/components/' + dir.name, 'gs')

export * from './Apps/role.js'
export * from './Apps/explore.js'

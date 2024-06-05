import { Cfg, getDir } from '#Mys.tool'

const dir = getDir(import.meta.url)
Cfg.initCfg('/components', dir.name + '/', 'gs')

for (const type of ['artifact', 'character', 'material', 'weapon']) {
  await import(`file://${dir.path}/resources/meta/${type}/index.js`)
}

export * from './Apps/calculator.js'
export * from './Apps/explore.js'
export * from './Apps/profile.js'
export * from './Apps/role.js'

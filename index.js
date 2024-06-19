import { Cfg, getDir } from '#MysTool/utils'
import './model/mys/ApiMap.js'

const dir = getDir(import.meta.url)
Cfg.initCfg('/lib/components', dir.name + '/', 'gs')

for (const type of ['artifact', 'character', 'material', 'weapon']) {
  await import(`file://${dir.path}/resources/meta/${type}/index.js`)
}

export * from './Apps/calculator.js'
export * from './Apps/explore.js'
export * from './Apps/ledger.js'
export * from './Apps/profile.js'
export * from './Apps/role.js'
// export * from './Apps/gachaLog.js'
export * from './Apps/materialPack.js'

import { MysUtil } from '#MysTool/mys'
import { Cfg, getDir, PluginName } from '#MysTool/utils'
import './model/mys/ApiMap.js'

MysUtil.addGames('gs', '原神')

const dir = getDir(import.meta.url)
Cfg.initCfg('/lib/components', dir.name + '/', 'gs')

logger.info(`${PluginName}-${dir.name}初始化~`)

for (const type of ['artifact', 'character', 'material', 'weapon']) {
  await import(`file://${dir.path}/resources/meta/${type}/index.js`)
}

export * from './Apps/calculator.js'
export * from './Apps/explore.js'
export * from './Apps/gachaLog.js'
export * from './Apps/ledger.js'
export * from './Apps/materialPack.js'
export * from './Apps/profile.js'
export * from './Apps/role.js'

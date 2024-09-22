import { Cfg, MysUtil, Data, GameNames, GamePathType, GameList, getNpmPath } from 'karin-plugin-mystool'
import { logger } from 'node-karin'
import './panel/WeaponBuffs/Buffs'

MysUtil.initGame(GameList.Gs)
/** 初始化配置 */
const { npmPath, isNpm } = getNpmPath(import.meta.url,)
Cfg.initCfg(GamePathType.gs, npmPath)

const pkg = Cfg.package(GamePathType.gs)
const name = Data.getPluginName(GamePathType.gs)
logger.info(`${logger.violet(`[插件:${pkg.version}]`)} ${logger.green(name)}${GameNames.gs}初始化完成~`)
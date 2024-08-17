import { Cfg, MysUtil, Data, GameNames, GamePathType, GameList } from 'karin-plugin-mystool'
import { logger } from 'node-karin'

MysUtil.initGame(GameList.Gs)
/** 初始化配置 */
Cfg.initCfg(GamePathType.gs)

const pkg = Cfg.package(GamePathType.gs)
const name = Data.getGamePath(GamePathType.gs)
logger.info(`${logger.violet(`[插件:${pkg.version}]`)} ${logger.green(name)}${GameNames.gs}初始化完成~`)
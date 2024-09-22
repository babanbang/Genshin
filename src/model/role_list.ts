import { getCharList, getCharacterDetail, getIndex } from '@/mys'
import { Player, Format, Avatar } from '@/panel'
import { AvatarData, ReqCharList } from '@/types'
import { BaseModel, BingUIDType, Cfg, ConfigName, ConfigsType, GameList, GameNames, GamePathType, GsTalentType, MysInfo } from 'karin-plugin-mystool'
import { KarinMessage, common, logger } from 'node-karin'
import lodash from 'node-karin/lodash'

export class Role_list extends BaseModel<GamePathType.gs>{
  /** 基础数据 */
  lable: ConfigsType<ConfigName.lables, GamePathType.gs>
  constructor(e: KarinMessage) {
    super(GamePathType.gs, e)
    this.model = 'role/rolelist'
    this.lable = Cfg.getdefSet(ConfigName.lables, this.game)!
  }

  async roleList() {
    const mysInfo = await MysInfo.init(GameList.Gs, BingUIDType.ck, this.e)
    if (!mysInfo.uid) return false

    this.uid = mysInfo.uid

    const res = await getCharList(mysInfo.mysReq)
    if (res?.retcode !== 0) return false

    const player = Player.Create(mysInfo.uid)
    if (mysInfo.owner && (!player.name || !player.level || !player.face)) {
      const ret = await getIndex(mysInfo.mysReq)
      if (ret?.retcode === 0) {
        player.setBasicData(ret.data.role, true)
      }
    }

    const avatar_list = res.data.list

    if (mysInfo.owner) {
      await this.refreshDetailData(lodash.map(avatar_list, 'id').map(String), mysInfo, player)
    } else {
      avatar_list.forEach((v, idx) => {
        const avatar = player.getAvatar({ id: v.id, elem: Format.elem(v.element) }, true)
        if (!avatar) return

        avatar.setAvatar({
          level: v.level,
          promote: Avatar.calcPromote(v.level),
          fetter: v.fetter,
          cons: v.actived_constellation_num,
          weapon: {
            ...v.weapon,
            promote: Avatar.calcPromote(v.weapon.level),
            affix: v.weapon.affix_level
          }
        })
      })
    }

    return await this.renderImg({
      avatars,
      role: player.getData(['name', 'level', 'Face']),
      version: this.lable.version
    }, { Scale: true })
  }

  async refreshDetailData(ids: string[], mysInfo: MysInfo<GameList.Gs>, player: Player) {
    const Details = await getCharacterDetail(mysInfo.mysReq, { ids })
    if (Details?.retcode !== 0) return false

    Details.data.list.forEach((v, idx) => {
      const { base, weapon, relics, costumes, skills } = v
      const avatar = player.getAvatar(base, true)
      if (!avatar) return

      avatar.setWeapon({
        ...weapon,
        affix: weapon.affix_level,
        promote: weapon.promote_level
      })

      const talentId = avatar.char.talentId
      const talent = {} as { [key in GsTalentType]: number }
      const talents = lodash.orderBy(skills, ['skill_id'], 'desc')
      for (const { skill_id, level } of talents) {
        if (talentId[skill_id]) {
          talent[talentId[skill_id]] = level
        }
        if (talent.a && talent.e && talent.q) break
      }
      avatar.setTalent(talent, 'level')
    })
    player.Save()
  }
}

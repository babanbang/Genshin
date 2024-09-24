import { getCharacterDetail, getCharList, getIndex } from '@/mys'
import { Avatar, Format, Player } from '@/panel'
import { BaseModel, BingUIDType, Cfg, ConfigName, ConfigsType, GameList, GamePathType, GsTalentType, MysInfo, MysUtil } from 'karin-plugin-mystool'
import { karin, KarinMessage } from 'node-karin'
import lodash from 'node-karin/lodash'

const reg = MysUtil.reg.gs

/** 角色列表 */
export const role_List = karin.command(
  new RegExp(`^${reg}(角色|查询角色|角色查询)((18|[1-9])[0-9]{8})*$`, 'i'),
  async (e) => {
    const img = await new Role_list(e).roleList()
    if (img) e.reply(img)
    return true
  },
  { name: '原神角色信息查询', priority: 200 }
)

class Role_list extends BaseModel<GamePathType.gs>{
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
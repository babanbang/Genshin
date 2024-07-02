import { Meta, CharCfg } from '#MysTool/profile'
import { Data } from '#MysTool/utils'
import lodash from 'lodash'
import { alias } from './alias.js'
import { extraChars, wifeCfg } from './extra.js'

const Path = import.meta.url
const meta = Meta.create('gs', 'char')

meta.addData([{ id: 'allchars', data: Data.readJSON(`release.json`, { Path }) }])
meta.addData(Data.readJSON('data.json', { Path }))
meta.addAlias(alias)

// 添加自定义角色
// eslint-disable-next-line no-unused-vars
lodash.forEach(extraChars, (alias, char) => {
  meta.addDataItem(char, {
    id: char,
    name: char
  })
})
// 添加自定义角色别名
meta.addAlias(extraChars)

// 添加老婆设置
const wifeData = {}
lodash.forEach(wifeCfg, (txt, type) => {
  wifeData[type] = wifeData[type] || {}
  Data.eachStr(txt, (name) => {
    let id = meta.getId(name)
    if (id) wifeData[type][id] = true
  })
})
meta.addMeta({ wifeData })
CharCfg.initCfg('gs')

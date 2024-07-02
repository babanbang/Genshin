import { Meta } from '#MysTool/profile'
import { Data } from '#MysTool/utils'
import lodash from 'lodash'
import { abbr } from './abbr.js'
import dailyData from './daily.js'

const ret = {}
const abbr2 = {}

const citys = ['蒙德', '璃月', '稻妻', '须弥', '枫丹']

lodash.forEach(Data.readJSON('data.json', { Path: import.meta.url }), (ds) => {
  let { type, name } = ds
  let tmp = {
    name,
    type,
    star: ds.star
  }

  if (type === 'talent' || type === 'weapon') {
    tmp.abbr = (ds.type === 'talent' ? Data.regRet(/「(.+)」/, name, 1) : name.slice(0, 4)) || name
    abbr2[name] = tmp.abbr
    lodash.forEach(dailyData[type], (weekData, week) => {
      let cid = weekData.indexOf(tmp.abbr)
      if (cid !== -1) {
        tmp.week = week * 1
        tmp.city = citys[cid]
        tmp.cid = cid + 1
        return false
      }
    })
  }

  if (ds.items) {
    tmp.items = {}
    lodash.forEach(ds.items, (item) => {
      tmp.items[item.star] = item.name
      ret[item.name] = {
        name: item.name,
        type: item.type,
        star: item.star
      }
    })
  }
  ret[ds.name] = tmp
})

const meta = Meta.create('gs', 'material')
meta.addData(ret)
meta.addAbbr(abbr)
meta.addAbbr(abbr2)
meta.addMeta({ dailyData })

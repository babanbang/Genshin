import { Meta } from '#MysTool/profile'
import { Data } from '#MysTool/utils'
import lodash from 'lodash'
import { setAbbr, setAlias } from './alias.js'
import { usefulAttr } from './artis-mark.js'
import calc from './calc.js'
import { attrIdMap, attrMap, attrNameMap, mainAttr, mainIdMap, subAttr } from './extra.js'

const setMeta = Meta.create('gs', 'artiSet')
const artiMeta = Meta.create('gs', 'arti')

const setIds = {}
lodash.forEach(Data.readJSON('data.json', { Path: import.meta.url }), (ds) => {
  const artiSet = {
    name: ds.name,
    effect: ds.effect,
    idxs: {}
  }
  setMeta.addDataItem(ds.name, artiSet)

  lodash.forEach(ds.idxs, (as, idx) => {
    if (as.name) {
      artiSet.idxs[idx] = as.name
      artiMeta.addDataItem(as.name, {
        set: ds.name,
        name: as.name,
        idx
      })
      artiMeta.addDataItem(as.id, {
        set: ds.name,
        name: as.name,
        idx
      })

      setIds[artiSet.name] = setIds[artiSet.name] || as.id.toString().slice(0, 2)
    }
  })
})

setMeta.addAbbr(setAbbr)
setMeta.addAlias(setAlias)
setMeta.addAlias(setIds)
artiMeta.addMeta({
  mainAttr, subAttr, attrMap, attrNameMap, mainIdMap, attrIdMap, artiBuffs: calc, usefulAttr
})

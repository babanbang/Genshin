import { Meta } from '#MysTool/profile'
import { Data } from '#MysTool/utils'
import lodash from 'lodash'
import { abbr, alias } from './alias.js'
import { descFix } from './desc.js'
import { weaponSet, weaponType } from './extra.js'

const Path = import.meta.url
const weaponBuffs = {}
const data = {}

const step = function (start, step = 0) {
  if (!step) step = start / 4

  const ret = []
  for (let idx = 0; idx <= 5; idx++) {
    ret.push(start + step * idx)
  }
  return ret
}

const attr = function (key, start, _step) {
  return {
    title: `${key}提高[key]`,
    isStatic: true,
    refine: {
      [key]: step(start, _step)
    }
  }
}

for (const type in weaponType) {
  // calc
  const typeCalc = (await Data.importDefault(`${type}/calc.js`, { Path })).module
  lodash.assign(weaponBuffs, typeCalc(step, attr))

  // data
  lodash.forEach(Data.readJSON(`${type}/data.json`, { Path }), (ds) => {
    data[ds.id] = {
      id: ds.id,
      name: ds.name,
      type,
      star: ds.star,
      eta: ds.eta,
      isRelease: !ds.mid && !ds.eta
    }
  })
}

const meta = Meta.create('gs', 'weapon')

meta.addData([{ id: 'allweapons', data: Data.readJSON(`release.json`, { Path }) }])
meta.addData(data)
meta.addAlias(alias)
meta.addAbbr(abbr)
meta.addMeta({
  weaponType, weaponSet, weaponBuffs, descFix
})

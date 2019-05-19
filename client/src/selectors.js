import { createSelector } from 'reselect'

const getCompanies = state => state.companies.list
const getKeyName = (state, ownProps) => ownProps.keyName

export const getUniqueValuesForKeyFromCompanies = createSelector(
  getCompanies,
  getKeyName,
  (companies, keyName) => {
    const result = []
    const map = new Map()
    for (const item of companies) {
      if (!map.has(item[keyName])) {
        map.set(item[keyName], true)
        result.push(item[keyName])
      }
    }
    return result
  }
)

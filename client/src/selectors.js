import { createSelector } from 'reselect'

const getCompanies = state => state.companies.list
const getKeyName = (state, ownProps) => ownProps.keyName
const parseCompanyId = (state, ownProps) =>
  parseInt(ownProps.companyId, 10);
const getFavorites = state => Object.keys(state.user.favorites)

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


export const getCompanyById = createSelector(
  getCompanies,
  parseCompanyId,
  (companies, companyId) =>
    companies.find(el => el.id === companyId)
);


export const getFavoriteCompanies = createSelector(
  getCompanies,
  getFavorites,
  (companies, favorites) => companies.filter(c =>
    favorites.includes(String(c.id)))

);
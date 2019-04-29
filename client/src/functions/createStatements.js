import { iS, bS, cF, pI } from './statementObjects'
export const createStatements = (data, incomeStatement=iS, balanceSheet=bS, cashFlowStatement=cF, periodInfo=pI) => {
  const companyId = data[0].company_id;
  const companyFins = {}
  data.forEach(singlePeriod => {
    for (let property1 in singlePeriod) {
      if (incomeStatement[property1] && singlePeriod[property1] != null) {
        incomeStatement[property1].push(singlePeriod[property1])
      }
      if (balanceSheet[property1] && singlePeriod[property1] != null) {
        balanceSheet[property1].push(singlePeriod[property1])
      }
      if (cashFlowStatement[property1] && singlePeriod[property1] != null) {
        cashFlowStatement[property1].push(singlePeriod[property1])
      }
      if (periodInfo[property1] && singlePeriod[property1] != null) {
        periodInfo[property1].push(singlePeriod[property1])
      }
    }
  })
  companyFins[companyId] = {
    "info": periodInfo,
    "IS": incomeStatement,
    "BS": balanceSheet,
    "CF": cashFlowStatement
  }
  return companyFins ;
}

import { incomeStatement, balanceSheet, cashFlowStatement } from './statementObjects'
export const createStatements = data => {
  const companyId = data[0].company_id;
  const companyFins = {}
  data.forEach(singlePeriod => {
    for (let property1 in singlePeriod) {
      if (incomeStatement.hasOwnProperty(property1)  && singlePeriod[property1] !== null) {
        incomeStatement[property1].push(singlePeriod[property1])
      }
      if (balanceSheet.hasOwnProperty(property1) && singlePeriod[property1] !== null) {
        balanceSheet[property1].push(singlePeriod[property1])
      }
      if (balanceSheet.hasOwnProperty(property1) && singlePeriod[property1] !== null) {
        balanceSheet[property1].push(singlePeriod[property1])
      }
    }
    companyFins[singlePeriod.fiscalyear] = {
      "income": incomeStatement,
      "balance": balanceSheet,
      "cashFlow": cashFlowStatement
    }
    
  })
  return [companyId, companyFins] ;
}

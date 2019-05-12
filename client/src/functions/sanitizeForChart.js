export const sanitizeForHighCharts = (years, data, fields) => {
  const series = fields.map(field => {
    const seriesItem = returnTemplate(field)
    seriesItem['data'] = years.map(year => {
      const finNumber = Number(data[year][field].replace(/[,)]/g, '').replace(/\(/, '-'))
      const finDate = Number(Date.parse(data[year]['periodenddate']))
      return [finDate ,finNumber]
    })
  })
  return series;
}


const returnTemplate = (field) => {
  const names = {
    'totalrevenue': 'Revenue',
    'ebit': 'EBIT',
    'netincome': 'Net Income'
  }
  const displayName = names[field]
  return {
    name: displayName,
    data: []
  }
}

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

//years array, data hash, fieldNames array, 
const LineChart = ({years, data, fieldNames, displayName}) => { 
  
  const finData = years.map(year => {
    const finNumber = Number(data[year][fieldNames].replace(/[,)]/g, '').replace(/\(/, '-'))
    const finDate = Number(Date.parse(data[year]['periodenddate']))
    return [finDate ,finNumber]
  })
  console.log(finData)
  const currency = data[years[0]]['currencycode']

  const series = [{
    name: displayName,
    data: finData
  }]
  
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    subtitle: {
      text:  displayName +' over Time'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: displayName
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ` ${currency}`
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: series
  }
  return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      );
    
  
}

export default LineChart;
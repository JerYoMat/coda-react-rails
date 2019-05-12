import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = ({years, data, fieldNames, displayName}) => { 
  const test = years.map(year => {
    const finNumber = Number(data[year][fieldNames].replace(/,/g, ''));
    const finDate = Number(Date.parse(data[year]['periodenddate']))
    return [finDate ,finNumber]
  })
  console.log(test)

  Date.parse(data['2017']['periodenddate'])
  const currency = data['2017']['currencycode']

  const series = [{
    name: displayName,
    data: test
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
        text: 'displayName'
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
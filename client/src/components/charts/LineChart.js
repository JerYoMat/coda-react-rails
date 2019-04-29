import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = ({ years, finData }) => { 
  
  const options = {
    title: {
      text: 'Sales Revenue over Time'
    },
    xAxis: {
      categories: years,
    },
    series: [{
      data: finData.map(Number)
    }]
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
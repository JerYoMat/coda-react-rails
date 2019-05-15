import React from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import themeOptions from '../../styles/highchartsTheme';

Highcharts.setOptions(themeOptions);
const StockChart = ({ data }) => {
  console.log(data[0])
  const options = {
    yAxis: [
      {
        height: "75%",
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "Market Performance"
        }
      },
      {
        top: "75%",
        height: "25%",
        labels: {
          align: "right",
          x: -3
        },
        offset: 0,
        title: {
          text: "USD"
        }
      }
    ],
    xAxis: {
      type: "datetime"
    },
    tooltip: {
      valueSuffix: ' USD'
    },
    series: [
      {
        name: 'Stock Price: ',
        data: data
      }
    ]
  };
  return (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>)
};

export default StockChart
 // Chart component
import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import returnsData from './returns.json';
import logo from '../assets/logo.png';


const Chart = () => {
  useEffect(() => {
    const chartData = returnsData.data.combined.map(item => ({
      time: item.date,
      value: item.cumsum,
    }));

    const chart = createChart('chart', {
      width: 800,
      height: 400,
      layout: {
        backgroundColor: '#FFFFFF',
      },
      rightPriceScale: {
        visible: false,
      },
      leftPriceScale: {
        visible: true,
      },
    });

    const lineSeries = chart.addLineSeries({
      
      color: 'red',  
      lineWidth: 2.5,  
      crossHairMarkerVisible: false,  
      priceLineVisible: false,   
      lastValueVisible: false,  
    });
    

    lineSeries.setData(chartData);

    const areaSeries = chart.addAreaSeries({
      topColor: 'rgba(255, 0, 0, 0.5)',  
      bottomColor: 'rgba(255, 0, 0, 0)', 
      lineColor: 'rgba(255, 0, 0, 0)', 
      lineWidth: 0,  
    });

     
    areaSeries.setData(chartData);

    return () => chart.remove();
  }, []);

  return <div className='chart-in' id="chart" style={{ float: 'left'}}>
  <img src={logo} alt="" />
   </div>;
};

export default Chart;

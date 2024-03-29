 // Chart component
import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import returnsData from './returns.json';
import xyz from '../assets/logo.png';


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
      
      color: 'red', // Color of the line
      lineWidth: 2.5, // Width of the line
      crossHairMarkerVisible: true, // Hide crosshair marker
      priceLineVisible: false, // Hide price line
      lastValueVisible: false, // Hide last value label
    });
    

     
    

    // Set data for the line series
    lineSeries.setData(chartData);

    // Add area series to fill the area under the line
    const areaSeries = chart.addAreaSeries({
      topColor: 'rgba(255, 0, 0, 0.5)', // Red color with 50% opacity
      bottomColor: 'rgba(255, 0, 0, 0)', // Transparent bottom color
      lineColor: 'rgba(255, 0, 0, 0)', // Transparent line color
      lineWidth: 0, // No line width
    });

    // Set data for the area series
    areaSeries.setData(chartData);

    return () => chart.remove();
  }, []);

  return <div className='chart-in' id="chart" style={{ float: 'left'}}>
   </div>;
};

export default Chart;

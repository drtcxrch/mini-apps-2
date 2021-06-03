import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = (props) => {

  const data = {
    labels: props.dates,
    datasets: [
      {
        label: 'Bitcoin price at closing on day',
        data: props.prices,
        fill: false,
        backgroundColor: '#00DEFF',
        borderColor: '#79487F',
      },
    ],
  }

  const options = {
    scales: {
      y: {
        stacked: true
      }
    }
  };

  return (
    <Line data={data} options={options} />
  );

}

export default Chart;
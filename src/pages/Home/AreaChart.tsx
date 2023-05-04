import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line}  from 'react-chartjs-2';
import {randNumber} from '@ngneat/falso';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
          display: false
        }
      }
    
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const tempData = labels.map(() => randNumber({min:1000,max:1500}));
export const data = {
    labels,
    datasets: [
        {
            fill: true,
            data: tempData,
            borderColor: 'rgb(54,230,163)',
            backgroundColor: 'rgb(205,249,232)',
        },
    ],
    
};

export default function AreaChart() {
    return (
        <Line options={options} data={data}  />
    )
}
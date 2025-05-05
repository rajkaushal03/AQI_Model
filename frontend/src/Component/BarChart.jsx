import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ cityData }) => {
  if (!cityData) return <p>Loading...</p>;

  const { city, pm2_5, pm10, co, so2, no2, o3} = cityData;
  let healthScore = cityData.health_score; // Format health score to 2 decimal places
  const barData = {
    labels: ['PM2.5', 'PM10', 'CO', 'SO₂', 'NO₂', 'O₃'],
    datasets: [
      {
        label: `${city} - Impact score: ${healthScore}`,
        data: [pm2_5, pm10, co / 10, so2, no2, o3],
        backgroundColor: [
          'rgba	(255,74,74)',   
          'rgba(32,199,243)',  
          'rgba(255,215,0)',   
          'rgba(177,156,217)', 
          'rgba(255,178,148)',  
          'rgba(251,126,253)'    
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(102,252,194)', // Legend text color
        },
      },
      title: {
        display: true,
        text: `${city} - Air Quality Gas Levels`,
        color: 'white', // Title text color

      },
      tooltip: {
        bodyColor: 'white', // Tooltip text color
        titleColor: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // X-axis labels
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Optional: faint white grid lines
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Y-axis labels
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Optional
        },
      },
    },
  };

  return (
    <div style={{ width: '500px' }}>
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default BarChart;

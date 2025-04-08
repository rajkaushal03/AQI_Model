import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const CityGraph = ({ city }) => {
  const years = Object.keys(city.yearly);
  const aqiValues = Object.values(city.yearly);

  const data = {
    labels: years,
    datasets: [
      {
        label: "AQI",
        data: aqiValues,
        backgroundColor: [
          "#ffcc00",
          "#66cc66",
          "#ff9933",
          "#9966ff",
          "#ff4444",
          "#0099cc",
          "#ff66b2",
        ],
      },
    ],
  };

  return (
    <Card className="bg-gray-900 text-white p-4 rounded-lg shadow-lg w-3/5">
      <CardContent>
        <h2 className="text-xl font-bold">{city.city}</h2>
        <p className="text-3xl font-semibold text-yellow-400">
          {city.yearly["2025"]} AQI
        </p>
        <p>
          Temp: {city.temperature.slice(0, 3)}°C | Humidity: {city.humidity}%
        </p>
        <div className="mt-2 h-72">
          <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CityGraph;

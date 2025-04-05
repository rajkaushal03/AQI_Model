import { Card, CardContent } from '@/components/ui/card';
import React from 'react'
import { Bar } from 'react-chartjs-2';

const CityGraph = ({ city }) => {
    // const {data} = useAQIContext();
    const data = {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      datasets: [
          {
              label: "AQI",
              data: city.pastAQI,
              backgroundColor: ["#ffcc00", "#66cc66", "#ff9933", "#9966ff", "#ff4444", "#0099cc", "#ff66b2"],
          },
      ],
  };
    return (
      <Card className="bg-gray-900 text-white p-4 rounded-lg shadow-lg w-80">
        <CardContent>
          <h2 className="text-xl font-bold">{city.name}</h2>
          <p className="text-3xl font-semibold text-yellow-400">{city.currentAQI}AQI</p>
          <p>Temp: {city.temp}°C | Humidity: {city.humidity}%</p>
          <div className="mt-2 h-48">
            <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </CardContent>
      </Card>
    );
  };
  

export default CityGraph

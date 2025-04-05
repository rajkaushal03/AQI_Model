import React from "react";
import "chart.js/auto";
import CityGraph from "@/Component/CityGraph";


const AQIDashboard = () => {

  const cities = [
    {
      name: "Delhi",
      currentAQI: 127,
      temp: 25,
      humidity: 28,
      pastAQI: [50, 65, 120, 125, 130, 135, 127],
    },
    // {
    //   name: "Mumbai",
    //   currentAQI: 117,
    //   temp: 29,
    //   humidity: 62,
    //   pastAQI: [100, 105, 110, 115, 120, 125, 117],
    // },
    // {
    //   name: "Pune",
    //   currentAQI: 159,
    //   temp: 31,
    //   humidity: 22,
    //   pastAQI: [90, 95, 100, 120, 140, 160, 159],
    // },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 w-1/2">
      {cities.map((city, index) => (
        <CityGraph key={index} city={city} />
      ))}
    </div>
  );
};

export default AQIDashboard;
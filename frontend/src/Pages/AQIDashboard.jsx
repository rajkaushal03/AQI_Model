import React from "react";
import "chart.js/auto";
import CityGraph from "@/Component/CityGraph";
import { useAQIContext } from "@/context/AQIContext";


const AQIDashboard = () => {
  const { city, loading } = useAQIContext();

  // const cities = [
  //   {
  //     name: "Delhi",
  //     currentAQI: 127,
  //     temp: 25,
  //     humidity: 28,
  //     pastAQI: [50, 65, 120, 125, 130, 135, 127],
  //   },
  // ];

  return (
    <div className="flex flex-wrap md:justify-center gap-6 lg:p-6  p-2 w-full md:w-[75%] lg:w-1/2 ">
      {!loading ? <CityGraph city={city} /> : <div className="bg-gray-800 p-4 rounded-lg md:w-3/5 w-full shadow-lg">
        <div className="skeleton h-6 w-3/4 mb-4"></div>
        <div className="skeleton h-8 w-1/2 mb-2"></div>
        <div className="skeleton h-4 w-3/5 mb-4"></div>
        <div className="skeleton h-48 w-full"></div>
      </div>}
    </div>
  );
};

export default AQIDashboard;
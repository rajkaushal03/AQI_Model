import AQICard from "@/Component/AQICard";
import { useAQIContext } from "@/context/AQIContext";
import React from "react";


const CityCard = () => {

  const { citiesCard } = useAQIContext();
  console.log(citiesCard);

  return (
    <div className="bg-accent  flex items-center justify-center p-6">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16 gap-6">
        {Array.isArray(citiesCard) && citiesCard.length > 0 ? (
          citiesCard.map((city, index) => (
            <AQICard key={index} city={city} />
          ))
        ) : (
          <p className="text-white">Loading data...</p>
        )}

      </div>
    </div>
  )
}

export default CityCard

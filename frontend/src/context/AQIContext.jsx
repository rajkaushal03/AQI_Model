/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

export const AQIContext = createContext();

export const useAQIContext = () => {
    return useContext(AQIContext);
};

export const AQIContextProvider = ({ children }) => {
    

   
    const citiesCard = [
        { name: "Ahmedabad", aqi: 107, temp: "28°C", humidity: "14%" },
        { name: "Bangalore", aqi: 106, temp: "24°C", humidity: "65%" },
        { name: "Chennai", aqi: 91, temp: "29°C", humidity: "75%" },
        { name: "Hyderabad", aqi: 116, temp: "25°C", humidity: "61%" },
        { name: "Kolkata", aqi: 134, temp: "28°C", humidity: "84%" },
        { name: "Mumbai", aqi: 117, temp: "29°C", humidity: "62%" },
        { name: "New Delhi", aqi: 127, temp: "25°C", humidity: "28%" },
        { name: "Pune", aqi: 159, temp: "31°C", humidity: "22%" },
      ];

    return <AQIContext.Provider value={{ citiesCard }}>{children}</AQIContext.Provider>
};
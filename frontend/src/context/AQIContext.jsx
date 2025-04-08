/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext,  useState } from "react";

export const AQIContext = createContext();

export const useAQIContext = () => {
    return useContext(AQIContext);
};

export const AQIContextProvider = ({ children }) => {

    const [city, setCity] = useState({
        "city": "Delhi",
        "humidity": 31,
        "temperature": "37.22 C",
        "yearly": {
            "2021": 162,
            "2022": 174,
            "2023": 164,
            "2024": 169,
            "2025": 175
        }
    });
    // const cityNames = [
    //     "Bangalore",
    //     "Chennai",
    //     "Mumbai",
    //     "Pune",
    // ];

    // const [citiesCard, setCitiesCard] = useState([]);
    // const fetchCitiesData = async () => {
    //     try {
    //         const results = await Promise.all(
    //             cityNames.map(async (cityName) => {
    //                 const response = await fetch(`/aqi/${cityName.toLowerCase().replace(/\s+/g, '')}`);
    //                 const data = await response.json();
    //                 return {
    //                     name: cityName,
    //                     aqi: data?.aqi || "--",
    //                     temp: data?.temperature || "--",
    //                     humidity: data?.humidity || "--"
    //                 };
    //             })
    //         );
    //         setCitiesCard(results);
    //     } catch (error) {
    //         console.error("Error fetching city AQI data:", error);
    //     }
    //     finally{
    //         console.log(citiesCard);

    //     }
    // };

    // useEffect(() => {
    //     fetchCitiesData();
    // }, []);
  const [loading, setLoading] = useState(false);


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

    return <AQIContext.Provider value={{ citiesCard, city, setCity,loading, setLoading }}>{children}</AQIContext.Provider>
};
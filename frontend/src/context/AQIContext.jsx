import { createContext, useContext, useEffect, useState } from "react";

export const AQIContext = createContext();

export const useAQIContext = () => {
    return useContext(AQIContext);
};

export const AQIContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [cards, setCards] = useState([]);
    const cities = ["Delhi", "jaipur", "Kanpur", "Mumbai", "Kolkata", "Lucknow", "bengaluru",
        "ahmedabad","agra"];
    const [city, setCity] = useState({});

    const fetchData = async (city) => {
        try {
            const res = await fetch(`/details/${city}`);
            const data = await res.json();
            return data; // ✅ return the data
        } catch (err) {
            console.error("Error fetching data:", err);
            return null; // optional: return null if fetch fails
        }
    };

    useEffect(() => {
        setLoad(false);
        FetchCards();
    }, []);

    const FetchCards = async () => {
        try {
            const results = await Promise.all(cities.map(city => fetchData(city)));
            const filteredResults = results.filter(Boolean);
            setCards(filteredResults);
        } catch (error) {
            console.log("Error fetching cards:", error.message);
        }
        finally {
            setLoad(true);
        }
    };

    return (
        <AQIContext.Provider value={{ city, setCity, cards, loading, setLoading, load }}>
            {children}
        </AQIContext.Provider>
    );
};

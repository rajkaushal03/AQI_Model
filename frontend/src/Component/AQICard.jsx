import React from 'react'

const AQICard = ({ city }) => {
    console.log(city);
    return (
        <div className="bg-neutral p-4 rounded-xl shadow-md w-64 text-white">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{city.city}</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-400 mt-2">{city.yearly["2025"]}</p>
            <div className="mt-2 flex justify-between text-sm text-gray-300">
                <p>Temp. <span className="font-semibold">{city.temperature}</span></p>
                <p>Hum. <span className="font-semibold">{city.humidity}</span></p>
            </div>
        </div>
    );
};

export default AQICard

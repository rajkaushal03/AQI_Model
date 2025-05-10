import React from 'react'

const AQICard = ({ city }) => {



    return (
        <>
            <div className="bg-neutral p-4 rounded-xl shadow-md  xl:w-64 sm:w-60 w-full  text-white">
                <div className="flex justify-between items-center">
                    <h2 className="lg:text-xl text-md font-semibold uppercase">{city.city}</h2>
                </div>
                <p className="xl:text-3xl text-lg font-bold text-yellow-400  ">{city.aqi}</p>
                <div className="mt-2 flex justify-between lg:text-sm text-xs text-error">
                    <p>Risk: <span className={`font-semibold ${city.risk_class == "Low" ? "text-success" : (city.risk_class == "Moderate" ? "text-warning" : "text-error")}`}>{city.risk_class}</span></p>
                    <p>ImpactScore: <span className="font-semibold text-white ">{city?.health_score?.toFixed(0)}</span></p>
                </div>

                <div className="mt-2 flex justify-between lg:text-sm text-xs text-error">
                    <p>PM 10: <span className={`font-semibold   text-white`}>{city.pm10}</span></p>
                    <p>PM 2.5: <span className="font-semibold  text-white">{city.pm2_5}</span></p>
                </div>
                
            </div>

        </>
    );
};

export default AQICard

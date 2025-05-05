import React from 'react'

const AQICard = ({ city }) => {



    return (
        <>
            <div className="bg-neutral p-4 rounded-xl shadow-md  w-64 text-white">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold uppercase">{city.city}</h2>
                </div>
                <p className="lg:text-3xl text-xl font-bold text-yellow-400 mt-2 ">{city.aqi}</p>
                <div className="mt-2 flex justify-between text-sm text-error">
                    <p>Risk: <span className={`font-semibold ${city.risk_class == "Low" ? "text-success" : (city.risk_class == "Moderate" ? "text-warning" : "text-error")}`}>{city.risk_class}</span></p>
                    <p>ImpactScore: <span className="font-semibold text-white ">{city?.health_score?.toFixed(0)}</span></p>
                </div>

                <div className="mt-2 flex justify-between text-sm text-error">
                    <p>PM 10: <span className={`font-semibold   text-white`}>{city.pm10}</span></p>
                    <p>PM 2.5: <span className="font-semibold  text-white">{city.pm2_5}</span></p>
                </div>
                {/* <div className="mt-2 flex gap-2 text-sm text-error">
                    <p>NO2: <span className={`font-semibold  text-white`}>{city.no2}</span></p>
                    <p>O3: <span className="font-semibold text-white">{city.o3}</span></p>
                    <p>SO2: <span className="font-semibold text-white">{city.so2}</span></p>
                </div> */}
            </div>

        </>
    );
};

export default AQICard

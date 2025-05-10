import AQICard from "@/Component/AQICard";
import { useAQIContext } from "@/context/AQIContext"


const CityCard = () => {
  const { cards, load } = useAQIContext();
  const test = new Array(9).fill(0)

  return (
    <div className="flex lg:flex-row flex-col justify-between  md:p-8 p-4 gap-8  bg-base-100">
      <div className="lg:w-1/2">
        <div className="lg:text-3xl sm:text-xl text-sm font-bold sm:p-2 text-accent">Problems & Situations</div>
        <p className=" lg:w-[75%] xl:text-xl sm:text-sm lg:text-sm text-xs sm:p-2">Traditional pollution prediction models often fall short in accuracy due to their inability to handle the uncertainty and non-linear patterns inherent in environmental data. This results in unreliable forecasts and inadequate assessment of health risks, limiting timely interventions and preventive measures. As urban pollution continues to rise, vulnerable populations face an increased risk of respiratory and cardiovascular diseases. A more robust and intelligent system is needed to bridge this gap and enable accurate predictions and risk mitigation strategies.</p>
        <div className="text-sm sm:p-2 py-2 flex flex-col gap-3 text-success">
          <div className="lg:text-2xl font-semibold text-md text-warning">Dataset Features:</div>
          <span className="text-xs sm:text-md lg:text-lg">AQI,
            PM10,
            PM2.5,
            NO2,
            SO2,
            O3,</span>
          <span className="text-xs sm:text-md  lg:text-lg">Health Impact Score,
            Health Impact Class</span>
        </div>

      </div>

      {load ? <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2   gap-8 ">
        {cards.map((card) => (
          <AQICard key={card.city} city={card} />
        ))}
      </div> :
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
          {test.map((card, index) => (
            <div className="skeleton h-44  xl:w-64 sm:w-60 w-full  gap-2" key={index}></div>
          ))}
        </div>}
    </div>
  )
}

export default CityCard

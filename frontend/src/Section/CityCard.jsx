import AQICard from "@/Component/AQICard";
import { useAQIContext } from "@/context/AQIContext"


const CityCard = () => {
  const { cards, load } = useAQIContext();
  const test = new Array(9).fill(0)

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center p-8 gap-8  bg-base-100">
      <div className="lg:w-1/2">
        <div className="lg:text-3xl text-xl font-bold p-2 text-accent">Problems & Situations</div>
        <div className=" w-[75%] p-2">Traditional pollution prediction models often fall short in accuracy due to their inability to handle the uncertainty and non-linear patterns inherent in environmental data. This results in unreliable forecasts and inadequate assessment of health risks, limiting timely interventions and preventive measures. As urban pollution continues to rise, vulnerable populations face an increased risk of respiratory and cardiovascular diseases. A more robust and intelligent system is needed to bridge this gap and enable accurate predictions and risk mitigation strategies.</div>
        <div className="text-sm p-2 flex flex-col gap-3 text-success">
          <div className="lg:text-2xl font-semibold text-md text-warning">Dataset Features:</div>
          <span>AQI,
            PM10,
            PM2.5,
            NO2,
            SO2,
            O3,</span>
          <span>Health Impact Score,
            Health Impact Class</span>
        </div>

      </div>

      {load ? <div className="grid grid-cols-3  gap-8 ">
        {cards.map((card) => (
          <AQICard key={card.city} city={card} />
        ))}
      </div> :
        <div className="grid grid-cols-3  gap-8 ">
          {test.map((card, index) => (
            <div className="skeleton h-44 w-64 gap-2" key={index}></div>
          ))}
        </div>}
    </div>
  )
}

export default CityCard

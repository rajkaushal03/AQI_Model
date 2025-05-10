import BarChart from "./BarChart"

const CityGraph = ({ city }) => {
  return (
    <div className="bg-base-100 p-4 rounded-xl shadow-md   text-white  flex flex-col  ">
      <div className="flex justify-between items-center">
        <h2 className="md:text-4xl font-bold uppercase">{city.city}</h2>
      </div>


      <div className="mt-2 flex sm:flex-row flex-col  justify-between sm:items-center text-sm text-error w-96 h-16 lg:text-3xl">
        <p className="lg:text-3xl text-xl font-bold text-yellow-400 mt-2 "><span className='text-accent'>AQI </span><span className='text-white'>:</span> {city.aqi}</p>
        <p className='font-bold'> <span className={`font-bold ${city.risk_class == "Low" ? "text-success" : (city.risk_class == "Moderate" ? "text-warning" : "text-error")}`}>{city.risk_class}</span></p>
      </div>
      <div className="item-end">
        <BarChart cityData={city} />
      </div>
    </div>

  )
}

export default CityGraph

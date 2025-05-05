import React from 'react'
import NavBar from './Component/NavBar'
import FinalEarth from './earth/FinalEarth'
import FormSection from './Section/FormSection'
import CityCard from './Section/CityCard'
import { useAQIContext } from './context/AQIContext'
import CityGraph from './Component/CityGraph'

const App = () => {
  const { city,loading} = useAQIContext(); // Assuming you have a context to get the city data
  return (
    <>
      <div className=" bg-black">
        <NavBar />
        <div className="flex justify-around  items-center xl:gap-54 p-4 md:p-8 bg-neutral  ">
          <div className='z-2 flex flex-col md:p-4 gap-5 xl:gap-10 justify-center items-start '>
            <div className='flex flex-col xl:gap-4 md:text-3xl xl:text-5xl font-bold  text-white'>Predictive Modelling to <span>Mitigate</span> <span> Public Health Risks...</span></div>
            <p className='w-[80%] leading-relaxed text-[10px] sm:text-xs lg:text-sm xl:text-lg text-accent'>Air pollution is a growing concern in India, affecting millions daily. Our platform leverages Fuzzy Deep Learning & AI to provide accurate Air Quality Index (AQI) predictions for various states and cities.</p>

          </div>
          <FinalEarth />
        </div>
        <CityCard />
        <div className=' flex md:flex-row flex-col gap-4 md:justify-between md:items-center p-4  lg:p-8 bg-neutral'>
          <FormSection />
          {!loading ? <CityGraph city={city}  /> : <div className="skeleton h-96 w-1/3"></div>}
          
        </div>
      </div>
    </>
  )
}

export default App

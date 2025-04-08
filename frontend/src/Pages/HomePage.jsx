import NavBar from '../Component/navbar'
import FinalEarth from '../earth/FinalEarth'
import CityCard from './CityCard'
import AQIDashboard from './AQIDashboard'
import FormSection from './FormSection'

const HomePage = () => {
    return (
        <div className="">
            <NavBar />
            <div className="flex justify-around  items-center xl:gap-54 p-8 bg-neutral  ">
                <div className=' flex flex-col p-4 gap-5 xl:gap-10 justify-center items-start '>
                    <div className='flex flex-col xl:gap-4 md:text-3xl xl:text-7xl font-bold  text-white'>Predictive Modelling to <span>Mitigate</span> <span> Public Health Risks...</span></div>
                    <p className='w-[80%] leading-relaxed text-xs lg:text-sm xl:text-lg text-gray-400'>Air pollution is a growing concern in India, affecting millions daily. Our platform leverages Fuzzy Deep Learning & AI to provide accurate Air Quality Index (AQI) predictions for various states and cities.</p>

                </div>
                <FinalEarth />
            </div>
            {/* <CityCard /> */}
            <div className=' flex justify-around items-center p-8'>
                <FormSection />
                <AQIDashboard />
            </div>
        </div>
    )
}

export default HomePage;

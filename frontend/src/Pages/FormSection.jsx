import { useAQIContext } from "@/context/AQIContext";

function FormSection() {

  const { setCity,loading,setLoading } = useAQIContext();


  // useEffect(() => {
  //   handleSubmit("delhi");
  // }, [])

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/aqi/${e.target.city.value}`);
      const data = await response.json();
      setCity(data);
      console.log("AQI Response:", data);
    } catch (error) {
      console.error("Error fetching AQI:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex flex-col  gap-4 leading-loose w-1/2 ">

      <div className="font-bold text-accent text-3xl">Check Air Quality in Your City...</div>
      <p className="">
        Enter your city name below to check the current Air Quality Index (AQI). Knowing your city's air quality helps you make better decisions for your health, whether you're planning to go for a jog, commute, or simply step outside. Stay aware, stay protected.
      </p>
      <em className="text-error">“Breathe safe, stay informed — know your city’s air before you step out.”</em>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row gap-4 "
      >
        <input
          name="city"
          type="search"
          required
          placeholder="Search by City..."
          className="input input-bordered w-full sm:w-2/3"
        />
        <button
          type="submit"
          className="btn btn-accent w-full sm:w-auto flex items-center justify-center gap-2"
        >
          {loading && (
            <span className="loading loading-dots loading-sm"></span>
          )}
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
    </div>
  );
}

export default FormSection;

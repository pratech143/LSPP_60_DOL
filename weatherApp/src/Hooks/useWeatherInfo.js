import { useEffect,useState } from "react";

function useWeatherInfo(country){
    const [weather,setWeather]=useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{
        
        if(!country){
            return 
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=4e8abbad1fb04036061be603acf0dabd&units=metric`)
        .then((res)=>res.json())
        .then((data)=>setWeather(data))
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            setError("Error fetching weather data");
        }
        )
    
    },[country])
    return weather;
}
export default useWeatherInfo; 
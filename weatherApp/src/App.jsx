
import { useEffect, useState } from 'react';
import './CSS/App.css'

import useWeatherInfo from './Hooks/useWeatherInfo'

function App() {
  let imagesrc;
  let day;
  const [country, setCountry] = useState("Nepal");
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [input, setInput] = useState("")
  const weatherInfo = useWeatherInfo(country);
  console.log(weatherInfo);
  if (weatherInfo){ imagesrc=`/weatherIcons/${weatherInfo.weather[0].icon}.png`
  let time=weatherInfo.weather[0].icon;
  console.log(time);

  if(time.charAt(time.length -1)=="n"){
    day="It is night time "
  }
  else{
    day="It is day time "
  }
}

  function onCountryChange() {
    useEffect(() => {
      if (weatherInfo) {
        setHumidity(weatherInfo.main.humidity)
        setTemperature(weatherInfo.main.temp)
        setWind(weatherInfo.wind.speed)
        console.log(weatherInfo.cod)
      }
    // }
    }, [weatherInfo])
  }

  return (
    <>
      <div className='weather-app'>
        <div className="weather-card">
          <div><input 
          onChange={(e)=>setInput(e.target.value)} type="text" name="" id="" />
            <button className='search'
              onClick={(e) => {
                setCountry(input)
                
              }}>Search</button></div>
          <div className='weather-image'><img src={imagesrc} alt="" height={"150vh"} width={"150vw"} /></div>
           <p className='day'>{day}</p>
          <h2 style={{fontSize:"xxl"}}
          className="country"
            onChange={onCountryChange()}>{country}</h2>
              <div>
            
          </div>
          <div className="weather-info">
            <p><span className="label">Temperature:</span> {temperature}<sup>°C</sup></p>
            <p><span className="label">Humidity:</span> {humidity}%</p>
            <p><span className="label">Wind:</span> {wind} km/h</p>
          </div>
        </div>
      </div>
    </>
  );

}

export default App

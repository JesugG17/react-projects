// import { mapboxInstance } from "./api/mapbox.api"
import { useState } from 'react'
import axios from 'axios';
import { Feature, MapboxAPI } from "./interfaces/mapbox.interface";
import { OpenWeatherAPI, Weather } from './interfaces/openWeather.interface';


export const WeatherApp = () => {
    
    const [features, setFeatures] = useState<Feature[]>([]);
    const [weather, setWeather] = useState<Weather>();
    const [city, setCity] = useState<string>('');

    const handleSearch = async() => {
        const { data } = await axios.get<MapboxAPI>('https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoiamNzdXMxNyIsImEiOiJjbDlxYTZma2IwNGlhM3BxbWlpNGI4cW5wIn0.VWLwlEWhlzmtIWEVbvsBsg');
        setFeatures(data.features);
    }

    const handleWeather = async(coords: number[]) => {
        const [lat, lon] = coords;

        const { data } = await axios.get<OpenWeatherAPI>(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=ea7e471915ba3199a20637b94a26cd56`)
        const { weather } = data;

        setWeather(weather[0]);
        setFeatures([]);
    }

  return (
    <main className='main_container'>
        
        <div className='card_container'>
            
            <header className="card_header">
                <form>
                    <input 
                        placeholder="Enter a city name"
                    />
                </form>
                <button
                    onClick={ handleSearch }
                >Search</button>
            </header>

            <section className="card_weather">
                {
                    features.length > 0 &&
                    features.map( (feature, index) => (
                        <div
                            key={ index }
                            onClick={() => handleWeather(feature.center)}
                            className='pointer'
                        >
                            <h3>{ feature.place_name }</h3>
                        </div>
                    ))
                }
                {
                    weather &&
                    <div>
                        <h3>{}</h3>
                        <p>{weather.description}</p>
                        <p>{weather.main}</p>
                    </div>
                }
            </section>
            
        </div>

    </main>
  )
}
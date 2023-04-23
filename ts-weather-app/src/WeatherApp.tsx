// import { mapboxInstance } from "./api/mapbox.api"
import { SyntheticEvent, useState } from 'react'
import axios from 'axios';
import { Feature, MapboxAPI } from './interfaces/mapbox.interface';
import { OpenWeatherAPI, Weather } from './interfaces/openWeather.interface';
import { openWeatherInstance, mapboxInstance } from './api';


export const WeatherApp = () => {
    
    const [features, setFeatures] = useState<Feature[]>([]);
    const [formState, setFormState] = useState('');
    const [weather, setWeather] = useState<Weather>();
    const [city, setCity] = useState('');

    const handleSearch = async(event: SyntheticEvent) => {
        event.preventDefault();
        const { data } = await mapboxInstance.get<MapboxAPI>(`${formState}.json`);;
        setFeatures(data.features);
    }

    const handleWeather = async(coords: number[]) => {
        const [lat, lon] = coords;
        const { data } = await openWeatherInstance.get<OpenWeatherAPI>(`weather?lat=${ lat }&lon=${ lon }`);
        const { weather } = data;

        setWeather(weather[0]);
        setFeatures([]);
    }

    const handleChange = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;

        setFormState(target.value);
    }

  return (
    <main className='main_container'>
        
        <div className='card_container'>
            
            <header className="card_header">
                <form onSubmit={ handleSearch }>
                    <input 
                        placeholder="Enter a city name"
                        value={ formState }
                        onChange={ handleChange }
                    />
                </form>
                <button
                    type='submit'
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
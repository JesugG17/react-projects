// import { mapboxInstance } from "./api/mapbox.api"
import { SyntheticEvent, useState } from 'react'
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

        setCity(formState);
        setFormState('');
        setWeather(undefined);
        setFeatures(data.features);
    }

    const handleWeather = async(coords: number[]) => {
        try {
            const [lat, lon] = coords;
            const { data } = await openWeatherInstance.get<OpenWeatherAPI>(`weather?lat=${ lat }&lon=${ lon }`);
            const [ weather ] = data.weather;
            setWeather(weather);
        } catch (error) {
            setWeather({
                id: 0,
                description: 'No city information found!',
                main: 'Nothing to show',
                icon: 'no-one'
            })
        }
        setFeatures([]);

    }

    const handleChange = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;

        setFormState(target.value);
    }

  return (
    <main className='main_container'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
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
                    className='pointer'
                    onClick={ handleSearch }
                >
                    Search
                </button>
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
                    <div className='weather_information'>
                        <h3>{ city }</h3>
                        <p>{weather.main}</p>
                        <p>{weather.description}</p>
                        <img src={`assets/${ weather.main }.png`} alt={ `${ city } weather`}/>
                    </div>
                }
            </section>
            
        </div>

    </main>
  )
}
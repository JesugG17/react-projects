import { SyntheticEvent, useState } from 'react'
import { openWeatherInstance, mapboxInstance } from './api';
import { Feature, MapboxAPI, OpenWeatherAPI, Weather } from './interfaces';
import { WeatherInformation, WeatherOptions, WeatherSearch } from './components';

export const WeatherApp = () => {
    
    const [features, setFeatures] = useState<Feature[]>([]);
    const [weather, setWeather] = useState<Weather>();
    const [city, setCity] = useState('');

    const handleSearch = async(event: SyntheticEvent, formState: string) => {
        event.preventDefault();
        const { data } = await mapboxInstance.get<MapboxAPI>(`${formState}.json`);;

        setCity(formState);
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

  return (
    <main className='main_container'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='card_container'>
            
            <WeatherSearch 
                handleSearch={ handleSearch }
            />

            <section className='card_weather'>

                {
                    features.length > 0 &&
                    <WeatherOptions 
                        features={ features }
                        handleWeather={ handleWeather }
                    />
                }

                {
                    weather &&
                    <WeatherInformation 
                        city={ city }
                        weather={ weather }
                    />
                }
                
            </section>
            
        </div>

    </main>
  )
}
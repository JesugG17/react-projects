import { useState, SyntheticEvent } from 'react';
import { Feature, MapboxAPI, OpenWeatherAPI, Weather } from '../interfaces';
import { mapboxInstance, openWeatherInstance } from '../api';

export const useWeather = () => {
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
            });
        }
        setFeatures([]);

    }

    return {
        features,
        weather,
        city,
        handleSearch,
        handleWeather
    }

}

import { useWeather } from './hooks';
import { WeatherInformation, WeatherOptions, WeatherSearch } from './components';

export const WeatherApp = () => {
    
    const { features, city, weather, handleSearch, handleWeather } = useWeather();

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
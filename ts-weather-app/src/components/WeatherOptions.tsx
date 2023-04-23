import { Feature } from '../interfaces/mapbox.interface';
import { WeatherOptionItem } from './WeatherOptionItem';

interface Props {
    features: Feature[];
    handleWeather: (coords: number[]) => Promise<void>;
}

export const WeatherOptions = ({ features, handleWeather }: Props) => {
  return (
    <div className="weather_options_container">
      <h3>Choice one option!</h3>
      {
        features.map((feature, index) => (
            <WeatherOptionItem 
                key={ index }
                feature={ feature }
                handleWeather={ handleWeather }
            />
        ))
      }
    </div>
  );
};

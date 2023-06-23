import { Feature } from '../interfaces/mapbox.interface';

interface Props {
    feature: Feature;
    handleWeather: (coords: number[]) => Promise<void>;
}

export const WeatherOptionItem = ({ feature, handleWeather }: Props) => {
  return (
    <div
      onClick={() => handleWeather(feature.center)}
      className='animate__animated animate__fadeIn weather_options pointer'
    >
      <p>{feature.place_name}</p>
    </div>
  );
};

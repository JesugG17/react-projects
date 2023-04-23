import { Weather } from "../interfaces/openWeather.interface";

interface Props {
    city: string;
    weather: Weather;
}

export const WeatherInformation = ({ city, weather }: Props) => {
  return (
    <div className="weather_information">
      <h3>{city}</h3>
      <p>{weather.main}</p>
      <p>{weather.description}</p>
      <img src={`assets/${weather.main}.png`} alt={`${city} weather`} />
    </div>
  );
};

import { FC } from "react";
import { useNavigate } from "react-router";
import { Country } from "../../types/country.interface";
import { useTheme } from '../../hooks';

export const CountryCard: FC<Props> = ({ country }) => {
  
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  
  return (
    <li
      onClick={() => navigate(`/detail/${country.name}`)}
      className={` place-self-center w-3/4 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5 transition-all duration-200 hover:brightness-105 md:w-full md:h-full ${isDarkTheme && 'bg-primary-dark'} `}
      key={country.name}
    >
      <picture className="rounded-lg">
        <img
          className="rounded-t-lg w-full md:h-1/2"
          src={country.flag}
          alt={`${country.name} flag`}
        />
      </picture>
      <div className={`flex flex-col p-6 gap-4 ${ isDarkTheme && 'text-white'} `}>
        <h4 className="font-medium">{country.name}</h4>
        <div>
          <p className="dark:text-slate-300">
            <strong className="dark:text-white">Population</strong>:{" "}
            {country.population}
          </p>
          <p className="dark:text-slate-300">
            <strong className="dark:text-white">Region</strong>: {country.region}
          </p>
          <p className="dark:text-slate-300">
            <strong className="dark:text-white">Capital</strong>: {country.capital}
          </p>
        </div>
      </div>
    </li>
  );
};

type Props = {
  country: Country;
};

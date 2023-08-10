import { useNavigate } from "react-router";
import { Country } from "../../types/country.interface";
import { FC } from "react";

export const CountryCard: FC<Props> = ({ country }) => {
  
  const navigate = useNavigate();
  
  return (
    <li
      onClick={() => navigate(`/detail/${country.name}`)}
      className="bg-primary-dark  w-3/4 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5 transition-all duration-200 hover:brightness-105 md:w-full md:h-full"
      key={country.name}
    >
      <picture className="rounded-lg">
        <img
          className="rounded-t-lg w-full object-cover h-1/2"
          src={country.flag}
          alt={`${country.name} flag`}
        />
      </picture>
      <div className="flex flex-col p-6 gap-4 text-white">
        <h4 className="font-medium">{country.name}</h4>
        <div>
          <p className="text-slate-300">
            <strong className="text-white">Population</strong>:{" "}
            {country.population}
          </p>
          <p className="text-slate-300">
            <strong className="text-white">Region</strong>: {country.region}
          </p>
          <p className="text-slate-300">
            <strong className="text-white">Capital</strong>: {country.capital}
          </p>
        </div>
      </div>
    </li>
  );
};

type Props = {
  country: Country;
};

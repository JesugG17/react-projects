import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { LeftArrowIcon } from "../components/ui/Icons";
import { getCountryByName } from "../utils/getCountryByName";

export const Detail = () => {
  const params = useParams();
  const country = getCountryByName(params.id as string);
  window.scrollTo({ top: 0 });

  return (
    <section className="flex flex-col gap-10 p-4">
      <header className="self-start">
        <Link
          className="flex gap-3 justify-center px-4 py-1 items-center text-white text-xs bg-primary-dark shadow-lg rounded hover:brightness-105 transition-all duration-200 md:px-6 md:py-2"
          to="/home"
        >
          <LeftArrowIcon />
          Back
        </Link>
      </header>
      <main className="flex flex-col gap-10 text-white md:flex-row">
        <picture className="md:w-3/4 md:self-center xl:w-2/4">
          <img
            className="object-cover w-full"
            src={country?.flag}
            alt={`${country?.name} flag`}
          />
        </picture>
        <div className="flex flex-col gap-10 lg:flex-1">
          <h4 className="font-medium">{country?.name}</h4>
          <div className="w-full flex flex-col gap-10 md:flex-row md:gap-20 text-xs md:text-base">
            <article className="flex flex-col gap-2">
              <p className="text-slate-300">
                <strong className="text-white">Native name:</strong>{" "}
                {country?.nativeName}
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Population:</strong>{" "}
                {country?.population}
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Region:</strong>{" "}
                {country?.region}
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Sub Region:</strong>{" "}
                {country?.subregion}
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Capital:</strong>{" "}
                {country?.capital}
              </p>
            </article>
            <article className="flex flex-col gap-2">
              <p className="text-slate-300">
                <strong className="text-white">Top Level Domain:</strong>{" "}
                {country?.topLevelDomain}
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Currencies:</strong> {}
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Languages</strong> {"some"}
              </p>
            </article>
          </div>
          <footer className="flex flex-col gap-4">
            <h4>Border countries:</h4>
            <ul className="flex gap-2 text-xs flex-wrap">
              {country?.borders?.map((borderCountry) => (
                <li
                  className="bg-primary-dark w-1/4 px-6 py-1 text-center text-gray-400"
                  key={borderCountry}
                >
                  {borderCountry}
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </main>
    </section>
  );
};

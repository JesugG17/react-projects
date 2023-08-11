import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { LeftArrowIcon } from "../components/ui/Icons";
import { getCountryByName } from "../utils/getCountryByName";
import { useTheme } from "../hooks";

export const Detail = () => {
  const params = useParams();
  const { isDarkTheme } = useTheme();
  const country = getCountryByName(params.id as string);
  window.scrollTo({ top: 0 });

  return (
    <section className="flex flex-col gap-10 p-4 min-h-screen">
      <header className="self-start">
        <Link
          className={`flex gap-3 justify-center px-4 py-1 items-center  text-xs shadow-lg rounded hover:brightness-105 transition-all duration-200 md:px-6 md:py-2 ${ isDarkTheme && 'bg-primary-dark text-white'}`}
          to="/home"
        >
          <LeftArrowIcon />
          Back
        </Link>
      </header>
      <main className={`flex flex-col gap-10 md:flex-row ${isDarkTheme && 'text-white'} `}>
        <picture className="md:w-3/4 md:self-center xl:w-2/4">
          <img
            className="object-cover w-full"
            src={country?.flag}
            alt={`${country?.name} flag`}
          />
        </picture>
        <div className="flex flex-col gap-10 lg:flex-1">
          <h4 className="font-medium">{country?.name}</h4>
          <div className={`w-full flex flex-col gap-10 md:flex-row md:gap-20 text-xs md:text-base ${isDarkTheme && 'text-white'}`}>
            <article className="flex flex-col gap-2">
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Native name:</strong>{" "}
                {country?.nativeName}
              </p>
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Population:</strong>{" "}
                {country?.population}
              </p>
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Region:</strong>{" "}
                {country?.region}
              </p>
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Sub Region:</strong>{" "}
                {country?.subregion}
              </p>
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Capital:</strong>{" "}
                {country?.capital}
              </p>
            </article>
            <article className="flex flex-col gap-2">
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Top Level Domain:</strong>{" "}
                {country?.topLevelDomain}
              </p>
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Currencies:</strong> {}
              </p>
              <p className="dark:text-slate-300">
                <strong className="dark:text-white">Languages</strong> {"some"}
              </p>
            </article>
          </div>
          <footer className="flex flex-col gap-4">
            <h4>Border countries:</h4>
            <ul className="flex gap-2 text-xs flex-wrap">
              {country?.borders?.map((borderCountry) => (
                <li
                  className={`shadow-lg w-1/4 font-medium px-6 py-1 text-center ${isDarkTheme && 'bg-primary-dark text-white'}`}
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

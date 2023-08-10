import { useFilter } from '../../hooks/useFilter';
import { Country } from '../../types/country.interface';
import { CountryCard } from './CountryCard';


export const Countries = () => {

  const { countries } = useFilter();

  return (
    <section className='w-full'>
      <ul className='grid grid-cols-1 gap-5 items-center md:flex-row md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4'>
        {
          countries.map( country => (
            <CountryCard 
              key={country.name}
              country={country as Country}
            />
          ))
        }
      </ul>
    </section>
  )
}

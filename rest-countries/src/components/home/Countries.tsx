import data from '../../mocks/data.json';
import { Country } from '../../types/country.interface';
import { CountryCard } from './CountryCard';


export const Countries = () => {
  return (
    <section className='w-full'>
      <ul className='flex flex-col gap-5 items-center md:flex-row md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4'>
        {
          data.slice(0, 10).map( country => (
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

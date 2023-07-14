import { useMemo, useState } from 'react';
import { Earth } from './Icons';
import { useJobs } from '../hooks/useJobs';

export const Filters = () => {

  const { filterJobs, allJobs } = useJobs();
  const [checked, setChecked] = useState(false);
  const [citySelected, setCitySelected] = useState('All cities');
  const [cityInput, setCityInput] = useState('');

  const differentCities = useMemo(() => {
    const cities = allJobs.map( job => job.job_city as string);
    const differentCities = cities.filter( (city, index) => cities.indexOf(city) === index && city !== null);
    differentCities.unshift('All cities');
    return differentCities;
  }, []);
  
  return (
    <aside className="w-full sm:w-1/4 text-violet-custom flex flex-col gap-3">
      <div>
        <input
          checked={checked}
          onChange={() => {
            const newChecked = !checked;
            filterJobs({ filterBy: 'job_employment_type', value: newChecked ? 'FULLTIME' : 'all' });
            setCitySelected('all cities');
            setChecked(newChecked);
          }}
          type="checkbox" 
        />
        <label htmlFor=""> Full time</label>
      </div>
      <div>
        <h4 className='text-text font-bold mb-1'>LOCATION</h4>
        <div className='flex items-center bg-white px-2 border-2 border-violet-custom rounded-md'>
          <Earth />
          <input
            className='w-full p-3 focus:outline-none' 
            placeholder="Find by city" 
            type="text" 
            value={ cityInput }
            onChange={(event) => {
              const value = event.target.value;
              setCityInput(value)
              filterJobs({ filterBy: 'job_city', value: value.length > 0 ? value : 'all' });
            }}
          />
        </div>
      </div>
      <ul>
        
        {
          differentCities.map( (city) => (
            <li
              className='flex gap-3 font-medium' 
              key={ city }
            >
              <input
                checked={ city === citySelected }
                onClick={() => setCitySelected(city)}
                className='w-4' 
                type="radio" name='city'
                onChange={() => {
                  filterJobs({ filterBy: 'job_city', value: city === 'All cities' ? 'all' : city});
                  setChecked(false);
                }}
              />
              <label>{ city }</label>
            </li>
          ))
        }
      </ul>
    </aside>
  );
};

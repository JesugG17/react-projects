import { useEffect, useState } from 'react';
import { Earth } from './Icons';
import { useJobs } from '../hooks/useJobs';

export const Filters = () => {

  const { filterJobs, jobs } = useJobs();
  const [checked, setChecked] = useState(false);
  const cities = jobs.map( job => job.job_city);
  const differentCities = cities.filter( (city, index) => cities.indexOf(city) === index && city !== null);

  useEffect(() => {
    filterJobs({ filterBy: 'job_employment_type', value: 'FULLTIME'})
  }, [checked]);

  return (
    <aside className="w-1/4 text-violet-custom flex flex-col gap-3">
      <div>
        <input
          checked={checked}
          onChange={() => setChecked(!checked)}
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
            placeholder="City, state, zip code or country" 
            type="text" 
          />
        </div>
      </div>
      <ul>
        
        {
          differentCities.map( city => (
            <li
              className='flex gap-3 font-medium' 
              key={ city }
            >
              <input className='w-4' type="radio" name='city'/>
              <label>{ city }</label>
            </li>
          ))
        }
      </ul>
    </aside>
  );
};

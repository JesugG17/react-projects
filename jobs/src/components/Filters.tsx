import { FC } from 'react';
import { Job } from '../types/jobs.interface';
import { FaFileWord } from 'react-icons/fa';

export const Filters: FC<Props> = ({ jobs }) => {

  const cities = jobs.map( job => job.job_city);
  const differentCities = cities.filter( (city, index) => cities.indexOf(city) === index && city !== null);

  return (
    <aside className="w-1/4 text-violet-custom flex flex-col gap-3">
      <div>
        <input type="checkbox" />
        <label htmlFor=""> Full time</label>
      </div>
      <div>
        <h4 className='text-text font-bold mb-1'>LOCATION</h4>
        <div className='flex items-center bg-white px-2 border-2 border-violet-custom rounded-md'>
          <img
            className='object-contain w-4 h-4' 
            src="/earth.png" 
            alt=""
          />
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

type Props = {
  jobs: Job[];
}

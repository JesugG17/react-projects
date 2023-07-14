import { FC, useMemo } from 'react'
import { useNavigate } from 'react-router';
import { DateTime } from 'luxon';
import { Job } from "../types/jobs.interface";
import { getJobNormalized } from '../utils/getJobNormalized';
import { Clock, Earth } from './Icons';
import { useScreen } from '../hooks/useScreen';

export const defaultImage = "/defaultLogo.jpg";

export const JobCard: FC<Props>  = ({ job }) => {

    const navigate = useNavigate();
    const screen = useScreen();

    const titleJob = useMemo(() => {
      return getJobNormalized(job.job_title, screen)
    }, [screen]);

    const employerName = job.employer_name.split(' ').slice(0,2).join(' ');
;
    const onNavigate = () => {
      const jobId = job.job_id;
      navigate(`/jobs/${jobId}`);
    }

    const now = DateTime.fromISO(new Date().toISOString());
    const jobPosted = DateTime.fromISO(job.job_posted_at_datetime_utc);
    const { days } = now.diff(jobPosted, 'days').toObject();

  return (
    <li
      onClick={onNavigate} 
      className="min-w-full h-[147px] lg:h-[114px] justify-between rounded-md flex flex-col lg:flex-row mt-4 bg-white p-2 cursor-pointer hover:bg-slate-50"
    >
      <div className='flex gap-2 lg:gap-3 lg:w-3/5  text-violet-custom'>
        <img
          className='w-[90px] h-[90px] object-contain rounded' 
          src={ job.employer_logo  ?? '/defaultLogo.jpg' } 
          alt={`${job.employer_name} logo`} 
        />
        <div className='flex flex-col gap-1 lg:gap-1'>
          <p className='font-bold text-[12px]'>{ employerName }</p>
          <h2 className='font-bold text-[16px] lg:text-[18px] '>{ titleJob }</h2>
          {
            job.job_employment_type === 'FULLTIME' &&
            (<p className='border-2 border-violet-custom w-[63px] text-center text-[12px] font-bold rounded mt-2 lg:mt-0'>Full time</p>)
          }
        </div>
      </div>
      <div className="h-full w-full lg:w-2/5 flex items-end justify-end gap-5 mr-3  mt-1">
        {
          job.job_city !== null && 
          (
          <div className='flex items-center gap-2'>
            <Earth opacity='30'/>
            <p className="text-gray-300 text-xs">{ job.job_city }</p>
          </div>
          )
        }
        <div className='flex items-center gap-2'>
          <Clock />
          <p className="text-text text-xs">{ Math.ceil(days as number) } days ago</p>
        </div>
      </div>
    </li>
  );
};

type Props = {
    job: Job
}

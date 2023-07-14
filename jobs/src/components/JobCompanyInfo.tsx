import { FC } from 'react';
import { Job } from "../types/jobs.interface";
import { JobDescription } from "./JobDescription";
import { Clock, Earth } from './Icons';
import { DateTime } from 'luxon';

export const JobCompanyInfo: FC<Props> = ({ job }) => {


  const now = DateTime.fromISO(new Date().toISOString());
  const jobPosted = DateTime.fromISO(job.job_posted_at_datetime_utc);
  const { days } = now.diff(jobPosted, 'days').toObject();

  return (
    <div className="w-full md:w-3/4 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-6 ">
        <div className='flex flex-col gap-3'>
          <h3 className="text-violet-custom font-bold text-2xl">
            {job.job_title}
          </h3>
          <div className='flex items-center gap-3'>
            <Clock />
            <p className="text-gray-300">{ Math.ceil(days as number) } days ago</p>
          </div>
        </div>
        {
            job.job_employment_type === 'FULLTIME' &&
            (
                <p className="w-[80px] self-start h-[30px] text-center font-bold text-sm border-2 border-violet-custom p-1 rounded-md">
                    full time
                </p>
            )
        }
      </div>
      <div className="flex gap-3">
        <img
          className="w-[52px] h-[52px] rounded-sm object-contain"
          src={job.employer_logo ?? '/defaultLogo.jpg'}
          alt=""
        />
        <div>
          <strong className="text-violet-custom">{job.employer_name}</strong>
          {
            job.job_city !== null && 
            (
            <div className='flex items-center gap-2'>
              <Earth opacity='30'/>
              <p className="text-gray-300">{ job.job_city }</p>
            </div>
            )
          }
        </div>
      </div>
      <JobDescription job={ job }/>
    </div>
  );
};

type Props = {
    job: Job,
}

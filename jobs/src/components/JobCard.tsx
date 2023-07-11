import { FC } from 'react'
import { Job } from "../types/jobs.interface";

export const defaultImage = "/defaultLogo.jpg";

export const JobCard: FC<Props>  = ({ job }) => {

    const titleJob = job.job_title.length > 40
                    ? job.job_title.substring(0, 40) + '...'
                    : job.job_title;
    console.log(job);
  return (
    <li className="min-w-full h-[114px] justify-between rounded-md flex mt-4 bg-white p-3">
      <div className="flex gap-2">
        <figure className="bg-white rounded-md p-1">
          <img
            className="w-[90px] h-[90px] object-contain"
            src={ job.employer_logo ?? defaultImage }
            alt={`${ job.employer_name} logo`}
          />
        </figure>
        <div className="flex flex-col text-violet-custom gap-2">
          <p className="font-bold text-xs">{ job.employer_name }</p>
          <h4 className="font-bold text-xl">{ titleJob }</h4>
          {
            job.job_employment_type === 'FULLTIME' &&
            (
                <p className="w-[80px] h-[30px] text-center font-bold text-sm border-2 border-violet-custom p-1 rounded-md">
                    full time
                </p>
            )
          }
        </div>
      </div>
      <div className="h-full flex items-end gap-5 mr-3 mb-3">
        <p className="text-gray-300">{ job.job_city }</p>
        <p className="text-gray-300">5 days</p>
      </div>
    </li>
  );
};

type Props = {
    job: Job
}

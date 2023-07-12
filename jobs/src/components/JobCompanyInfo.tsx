import { FC } from 'react';
import { Job } from "../types/jobs.interface";
import { JobDescription } from "./JobDescription";

export const JobCompanyInfo: FC<Props> = ({ job }) => {
  return (
    <div className="w-4/5 flex flex-col gap-5">
      <div className="flex gap-6 items-center">
        <h3 className="text-violet-custom font-bold text-2xl">
          {job.job_title}
        </h3>
        {
            job.job_employment_type === 'FULLTIME' &&
            (
                <p className="w-[80px] h-[30px] text-center font-bold text-sm border-2 border-violet-custom p-1 rounded-md">
                    full time
                </p>
            )
        }
      </div>
      <div className="flex gap-3">
        <img
          className="w-[52px] h-[52px] rounded-sm object-contain"
          src={job.employer_logo}
          alt=""
        />
        <div>
          <strong className="text-violet-custom">{job.employer_name}</strong>
          <p className="text-text text-xs">{job.job_city}</p>
        </div>
      </div>
      <JobDescription job={ job }/>
    </div>
  );
};

type Props = {
    job: Job,
}

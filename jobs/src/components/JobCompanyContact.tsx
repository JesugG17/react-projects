import { FC } from 'react';
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { Job } from '../types/jobs.interface';

export const JobCompanyContact: FC<Props> = ({ job }) => {
  return (
    <div className="w-full md:w-2/5 lg:w-1/4 flex flex-col">
      <Link
        className="font-bold text-search text-[14px] flex gap-2 items-center hover:text-search-hover transition-all duration-300"
        to="/jobs"
      >
        <FaArrowLeft />
        Back to search
      </Link>
      <p className="text-text mt-5 mb-2">How to apply</p>
      <p>
        Please email a copy of your resume and online portofolio to the
        following link:
      </p>
      <Link
        className="text-violet-custom font-medium mt-3"
        target="_blank"
        to={job.job_apply_link}
      >
        Click here!
      </Link>
    </div>
  );
};

type Props = {
    job: Job
}
import { FC } from 'react';
import { Job } from '../interfaces/job.interface';
import { useFilter } from '../hooks/useFilter';

export const Card: FC<Props> = ({ job }) => {
  const { addFilter } = useFilter();

  return (
    <section
      className={`flex flex-col lg:flex-row lg:justify-between border-l-4 relative w-4/5 max-w-3xl bg-white p-4 first:mt-8 last:mb-8 rounded shadow-opaque shadow-primary ${
        job.new && job.featured ? 'border-primary' : 'border-transparent'
      }`}
    >
      <article className="flex flex-col gap-1 mt-3 lg:flex-row lg:items-center lg:gap-4 lg:mt-0 lg:w-2/4">
        <img className="w-10 h-10 absolute -top-4 lg:relative lg:top-0 lg:w-16 lg:h-16" src={job.logo} alt="Company icon" />
        <div className="flex flex-col gap-2 lg:gap-1">
          <ul className="flex gap-2 items-center text-xs lg:text-sm">
            <li className="text-primary font-bold mr-3">{job.company}</li>
            {job.new && <li className="text-white rounded-full bg-primary py-1 px-3">NEW!</li>}
            {job.featured && <li className="bg-black text-white py-1 px-3 rounded-full">FEATURED</li>}
          </ul>
          <h2 className="font-bold text-md hover:text-primary transition-all duration-200 cursor-pointer">{job.position}</h2>
          <ul className="flex items-center gap-2 opacity-40 text-sm lg:text-base">
            <li>{job.postedAt}</li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              {job.contract}
            </li>
            <li className="flex gap-2 items-center">
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              {job.location}
            </li>
          </ul>
        </div>
      </article>
      <hr className="mt-2 mb-2 lg:hidden" />
      <ul className="flex items-center flex-wrap gap-4 text-primary font-bold">
        {[job.role, job.level, ...job.languages, ...job.tools].map((chip) => (
          <li
            onClick={() => addFilter(chip)}
            className="bg-neutral-grayish-bg p-1 cursor-pointer rounded hover:bg-primary hover:text-white transition-all duration-200"
            key={chip}
          >
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
};

type Props = {
  job: Job;
};

import { FC } from 'react';
import { Job } from '../interfaces/job.interface';

export const Card: FC<Props> = ({ job }) => {
  return (
    <section className="flex flex-col relative w-4/5 bg-white p-4 mt-8 rounded shadow">
      <img className="w-10 h-10 absolute -top-4" src={job.logo} alt="Company icon" />
      <article className="flex flex-col gap-1 mt-3">
        <div className="flex flex-col gap-2">
          <ul className="flex gap-2 items-center text-xs">
            <li className="text-primary font-bold mr-3">{job.company}</li>
            {job.new && <li className="text-white rounded-full bg-primary py-1 px-3">NEW!</li>}
            {job.featured && <li className="bg-black text-white py-1 px-3 rounded-full">FEATURED</li>}
          </ul>
          <h2 className="font-bold">{job.position}</h2>
          <ul className="flex gap-2 opacity-40 text-sm">
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </article>
      <hr className="mt-2 mb-2" />
      <ul className="flex flex-wrap gap-4 text-primary font-bold">
        {[job.role, job.level, ...job.languages, ...job.tools].map((chip) => (
          <li className="bg-neutral-grayish-bg p-1 rounded" key={chip}>
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

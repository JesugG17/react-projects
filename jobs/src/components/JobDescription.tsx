import { FC } from "react";
import { Job } from "../types/jobs.interface";

export const JobDescription: FC<Props> = ({ job }) => {
    const description = job.job_description.split('.').filter( text => text.length !== 0);
  return (
    <div className="w-full text-violet-custom flex flex-col gap-4">
      {description?.map((paragraph, index) => (
        <p className="font-medium" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

type Props = {
    job: Job;
};

import { useContext } from 'react';
import { JobsContext } from '../context/JobsContext';
import { Navigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom'

export const Job = () => {

  const { pathname } = useLocation();
  const { jobs } = useContext(JobsContext);
  const jobId = pathname.split('/')[2];
  
  const job = jobs.find( job => job.job_id === jobId );
  console.log(job?.job_description);
  const description = job?.job_description.split('.').filter( text => text.length !== 0);

  if (!job) {
    return <Navigate to='/jobs' />
  }
  
  console.log(description);
  return (
    <section className='min-h-screen flex flex-col items-center bg-background gap-1'>
        <header className='w-3/4 flex flex-col p-4 gap-5'>
            <h2 className='text-2xl mb-3 mt-2'>
              <strong>Rapid</strong> Jobs
            </h2>
        </header>
        <div className='w-3/4 flex gap-4 p-4'>
            <div className='w-1/5'>
              <Link className='font-bold text-search' to='/jobs'>Back to result</Link>
              <p className='text-text mt-5'>How to apply</p>
              <p>Please email a copy  of your resume and online portofolio ot</p>
            </div>
            <div className='w-4/5 flex flex-col gap-5'>
              <div className='flex gap-6 items-center'>
                <h3 className='text-violet-custom font-bold text-2xl'>{ job.job_title}</h3>
                <p className="w-[80px] h-[30px] text-center font-bold text-sm border-2 border-violet-custom p-1 rounded-md">
                    full time
                </p>
              </div>
              <div className='flex gap-3'>
                <img
                  className='w-[52px] h-[52px] rounded-sm object-contain' 
                  src={ job.employer_logo } 
                  alt=""
                />
                <div>
                  <strong className='text-violet-custom'>{job.employer_name}</strong>
                  <p className='text-text text-xs'>{ job.job_city }</p>
                </div>
              </div>
              <div className='w-3/4 text-violet-custom flex flex-col gap-4'>
                <h4 className='font-bold'>Humanazing digitalExperience</h4>
                {
                  description?.map( (paragraph, index) => (
                    <p
                      className='font-medium' 
                      key={index}
                    >
                      { paragraph }
                    </p>
                  ))
                }
              </div>
            </div>
        </div>
    </section>
  )
}

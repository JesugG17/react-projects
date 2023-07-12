import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
import { JobsContext } from '../context/JobsContext';
import { JobCompanyInfo } from './JobCompanyInfo';
import { JobCompanyContact } from './JobCompanyContact';

export const JobView = () => {

  const { pathname } = useLocation();
  const { jobs } = useContext(JobsContext);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const jobId = pathname.split('/')[2];
  const job = jobs.find( job => job.job_id === jobId );
  
  if (!job) {
    return <Navigate to='/jobs' />
  }
 
  
  return (
    <div className='min-h-screen flex flex-col items-center bg-background gap-1'>
        <header className='w-3/4 flex flex-col p-4 gap-5'>
            <h2 className='text-2xl mb-3 mt-2'>
              <strong>Rapid</strong> Jobs
            </h2>
        </header>
        <div className='w-3/4 flex gap-4 p-4'>
          <JobCompanyContact  
            job={ job }
          />
          <JobCompanyInfo 
            job={ job }
          />
        </div>
    </div>
  )
}

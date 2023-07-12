
export const getJobNormalized = (job: string) => {
    return job.length > 40 ? job.substring(0, 40) + '...' : job;
}

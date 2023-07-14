
export const getJobNormalized = (job: string, screen: { height: number, width: number }) => {
    const nummberOfWords = screen.width >= 750 ? 35 : 15;

    return job.length > nummberOfWords ? job.substring(0, nummberOfWords) + '...' : job;
}

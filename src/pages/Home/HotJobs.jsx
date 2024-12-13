import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='mt-16'>
            <h1 className='text-center font-bold text-xl md:text-3xl'>Available Jobs</h1>
            <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3 lg:grid-cols-4'>
                {
                    jobs.map(job => <HotJobsCard job={job}></HotJobsCard>)
                }
            </div>

        </div>
    );
};

export default HotJobs;
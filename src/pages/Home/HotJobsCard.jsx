import { p } from 'framer-motion/client';
import React from 'react';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo
    } = job;
    return (
        <div className="card bg-base-100  shadow-xl mb-3 hover:bg-slate-600 hover:text-white">
            <div className='flex gap-2 p-2 pt-4'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                    />
                </figure>
                <div>
                    <h4 className='text-2xl'>{company}</h4>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img className='w-4' src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt="" />
                        </div>
                        <div>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-sm opacity-75'>{description}</p>
                <p className='font-bold'>Requirements</p>
                <div className='flex gap-1 flex-wrap'>{
                    requirements.map(skill => <p className='p-1 text-sm hover:text-white hover:bg-blue-700 text-center border-2 rounded-2xl'>{skill}</p>)
                }</div>
                <div className="card-actions justify-end mt-3">
                    <p className='text-[14px] font-bold'>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}><button className='btn btn-primary hover:bg-green-700'>Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;
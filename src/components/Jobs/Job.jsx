import React from 'react';

const Job = ({job}) => {
    // console.log(job)
    const {id, job_title, icon, available} = job;
    
    return (
        <div className='bg-[#F9F8FF] p-8 rounded-md sm:text-center lg:text-left mb-4'>
            <div className='items-center'>
            <img className='mb-4' src={icon} alt="" />
            </div>
            
            <h2 className='font-bold'>{job_title}</h2>
            <p className='text-sm text-gray-400'>{available} Jobs available</p>
        </div>
    );
};

export default Job;
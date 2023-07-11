import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({jobCard}) => {
    // console.log(jobCard)
    const {id, icon, location, company, job_title, job_type, job_location,minimum_salary, maximum_salary} = jobCard;
    return (
        <div>
            <div className='border p-8 rounded-md'>
                <img className='h-10' src={icon} alt="" />
                <h2 className='font-bold text-xl mt-3'>{job_title}</h2>
                <h3 className='mt-1 mb-2 text-gray-500'>{company}</h3>
                <div className='flex gap-2'>
                    <p className='border-2 py-1 px-3 rounded-md text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-200'>{job_location}</p>
                    <p className='border-2 py-1 px-3 rounded-md text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-200'>{job_type}</p>
                </div>
                <div className='flex gap-4 text-gray-500 mt-2'>
                    <p className='flex'><img src="https://i.ibb.co/HtG52hv/Location-Icon.png" alt="" /> {location}</p>

                    <p className='flex'><img src="https://i.ibb.co/Yb1tB0c/Frame.png" alt="" /> Salary: {minimum_salary}k-{maximum_salary}k
                    </p>
                </div>
                <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-3'><Link to={`/job-details/${id}`}>View Details</Link></button>

            </div>
        </div>
    );
};

export default SingleCard;
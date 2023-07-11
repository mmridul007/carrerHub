import React from 'react';
import { Link } from 'react-router-dom';

const StoredCard = ({cart}) => {
    console.log(cart)
    const{id, icon, company, job_title, job_type, job_location, location, minimum_salary,maximum_salary} = cart
    return (
        <div className='border mb-4 md:flex items-center justify-between'>
            <div className='md:flex gap-4 items-center'>
                <div className='px-4 py-12'>
                    <img src={icon} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-xl mb-1 mt-4'>{job_title}</h2>
                    <h3 className='mb-2'>{company}</h3>
                    <div className='flex gap-2'>
                    <p className='border-2 py-1 px-3 rounded-md text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-200'>{job_location}</p>
                    <p className='border-2 py-1 px-3 rounded-md text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-200'>{job_type}</p>
                </div>
                <div className='flex gap-4 text-gray-500 mt-2 mb-4'>
                    <p className='flex'><img src="https://i.ibb.co/HtG52hv/Location-Icon.png" alt="" /> {location}</p>

                    <p className='flex'><img src="https://i.ibb.co/Yb1tB0c/Frame.png" alt="" /> Salary: {minimum_salary}k-{maximum_salary}k
                    </p>
                </div>

                </div>

            </div>
            <div className='mr-6'>
            <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-3'><Link to={`/job-details/${id}`}>View Details</Link></button>

            </div>
        </div>
    );
};

export default StoredCard;
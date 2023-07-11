import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDB } from '../../utils/fakeDB';

const JobDetails = () => {
    const idData = useParams()
    // console.log(idData.id)
    const idInt = parseInt(idData.id);
    const details = useLoaderData();
    const detail = details && details.find(dt=> dt.id===idInt)
    console.log(detail)
    const {address, company, education_requirement, email, experiences, icon, id, job_description, job_location, job_responsibility, job_title, job_type, location, maximum_salary, minimum_salary, phone} = detail;
    const cartHandler = id =>{
        // console.log(id);
        addToDB(id)
    }
    return (
        <div className='mb-24'>
            <div>
                <h1 className='font-bold text-2xl text-center py-12'>Job Details</h1>
            </div>
            <div className='md:grid grid-cols-6 gap-2'>
                <div className='col-span-4'>
                    <h2 className='mt-2 mb-4'><span className='font-bold'>Job Description: </span> {job_description}</h2>
                    <h2 className='mt-2 mb-4'><span className='font-bold'>Job Responsibility: </span>{job_responsibility}</h2>
                    <h3 className='mt-2 mb-4'><span className='font-bold'>Educational Requirements:</span><br /><p>{education_requirement}</p></h3>
                    <h3 className='mt-2'><span className='font-bold'>Experiences:</span><br />{experiences}</h3>
                    
                </div>
                <div className=' col-span-2'>
                    <div className=''>
                        <div className=' bg-[#F4F2FF] rounded-lg'><h2 className='font-bold p-4'>Job Details</h2>
                        <hr className='w-[85%] mx-auto' />
                        <h3 className='p-4 flex pb-0'><img className='h-6' src="https://i.ibb.co/Yb1tB0c/Frame.png" alt="" /><p><span className='font-bold'>Salary: </span>{minimum_salary}k-{maximum_salary}k (Per Month)</p></h3>
                        <h3 className='p-4 flex pt-2'><img className='h-6' src="https://i.ibb.co/M5WrFSZ/Frame-1.png" alt="" /><p><span className='font-bold'>Job Title:  </span>{job_title}</p></h3>
                        <hr className='w-[85%] mx-auto' />
                        <h3 className='p-4 flex pb-0'><img className='h-6' src="https://i.ibb.co/ZL68z5w/Frame-2.png" alt="" /><p><span className='font-bold'> Phone: </span>{phone}</p></h3>
                        <h3 className='p-4 flex pb-0 pt-2'><img className='h-6' src="https://i.ibb.co/0Bf990x/Frame-3.png" alt="" /><p><span className='font-bold'>E-mail:  </span>{email}</p></h3>
                        <h3 className='p-4 flex pt-2 pb-6'><img className='h-6' src="https://i.ibb.co/qrWFHGr/Frame-4.png" alt="" /><p><span className='font-bold'>Address:  </span>{address}</p></h3>
                        </div>
                    
                        <div><button onClick={()=>cartHandler(id)} className='w-full mx-auto py-2 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-white hover:to-purple-500'>Apply Now</button></div>
                     
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
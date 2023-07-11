import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='md:flex items-center'>
                <div className='ml-2'>
                    <h2 className='font-bold text-6xl'>
                    One Step <br /> Closer To Your <br /><span className=' text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Dream Job</span> 
                    </h2>
                    <p className='mt-4 mb-4'>
                    Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                    </p>
                    <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-2 md:mt-0 hover:to-purple-500'>Get Started</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/ZYpWfMr/P3-OLGJ1-copy-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
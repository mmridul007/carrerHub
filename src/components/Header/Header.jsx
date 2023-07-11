import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-between py-8 items-center w-full px-6 md:px-0'>
            <h1 className='text-2xl font-bold'>Chakri Lagbe</h1>
            <nav className='grid sm:grid-cols-4 md:gap-6 mt-4 md:mt-0'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied-jobs">Applied Jobs</Link>
                <Link to="/blogs">Blogs</Link>
            </nav>

            <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-2 md:mt-0 hover:to-purple-500 '>Start Applying</button>
        </div>
    );
};

export default Header;
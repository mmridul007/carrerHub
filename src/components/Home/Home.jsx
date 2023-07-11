import React from 'react';
import Banner from '../Banner/Banner';
import Job_List from '../Job_List/Job_List';
import { useLoaderData } from 'react-router-dom';
import JobCards from '../JobCards/JobCards';

const Home = () => {
    const jobCardData = useLoaderData();
    // console.log(jobCardData)
    return (
        <div>
            <Banner></Banner>
            <Job_List></Job_List>
            <JobCards jobCardData={jobCardData}></JobCards>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from "react";
import Job from "../Jobs/Job";

const Job_List = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobList.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-16">
      <h2 className="font-bold text-4xl text-center">Job Category List</h2>
      <p className="text-center text-gray-400 mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:flex justify-between mt-6 items-center">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Job_List;

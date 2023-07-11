import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import { Link } from "react-router-dom";

const JobCards = ({ jobCardData }) => {
  // console.log(jobCardData)
  return (
    <div className="mt-24">
      <h2 className="font-bold text-4xl text-center">Featured Jobs</h2>
      <p className="text-center text-gray-400 mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:grid grid-cols-2 gap-4 justify-between mt-6">
        {jobCardData && jobCardData.map((jobCard) => (
          <SingleCard key={jobCard.id} jobCard={jobCard}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default JobCards;

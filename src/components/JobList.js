import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  

  if (jobs.length === 0) {
    return <p>Loading...</p>;
  }

  

  const jobElements = jobs.map((job, index) => {
    return (
      <li key={index}>
        <div>
          <JobCard job={job} />
        </div>
      </li>
    );
  });

  return <div>{jobElements}</div>;
};

export default JobList;

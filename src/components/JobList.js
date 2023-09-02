import React from "react";
import JobCard from "./JobCard";
import { useParams, Link } from "react-router-dom";


const JobList = ({ jobs }) => {
  

  const url = "/jobs/new"

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

  return <div>
    {jobElements}
  <Link to={url}>Create New Job</Link>
  </div>;
};

export default JobList;

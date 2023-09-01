import React from "react";
import JobCard from "./JobCard";
import { useParams } from "react-router-dom";

const JobList = ({ jobs }) => {
  const clientId = useParams();

  if (jobs.length === 0) {
    return <p>Loading...</p>;
  }

  const filteredJobs = jobs.filter((job) => job.client.id == clientId["*"]);

  const jobElements = filteredJobs.map((job, index) => {
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

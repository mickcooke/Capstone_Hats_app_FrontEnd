import React from "react";
import OngoingJob from "./OngoingJob";
import "./OngoingJobsList.css"

const OngoingJobsList = ({ jobs }) => {
  if (jobs.length === 0) {
    return <p>Loading...</p>;
  }

  const getOngoingJobs = () => {
    const filteredJobs = jobs.filter((job) => {
      return job.completed === false;
    });
    return filteredJobs;
  };

  const ongoingJobs = getOngoingJobs();

  const ongoingJobElements = ongoingJobs.map((job, index) => {
    return (
      <div key={index}>
        <div>
          <OngoingJob job={job} />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ongoingJobs-container">
        <h3 className="ongoingJobs-header">All Ongoing Jobs</h3>
        <hr></hr>
        
        {ongoingJobElements}
        
        
        </div>
    </>
  );
};

export default OngoingJobsList;

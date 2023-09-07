import React from "react";
import OngoingJob from "./OngoingJob";

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
        <p><b>All Ongoing Jobs</b></p>
        <hr></hr>
        
        {ongoingJobElements}
        
        
        </div>
    </>
  );
};

export default OngoingJobsList;

import React from 'react';
import { useParams } from "react-router-dom";

const JobDetail = ({jobs}) => {

const jobId = useParams();

if (jobs.length === 0) {
    return <p>Loading...</p>;
  }

  console.log(jobId);

  const foundJob = jobs.find((job) => job.id == jobId["*"]);

  return (
    <div>
        <p>{foundJob.name}</p>
        <p>{foundJob.description}</p>
        <p>{foundJob.notes}</p>
    </div>
  )
}

export default JobDetail
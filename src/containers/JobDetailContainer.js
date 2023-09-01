import React from "react";
import JobDetail from "../components/JobDetail";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';

const JobDetailContainer = ({ jobs }) => {
  const jobId = useParams();

  if (jobs.length === 0) {
    return <p>Loading...</p>;
  }

  const foundJob = jobs.find((job) => job.id == jobId["*"]);

  const text = `${foundJob.client.hat.name} > ${foundJob.client.firstName} > ${foundJob.name}`;

  return (
    <>
    <Header text={text}/>
      <JobDetail job={foundJob} />
    </>
  )
};

export default JobDetailContainer;

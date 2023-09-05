import React from "react";
import JobList from "../components/JobList";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const JobContainer = ({ jobs, clientCardColours, hatIcons }) => {
  const clientId = useParams();

  const filteredJobs = jobs.filter((job) => job.client.id == clientId["*"]);

  const text = `${filteredJobs[0].client.hat.name} > ${filteredJobs[0].client.firstName} > Jobs`;

if(jobs.length === 0){
  return (
<p>Loading...</p>

  )
}

  return (
    <>
      <Header text={text} />
      <JobList jobs={filteredJobs} clientCardColours={clientCardColours} hatIcons={hatIcons} />
    </>
  );
};

export default JobContainer;

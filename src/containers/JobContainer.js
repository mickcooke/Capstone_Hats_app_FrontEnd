import React from "react";
import JobList from "../components/JobList";
import { useParams, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import JobForm from "../components/JobForm";

const JobContainer = ({ jobs, clientCardColours, hatIcons }) => {
  const clientId = useParams();
  const newJobText = "Add a Job";
  const filteredJobs = jobs.filter((job) => job.client.id == clientId["*"]);
  const clientIdString = clientId["*"];

  if (jobs.length === 0) {
    return (
      <>
        <Header text={newJobText} />
        {<JobForm clientId={clientId} />}
      </>
    );
  }

  const text = `${filteredJobs[0].client.hat.name} > ${filteredJobs[0].client.firstName} > Jobs`;

 

  return (
    <>
      <Header text={text} />
      <Routes>
        <Route
          path="/:id"
          element={
            <JobList
              jobs={filteredJobs}
              clientCardColours={clientCardColours}
              hatIcons={hatIcons}
              clientIdString={clientIdString}
            />
          }
        />
      </Routes>
    </>
  );
};

export default JobContainer;

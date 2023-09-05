import React from "react";
import JobList from "../components/JobList";
import { useParams, Routes, Route } from "react-router-dom";
import JobFormContainer from "./JobFormContainer";
import Header from "../components/Header";

const JobContainer = ({ jobs, clientCardColours, hatIcons }) => {
  const clientId = useParams();
  const filteredJobs = jobs.filter((job) => job.client.id == clientId["*"]);
  const clientIdString = clientId["*"];
  console.log("client id string" + clientIdString);
  const text = `${filteredJobs[0].client.hat.name} > ${filteredJobs[0].client.firstName} > Jobs`;

  if (jobs.length === 0) {
    return <p>Loading...</p>;
  }

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

import React from "react";
import JobCard from "./JobCard";
import { useParams, Link } from "react-router-dom";


const JobList = ({ jobs, hatIcons, clientCardColours }) => {
  

  const url = "/jobs/new"

  if (jobs.length === 0) {
    return <p>Loading...</p>;
  }

  

  const jobElements = jobs.map((job, index) => {
    return (
      <li key={index}>
        <div>
          <JobCard job={job} clientCardColours={clientCardColours} hatIcons={hatIcons}/>
        </div>
      </li>
    );
  });

  return (
    <>
    <div className="App">
      <Link to={url}>
        <img
          src={require("../assets/images/create-icon.png")}
          className="create-icon"
        />
      </Link>
    </div>
    <div className="Item-container">{jobElements}</div>
  </>


  )

};

export default JobList;

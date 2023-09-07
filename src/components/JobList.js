import React from "react";
import JobCard from "./JobCard";
import Timer from "./Timer"
// import { useParams, Link } from "react-router-dom";
import { useParams , Routes, Route, Link } from "react-router-dom";
import JobFormContainer from "../containers/JobFormContainer";


const JobList = ({ jobs, hatIcons, clientCardColours, clientIdString }) => {
  
let clientId = useParams();

console.log(clientId["*"])
  
// const url = `/jobs/new/${clientId}`
  
  const url = '/jobs/new/' + clientIdString
  console.log(url)

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
    <div className="Job-card-container">{jobElements}</div>
  </>


  )

};

export default JobList;

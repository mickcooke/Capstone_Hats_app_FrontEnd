import React from 'react';
import { useParams } from "react-router-dom";
import Timer from './Timer';


const JobDetail = ({job}) => {




  return (
    <div>
        <p>{job.name}</p>
        <p>{job.description}</p>
        <p>{job.notes}</p>
        <Timer />

    
    </div>
  )
}

export default JobDetail
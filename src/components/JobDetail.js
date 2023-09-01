import React from 'react';
import { useParams } from "react-router-dom";

const JobDetail = ({job}) => {




  return (
    <div>
        <p>{job.name}</p>
        <p>{job.description}</p>
        <p>{job.notes}</p>
    </div>
  )
}

export default JobDetail
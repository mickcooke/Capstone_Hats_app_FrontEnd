import React from 'react'
import { Link } from "react-router-dom";


const JobCard = ({job}) => {
  const url = `/jobs/detail/${job.id}`;

  return (
    <div>
      <Link to={url}>
      <p>{job.name}</p>
      </Link>
    </div>
  )
}

export default JobCard;

import React from 'react'
import { Link } from "react-router-dom";


const JobCard = ({job}) => {
  const url = `/jobs/detail/${job.id}`;
  const editUrl = `/jobs/edit/${job.id}`;

  return (
    <div>
      <Link to={url}>
      <p>{job.name}</p>
      </Link>
      <Link to={editUrl}>
      <p>Edit Job</p>
      </Link>
    </div>
  )
}

export default JobCard;

import React from 'react';
import { useParams } from "react-router-dom";
import Timer from './Timer';
import './JobDetail.css'



const JobDetail = ({job}) => {

  const unpaid = () => {
    return job.completed === true && job.paid === false;
  };


  return (
    <div className='card'>
        {/* <img src="" */}
        <p>Job: {job.name}</p>
        <p> Description: {job.description}</p>
        <p>Notes: {job.notes}</p>
        {unpaid() ? (
                <div className="unpaid-job-card">
                <p className="job-detail-paid-text">
                   UNPAID
                </p>
              </div>
              )
            : <div className="paid-job-card">
            <p className="job-detail-paid-text">
               PAID
            </p>
          </div>}
        <div className='timer'>
          <Timer job={job}/>
        </div>
    </div>
  )
}

export default JobDetail
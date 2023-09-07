import React from 'react';
import { useParams } from "react-router-dom";
import Timer from './Timer';
import './JobDetail.css'



const JobDetail = ({job, onUpdate}) => {

  const unpaid = () => {
    return job.completed === true && job.paid === false;
  };

  const ongoing = () => {
    return job.completed === false;
  }


  return (
    <div className='card'>
        <p>Job: {job.name}</p>
        <p> Description: {job.description}</p>
        <p>Notes: {job.notes}</p>
        {job.active ? "" : <p>Not Started</p> }
        {job.completed ? <p>Completed</p> : <p>Ongoing</p> }
        {unpaid() ? (
                <div className="unpaid-job-card">
                <p className="job-detail-paid-text">
                   UNPAID
                </p>
              </div>
              )
            : ongoing()? ""
            :
            <div className="paid-job-card">
            <p className="job-detail-paid-text">
               PAID
            </p>
          </div>}
          <p>Amount earned: £{job.client.hourlyRate * (job.timeTaken/3600)}</p>
        <div className='timer'>
          <Timer job={job} onUpdate={onUpdate}/>
        </div>
    </div>
  )
}

export default JobDetail
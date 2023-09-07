import React from 'react';
import { useParams } from "react-router-dom";
import Timer from './Timer';
import './JobDetail.css'



const JobDetail = ({job}) => {




  return (
    <div className='card'>
        {/* <img src="" */}
        <p>Job: {job.name}</p>
        <p> Description: {job.description}</p>
        <p>Notes: {job.notes}</p>
        {job.active ? <p>Active</p> : <p>Not Active</p> }
        {job.completed ? <p>Completed</p> : <p>Not Completed</p> }
        {job.paid ? <p>Paid</p> : <p>Not Paid</p> }
        <p>Time taken: {job.timeTaken}</p>
        <div className='timer'>
          <Timer job={job}/>
        </div>
    </div>
  )
}

export default JobDetail
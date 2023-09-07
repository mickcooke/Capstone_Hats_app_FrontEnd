import React from 'react'

const OngoingJob = ({job}) => {
  return (
   <>
   <p><b>{job.name}</b></p>
   <span>{job.hat}</span>
  
   <span>{job.client.hat.name} job for </span>
   <span>{job.client.firstName} {job.client.lastName}  </span>
   </>
  )
}

export default OngoingJob
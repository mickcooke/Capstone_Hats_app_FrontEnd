import React from 'react'

const OngoingJob = ({job}) => {
  return (
   <>
   <p><b>{job.name}</b>{job.hat}</p>
   {/* <span>{job.hat}</span> */}
  
   <p>{job.client.hat.name} job for </p>
   <p>{job.client.firstName} {job.client.lastName}</p>
   </>
  )
}

export default OngoingJob
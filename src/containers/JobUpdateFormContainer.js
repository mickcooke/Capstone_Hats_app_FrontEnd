import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import JobUpdateForm from '../components/JobUpdateForm'

const JobUpdateFormContainer = ({jobs, handleDelete}) => {

const jobId = useParams();

const foundJob = jobs.find(
  (job) => job.id == jobId["*"]
);

const text = "Edit Job"

if(!foundJob){
  return(
    <p>Loading...</p>
  )
}



  return (
    <>
    <Header text={text}/>
    <JobUpdateForm job={foundJob} handleDelete={handleDelete}/>
    </>
  )
}

export default JobUpdateFormContainer
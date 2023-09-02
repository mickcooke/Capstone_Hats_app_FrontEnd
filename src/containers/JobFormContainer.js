import React from 'react'
import JobForm from '../components/JobForm'
import Header from '../components/Header'

const JobFormContainer = () => {

const text = "Add new job"

  return (
    <div>
      <Header text={text}/>
      <JobForm/>
    </div>
  )
}

export default JobFormContainer
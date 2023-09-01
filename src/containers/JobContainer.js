import React from 'react'
import JobList from '../components/JobList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const JobContainer = ({jobs}) => {

const JobDetailWrapper = () => {
  return (
    <p>JobDetailWrapper</p>
  )
}

  return (
    <>
    <p>JobContainer</p>
    <JobList jobs={jobs}/>
    {/* <Routes>
      <Route path="/:id" element = {<JobDetailWrapper/>}/>
    </Routes> */}
    </>
  )
}

export default JobContainer
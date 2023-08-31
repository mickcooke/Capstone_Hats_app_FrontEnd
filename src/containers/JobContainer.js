import React from 'react'
import JobList from '../components/JobList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const JobContainer = () => {

const JobDetailWrapper = () => {
  return (
    <p>JobDetailWrapper</p>
  )
}

  return (
    <>
    <p>JobContainer</p>
    <Routes>
      <Route path="/" element = {<JobList/>}/>
      <Route path="/:id" element = {<JobDetailWrapper/>}/>
    </Routes>
    </>
  )
}

export default JobContainer
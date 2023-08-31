import React from 'react'
import JobList from '../components/JobList.js'
import { BrowserRouter as Router, Routes, Route, useParams}  from 'react-router-dom'
import ClientList from '../components/ClientList.js'

const ClientContainer = () => {
  return (
    <>
    <p>Client container</p>
    <ClientList/>
    <Routes>  
      <Route path="/jobs/:id" element={<JobList/>}/>
    </Routes>
    </>
  )
}

export default ClientContainer
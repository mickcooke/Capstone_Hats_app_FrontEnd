import React from 'react'
import JobList from '../components/JobList.js'
import { BrowserRouter as Router, Routes, Route, useParams}  from 'react-router-dom'
import ClientList from '../components/ClientList.js'

const ClientContainer = ({clients}) => {
  return (
    <>
    <p>Client container</p>
    <ClientList clients={clients}/>
    {/* <Routes>  
      <Route path="/:id" element={<JobList clients={clients}/>}/>
    </Routes> */}
    </>
  )
}

export default ClientContainer
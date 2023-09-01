import React from 'react'
import JobList from '../components/JobList.js'
import { BrowserRouter as Router, Routes, Route, useParams}  from 'react-router-dom'
import ClientList from '../components/ClientList.js'
import Header from '../components/Header.js'


const ClientContainer = ({clients}) => {

  const hatId = useParams();

  const filteredClients = clients.filter(
    (client) => client.hat.id == hatId["*"]
  );


const text = `${filteredClients[0].hat.name} > Clients`

  return (
    <>
    <Header text={text}/>
    <ClientList clients={filteredClients}/>
    {/* <Routes>  
      <Route path="/:id" element={<JobList clients={clients}/>}/>
    </Routes> */}
    </>
  )
}

export default ClientContainer
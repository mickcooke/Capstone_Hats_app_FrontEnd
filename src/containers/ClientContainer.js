import React from 'react'
import JobList from '../components/JobList.js'
import { BrowserRouter as Router, Routes, Route, useParams}  from 'react-router-dom'
import ClientList from '../components/ClientList.js'
import Header from '../components/Header.js'
import UpdateClientForm from '../components/ClientUpdateForm.js'
import ClientForm from '../components/ClientForm.js'


const ClientContainer = ({clients}) => {

  const hatId = useParams();

  const filteredClients = clients.filter(
    (client) => client.hat.id == hatId["*"]
  );


const text = `${filteredClients[0].hat.name} > Clients`



// const text = "baws"


  return (
    <>
    <Header text={text}/>

    
    <Routes>  
    <Route path="/:id" element={<ClientList clients={filteredClients}/>}/>
    {/* <Route path="/new" element={<ClientForm/>}/> */}
      {/* <Route path="/edit/:id" element={<UpdateClientForm clients={filteredClients}/>} /> */}
    </Routes>
    </>
  )
}

export default ClientContainer
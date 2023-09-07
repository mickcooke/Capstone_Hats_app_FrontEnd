import React from 'react'
import Header from '../components/Header'
import { useParams }  from 'react-router-dom'
import ClientUpdateForm from '../components/ClientUpdateForm'

const ClientUpdateFormContainer = ({clients, onUpdate, handleDelete}) => {

    const clientId = useParams();

    const foundClient = clients.find(
        (client) => client.id == clientId["*"]
      );


    const text = "Edit Client"

if(!foundClient){
    return (
        <p>Loading...</p>
    )
}

  return (
    <>
    <Header text={text}/>
    <ClientUpdateForm client={foundClient} onUpdate={onUpdate} handleDelete={handleDelete}/>
    </>
  )
}

export default ClientUpdateFormContainer
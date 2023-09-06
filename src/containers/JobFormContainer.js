import React from 'react'
import JobForm from '../components/JobForm'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const JobFormContainer = ({onCreate, clients}) => {
const clientIdObject = useParams()
const text = "Add new job"



if(clients.length === 0){
  return(
    <p>Loading...</p>
  )
}

const clientId = clientIdObject['*']

const findClientById = (clientId) => {
  return clients.find((client) => {
    return client.id === parseInt(clientId)
  })
}
const foundClient = findClientById(clientId)


  return (
    <div>
      <Header text={text}/>
      <JobForm onCreate={onCreate} foundClient={foundClient}/>
    </div>
  )
}

export default JobFormContainer
import React from 'react'
import JobForm from '../components/JobForm'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const JobFormContainer = ({onCreate, clients}) => {
const clientIdObject = useParams()




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

const foundHat = foundClient.hat.name
const text = `Add New ${foundHat} Job`

  return (
    <div>
      <Header text={text}/>
      <p>Job form container</p>
      <JobForm onCreate={onCreate} foundClient={foundClient}/>
    </div>
  )
}

export default JobFormContainer
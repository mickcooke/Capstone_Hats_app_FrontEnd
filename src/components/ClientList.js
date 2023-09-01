import React from 'react'
import ClientCard from './ClientCard'
import { useParams } from 'react-router-dom'

const ClientList = ({clients}) => {

  const hatId = useParams();

  if(clients.length === 0){
    return(
      <p>Loading...</p>
    )
  }

 const filteredClients = clients.filter((client) => 
 client.hat.id == hatId["*"]);

 console.log(filteredClients);
 console.log(clients[1].hat.id);


  const clientElements = filteredClients.map((client, index) => {
    return(
      <li key={index}>
        <div>
          <ClientCard client={client}/>
        </div>
      </li>
    )
  })

  return (
    <div>
        {clientElements}
    </div>
  )
}

export default ClientList
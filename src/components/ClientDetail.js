import React from 'react';
import { useParams } from "react-router-dom";
import Timer from './Timer';


const ClientDetail = ({client}) => {




  return (
    <div>
        <p>{client.firstName} {client.lastName}</p>
        <p>{client.emailAddress}</p>
        <p>{client.address1}</p>
        <p>{client.address2}</p>
        <p>{client.postcode}</p>
        <p>{client.country}</p>
        <p>{client.notes}</p>
        <p>Hourly rate: £{client.hourlyRate}</p>
    </div>
  )
}

export default ClientDetail
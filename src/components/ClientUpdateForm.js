import React, { useState } from 'react'

const UpdateClientForm = ({client}) => {

  const [newClient, setNewClient] = useState({
    firstName: client.firstName,
    lastName: client.lastName,
    emailAddress: client.email,
    address1: client.address1,
    address2: client.address2,
    postcode: client.postcode,
    country: client.country,
    hourlyRate: client.hourlyRate,
  })

  const handleChange = (event) => {
    const propertyName = event.target.name;
        const copyClient = {...newClient}
        copyClient[propertyName] = event.target.value
        setNewClient(copyClient)
  }

  if (!client) {
    return <p>Loading...</p>;
  }

  return (
    <form>
        First Name: <input type="text" defaultValue={client.firstName} name="firstName" onChange={ handleChange }/>

        Last Name: <input type="text" defaultValue={client.lastName} name="lastName" onChange={ handleChange } />

        E-mail: <input type="email" defaultValue={client.emailAddress} name="emailAddress" onChange={ handleChange } />

        Address: <input type="text" defaultValue={client.address1}  name="address1" onChange={ handleChange } />

        Address: <input type="text" defaultValue={client.address2} name="address2" onChange={ handleChange } />


        Postcode: <input type="text" defaultValue={client.postcode}  name="postcode" onChange={ handleChange } />

        Country: <input type="text" defaultValue={client.country} name="country" onChange={ handleChange } />
        
        Hourly Rate: £<input type="number" defaultValue={client.hourlyRate} name="hourlyRate" onChange={ handleChange } />
                
                <button type="submit">Update</button>
      </form>
  )
}
export default UpdateClientForm
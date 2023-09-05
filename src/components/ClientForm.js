import React, {useState} from 'react'

const ClientForm = () => {

  const [newClient, setNewClient] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    address1: "",
    address2: "",
    postcode: "",
    country: "",
    hourlyRate: "",
  })

  const handleChange = (event) => {
    const propertyName = event.target.name;
        const copyClient = {...newClient}
        copyClient[propertyName] = event.target.value
        setNewClient(copyClient)
  }


  return (
    <form>
        <input type="text" placeholder="First Name" name="firstName" onChange={ handleChange } />
        <input type="text" placeholder="Last Name" name="lastName" onChange={ handleChange } />
        <input type="email" placeholder="email" name="emailAddress" onChange={ handleChange } />
        <input type="text" placeholder="First line of address" name="address1" onChange={ handleChange } />
        <input type="text" placeholder="Second line of address" name="address2" onChange={ handleChange } />
        <input type="text" placeholder="Postcode" name="postcode" onChange={ handleChange } />
        <input type="text" placeholder="country" name="country" onChange={ handleChange } />
        <input type="number" placeholder="Hourly rate" name="hourlyRate" onChange={ handleChange } />
                
                <button type="submit" >Save</button>
      </form>
  )
}

export default ClientForm
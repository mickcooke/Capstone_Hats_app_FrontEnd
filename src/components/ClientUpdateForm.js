import React from 'react'

const UpdateClientForm = ({client}) => {

  if (!client) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <p>{client.firstName}</p>
    </>
  )
}

export default UpdateClientForm
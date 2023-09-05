import React from 'react'
import ClientForm from '../components/ClientForm'
import Header from '../components/Header'

const CientFormContainer = ({hats, clients}) => {

    const text = "Add New Client"

  return (
    <div>
        <Header text={text}/>
        <ClientForm hats={hats} clients={clients}/>
    </div>
  )
}

export default CientFormContainer
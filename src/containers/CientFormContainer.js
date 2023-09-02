import React from 'react'
import ClientForm from '../components/ClientForm'
import Header from '../components/Header'

const CientFormContainer = () => {

    const text = "Add new client"

  return (
    <div>
        <Header text={text}/>
        <ClientForm/>
    </div>
  )
}

export default CientFormContainer
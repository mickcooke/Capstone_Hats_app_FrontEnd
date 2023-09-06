import React from 'react'
import ClientForm from '../components/ClientForm'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const CientFormContainer = ({hats, clients, onCreate}) => {
    const  hatIdObject = useParams()
    const text = "Add New Client"


    

  if(clients.length === 0 || hats.length === 0){
    return(
      <p>Loading...</p>
    )
  }

  const hatId = hatIdObject['*']
  console.log(hatId)

  const findHatById = (hatId) => {
    return hats.find((hat) => {
      return hat.id === parseInt(hatId)
    })
  }
  const foundHat = findHatById(hatId)

  return (
    <div>
        <Header text={text}/>
        <ClientForm hats={hats} clients={clients} onCreate={onCreate} foundHat={foundHat} />
    </div>
  )
}

export default CientFormContainer
import React from 'react'
import HatForm from '../components/HatForm'
import Header from '../components/Header'

const HatFormContainer = ({user}) => {

    const text = "Add New Hat"

  return (
    <div>
        <Header text={text}/>
        <HatForm user={user}/>
    </div>
  )
}

export default HatFormContainer
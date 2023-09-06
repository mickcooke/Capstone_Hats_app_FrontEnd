import React from 'react'
import HatForm from '../components/HatForm'
import Header from '../components/Header'

const HatFormContainer = ({user, onCreate}) => {

    const text = "Add New Hat"

  return (
    <div>
        <Header text={text}/>
        <HatForm user={user} onCreate={onCreate}/>
    </div>
  )
}

export default HatFormContainer
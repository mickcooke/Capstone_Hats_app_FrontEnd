import React from 'react'
import Header from '../components/Header'
import { useParams }  from 'react-router-dom'
import HatUpdateForm from '../components/HatUpdateForm'

const HatUpdateFormContainer = ({hats}) => {

    const hatId = useParams();

    const foundHat = hats.find(
        (hat) => hat.id == hatId["*"]
      );


    const text = "Edit Hat"

if(!foundHat){
    return (
        <p>Loading...</p>
    )
}

  return (
    <>
    <Header text={text}/>
    <HatUpdateForm hat={foundHat}/>
    </>
  )
}

export default HatUpdateFormContainer;
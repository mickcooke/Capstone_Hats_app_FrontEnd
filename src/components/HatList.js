import React from 'react'
import HatCard from './HatCard'
import { Link } from "react-router-dom";


const HatList = ({hats, jobs}) => {
if(hats.length === 0){
  return(
    <p>Loading...</p>
  )
}

const url = "/hats/new"

const hatElements = hats.map((hat, index) => {
  return(
    <li key={index}>
      <div>
        <HatCard hat={hat}/>
      </div>
    </li>
   
  )
})

  return (
    <div>
      {hatElements}
      <Link to={url}>Create New Hat</Link>
    </div>
  )
}

export default HatList

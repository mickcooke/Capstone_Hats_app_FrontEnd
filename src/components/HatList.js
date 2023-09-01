import React from 'react'
import HatCard from './HatCard'

const HatList = ({hats, jobs}) => {
if(hats.length === 0){
  return(
    <p>Loading...</p>
  )
}
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
    </div>
  )
}

export default HatList

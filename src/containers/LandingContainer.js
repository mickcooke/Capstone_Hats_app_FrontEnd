import React from 'react'
import './LandingContainer.css'

const LandingContainer = () => {
  return (
    <div className='background'>
        <img src={require(`../assets/images/hat1.png`)} className="falling hat1" alt="hat"/>
        <img src={require(`../assets/images/hat2.png`)} className="falling hat2" alt="hat"/>
        <img src={require(`../assets/images/hat3.png`)} className="falling hat3" alt="hat"/>
        <img src={require(`../assets/images/hat4.png`)} className="falling hat4" alt="hat"/>

        <img src={require(`../assets/images/hat1.png`)} className="falling hat5" alt="hat"/>
        <img src={require(`../assets/images/hat2.png`)} className="falling hat6" alt="hat"/>
        <img src={require(`../assets/images/hat3.png`)} className="falling hat7" alt="hat"/>
        <img src={require(`../assets/images/hat4.png`)} className="falling hat8" alt="hat"/>



    </div>
  )
}

export default LandingContainer
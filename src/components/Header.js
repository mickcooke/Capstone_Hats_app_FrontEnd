import React from 'react';
import {useNavigate} from 'react-router-dom';


const Header = ({text}) => {

const navigate = useNavigate();
const goBack = () => {
  navigate(-1);
}

if(!text){
  return(
    <p>loading</p>
  )
}

  return (
      <>
      <div className='back-button'>
      <img src={require("../assets/images/back-arrow.png")} className="back-arrow-icon" onClick={goBack}/>
      </div>
      <div className='App'>
        
      <p className='header-text'>{text}</p>
      </div>
      <hr/>
      </>
  )
}

export default Header

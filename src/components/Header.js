import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css'


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
      <header className='header'>
      <div className='back-button' onClick={goBack}>
     <i class="fa-solid fa-arrow-left" style={{color: "#ffffff"}}></i>
      </div>
    
      <p className='header-text'>{text}</p>
    
      </header>
      </>
  )
}

export default Header

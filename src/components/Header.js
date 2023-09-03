import React from 'react'

const Header = ({text}) => {
  return (
      <>
      <div className='App'>
      <p className='header-text'>{text}</p>
      </div>
      <hr/>
      </>
  )
}

export default Header

import React from 'react'
import HatList from '../components/HatList.js'
import { BrowserRouter as Router, Routes, Route, useParams}  from 'react-router-dom'
import ClientList from '../components/ClientList.js'

const HatContainer = () => {
  return (
    <>
    <p>Hat container</p>
    <Routes>  
      <Route path="/" element={<HatList/>}/>
      <Route path="/clients/:id" element={<ClientList/>}/>
    </Routes>
    </>
  )
}

export default HatContainer
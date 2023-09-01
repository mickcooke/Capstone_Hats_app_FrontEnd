import React from 'react'
import HatList from '../components/HatList.js'
import { BrowserRouter as Router, Routes, Route, useParams}  from 'react-router-dom'
import ClientList from '../components/ClientList.js'
import Header from '../components/Header.js'

const HatContainer = ({hats, jobs, clients}) => {


const text = "Choose your hat"


  return (
    <>
    <Header text={text}/>
    <HatList hats={hats} jobs={jobs}/>
     {/* <Routes>  
      <Route path="/clients/:id" element={<ClientList/>}/>
    </Routes> */}
    </>
  )
}

export default HatContainer
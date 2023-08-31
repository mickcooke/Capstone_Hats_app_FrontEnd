import React, {useEffect, useState} from 'react'
import HatContainer from './HatContainer.js'
import ClientContainer from './ClientContainer.js'
import JobContainer from './JobContainer.js'
import MoneyContainer from './MoneyContainer.js'
import InsightsContainer from './InsightsContainer.js'
import NavBar from '../components/NavBar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const MainContainer = () => {
  return (
    <Router>
      <>
      <Routes>
        <Route path="/hats/*" element={<HatContainer />}/>
        <Route path="/clients/*" element={<ClientContainer />}/>
        <Route path="/jobs/*" element={<JobContainer />}/>
        <Route path="/money/*" element={<MoneyContainer />}/>
        <Route path="/insights/*" element={<InsightsContainer />}/>
      </Routes>

      <NavBar/>
      {/* clients={clients} hats={hats} jobs={jobs} */}
      </>
    </Router>
  )
}

export default MainContainer
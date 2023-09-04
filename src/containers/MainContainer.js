import React, {useEffect, useState} from 'react'
import HatContainer from './HatContainer.js'
import ClientContainer from './ClientContainer.js'
import JobContainer from './JobContainer.js'
import MoneyContainer from './MoneyContainer.js'
import InsightsContainer from './InsightsContainer.js'
import NavBar from '../components/NavBar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Request from '../helpers/request.js'
import JobDetailContainer from './JobDetailContainer.js'
import SettingsContainer from './SettingsContainer.js'
import ClientUpdateFormContainer from './ClientUpdateFormContainer.js'
import ClientFormContainer from './CientFormContainer.js'
import JobFormContainer from './JobFormContainer.js'
import JobUpdateFormContainer from './JobUpdateFormContainer.js'
import HatIcons from '../styling_codes/HatIcons.js'
import HatCardColours from '../styling_codes/HatCardColours.js'

const MainContainer = () => {

  const [hats, setHats] = useState([]);
  const [clients, setClients] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState({});
  const [hatIcons, setHatIcons] = useState([]);
  const [hatCardColours, setHatCardColours] = useState([]);

useEffect(() => {
  getData();
  setHatIcons(HatIcons);
  setHatCardColours(HatCardColours);
}, [])

const getData = () => {
  const request = new Request()
  const hatsPromise = request.get("http://localhost:8080/api/hats")
  const clientsPromise = request.get("http://localhost:8080/api/clients")
  const jobsPromise = request.get("http://localhost:8080/api/jobs")
  // console.log(hatsPromise)
  Promise.all([hatsPromise, clientsPromise, jobsPromise])
  .then((data) => {
    setHats(data[0])
    setClients(data[1])
    setJobs(data[2])
  })
}


  if(hats.length === 0 || jobs.length === 0 || clients.length === 0){
    return(
      null
    )
  }


  
  return (
    <Router>
      <>
      <Routes>

        <Route path="/hats/*" element={<HatContainer hats={hats} jobs={jobs} clients={clients} hatIcons={hatIcons} hatCardColours={hatCardColours}/>}/>


        <Route path="/clients/*" element={<ClientContainer clients={clients}/>}/>
        <Route path="/clients/edit/*" element={<ClientUpdateFormContainer clients={clients}/>}/>
        <Route path="/clients/new" element={<ClientFormContainer clients={clients}/>}/>

        <Route path="/jobs/*" element={<JobContainer jobs={jobs}/>}/>
        <Route path="/jobs/edit/*" element={<JobUpdateFormContainer jobs={jobs}/>}/>
        <Route path="/jobs/detail/*" element={<JobDetailContainer jobs={jobs}/>}/>
        <Route path="/jobs/new" element={<JobFormContainer/>}/>



        <Route path="/money/*" element={<MoneyContainer />}/>

        <Route path="/settings/*" element={<SettingsContainer />}/>
        
        <Route path="/insights/*" element={<InsightsContainer />}/>

        
      </Routes>

      <NavBar/>
      </>
    </Router>
  )
}

export default MainContainer
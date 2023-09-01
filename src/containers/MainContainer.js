import React, {useEffect, useState} from 'react'
import HatContainer from './HatContainer.js'
import ClientContainer from './ClientContainer.js'
import JobContainer from './JobContainer.js'
import MoneyContainer from './MoneyContainer.js'
import InsightsContainer from './InsightsContainer.js'
import NavBar from '../components/NavBar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Request from '../helpers/request.js'
import JobDetail from '../components/JobDetail.js'

const MainContainer = () => {

  const [hats, setHats] = useState([]);
  const [clients, setClients] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState({});

useEffect(() => {
  getData();
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

// const findClientsByHatId = (id) => {
//   let foundClientsArray = clients.filter((client) => {
//     return client.hats.id === parseInt(id);
//   })
//   return foundClientsArray
// }

// const ClientListWrapper = () => {
//   const{id} = useParams();
//   let foundClients = findClientsByHatId(id)
//   return <ClientList clients={foundClients}/>
// }

  if(hats.length === 0 || jobs.length === 0 || clients.length === 0){
    return(
      null
    )
  }


  
  return (
    <Router>
      <>
      <Routes>
        <Route path="/hats/*" element={<HatContainer hats={hats} jobs={jobs} clients={clients} />}/>
        <Route path="/clients/*" element={<ClientContainer clients={clients}/>}/>
        <Route path="/jobs/*" element={<JobContainer jobs={jobs}/>}/>
        <Route path="/jobs/detail/:id" element={<JobDetail jobs={jobs}/>}/>
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
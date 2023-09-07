import React, { useEffect, useState } from "react";
import HatContainer from "./HatContainer.js";
import ClientContainer from "./ClientContainer.js";
import JobContainer from "./JobContainer.js";
import MoneyContainer from "./MoneyContainer.js";
import InsightsContainer from "./InsightsContainer.js";
import NavBar from "../components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Request from "../helpers/request.js";
import JobDetailContainer from "./JobDetailContainer.js";
import SettingsContainer from "./SettingsContainer.js";
import ClientUpdateFormContainer from "./ClientUpdateFormContainer.js";
import ClientFormContainer from "./ClientFormContainer.js";
import JobFormContainer from "./JobFormContainer.js";
import JobUpdateFormContainer from "./JobUpdateFormContainer.js";
import HatIcons from "../styling_codes/HatIcons.js";
import HatCardColours from "../styling_codes/HatCardColours.js";
import ClientCardColours from "../styling_codes/ClientCardColours.js";
import HatFormContainer from "./HatFormContainer.js";
import HatUpdateFormContainer from "./HatUpdateFormContainer.js";
import ClientDetailContainer from "./ClientDetailContainer.js";
import AboutContainer from "./AboutContainer.js";

const MainContainer = () => {
  const [user, setUser] = useState({});
  const [hats, setHats] = useState([]);
  const [clients, setClients] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState({});
  const [hatIcons, setHatIcons] = useState([]);
  const [hatCardColours, setHatCardColours] = useState([]);
  const [clientCardColours, setClientCardColours] = useState([]);

  useEffect(() => {
    getData();
    setHatIcons(HatIcons);
    setHatCardColours(HatCardColours);
    setClientCardColours(ClientCardColours);
  }, []);



  const getData = () => {
    const request = new Request();
    const usersPromise = request.get("http://localhost:8080/api/users");
    const hatsPromise = request.get("http://localhost:8080/api/hats");
    const clientsPromise = request.get("http://localhost:8080/api/clients");
    const jobsPromise = request.get("http://localhost:8080/api/jobs");
    // console.log(hatsPromise)
    Promise.all([usersPromise, hatsPromise, clientsPromise, jobsPromise]).then(
      (data) => {
        setUser(data[0][0]);
        setHats(data[1]);
        setClients(data[2]);
        setJobs(data[3]);
      }
    );
  };

  // if(hats.length === 0){
  //   return(
  //     null
  //   )
  // }

  const findJobById = (id) => {
    return jobs.find((job) => {
      return job.id === parseInt(id)
    })
    
  }

  const handlePostClient = (client) => {
    const request = new Request();
    request.post("http://localhost:8080/api/clients", client).then(() => {
      window.location = `/clients/${client.hat.id}`;
      // window.location = `/clients/1`
      // console.log(request)
    });
    // getData()
  };

  const handlePostJob = (job) => {
    const request = new Request();
    request.post("http://localhost:8080/api/jobs", job).then(() => {
      window.location = `/jobs/${job.client.id}`;
    });
  };

  const handlePostHat = (hat) => {
    const request = new Request();
    request.post("http://localhost:8080/api/hats", hat).then(() => {
      window.location = "/hats";
    });
  };

  const handleDeleteHat = (id) => {
    const request = new Request();
    const url = "http://localhost:8080/api/hats/" + id;
    request.delete(url).then(() => {
      // window.location = '/hats'
    });
  };

  const handleDeleteJob = (id) => {
    const selectedJob = findJobById(id)
    const clientId = selectedJob.client.id
    const request = new Request();
    const url = "http://localhost:8080/api/jobs/" + id;
    request.delete(url).then(() => {
      window.location = `/jobs/${clientId}`
    });
  };

  const handleUpdateHat = (hat, id) => {
    const request = new Request();
    const url = "http://localhost:8080/api/hats/" + id;
    request.update(url, hat).then(() => {
      window.location = '/hats'
    });
    
  }


  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/hats/*"
            element={
              <HatContainer
                hats={hats}
                jobs={jobs}
                clients={clients}
                hatIcons={hatIcons}
                hatCardColours={hatCardColours}
                user={user}
              />
            }
          />

          <Route
            path="/hats/edit/*"
            element={
              <HatUpdateFormContainer
                hats={hats}
                handleDelete={handleDeleteHat}
                user={user}
                onUpdate={handleUpdateHat}
              />
            }
          />

          <Route
            path="/hats/new"
            element={<HatFormContainer user={user} onCreate={handlePostHat} />}
          />

          <Route
            path="/clients/*"
            element={
              <ClientContainer
                clients={clients}
                clientCardColours={clientCardColours}
                hatIcons={hatIcons}
              />
            }
          />
          <Route
            path="/clients/edit/*"
            element={<ClientUpdateFormContainer clients={clients} />}
          />
          <Route
            path="/clients/new/*"
            element={
              <ClientFormContainer
                hats={hats}
                clients={clients}
                onCreate={handlePostClient}
              />
            }
          />
          <Route
            path="/clients/detail/*"
            element={<ClientDetailContainer clients={clients} />}
          />

          <Route
            path="/jobs/*"
            element={
              <JobContainer
                jobs={jobs}
                hatIcons={hatIcons}
                clientCardColours={clientCardColours}
              />
            }
          />
          <Route
            path="/jobs/edit/*"
            element={
              <JobUpdateFormContainer
                jobs={jobs}
                clients={clients}
                handleDelete={handleDeleteJob}
              />
            }
          />
          <Route
            path="/jobs/detail/*"
            element={<JobDetailContainer jobs={jobs} />}
          />
          <Route
            path="/jobs/new/*"
            element={
              <JobFormContainer
                jobs={jobs}
                onCreate={handlePostJob}
                clients={clients}
              />
            }
          />

          <Route path="/money/*" element={<MoneyContainer />} />

          <Route path="/settings/*" element={<SettingsContainer />} />

          <Route path="/insights/*" element={<InsightsContainer />} />

          <Route path="/about/*" element={<AboutContainer />} />
        </Routes>

        <NavBar />
      </>
    </Router>
  );
};

export default MainContainer;

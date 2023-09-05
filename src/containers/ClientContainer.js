import React from "react";
import JobList from "../components/JobList.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ClientList from "../components/ClientList.js";
import Header from "../components/Header.js";
import UpdateClientForm from "../components/ClientUpdateForm.js";
import ClientForm from "../components/ClientForm.js";

const ClientContainer = ({ clients, clientCardColours, hatIcons }) => {
  const hatId = useParams();
  const newClientText = "Add a client";
  const hatIdString = hatId["*"];

  if (clients.length === 0)
    return (
      <>
        <Header text={newClientText} />
        {<ClientForm hatId={hatIdString} />}
      </>
    );

  const filteredClients = clients.filter(
    (client) => client.hat.id == hatId["*"]
  );

  const text = `${filteredClients[0].hat.name} > Clients`;

  return (
    <>
      <Header text={text} />

      <Routes>
        <Route
          path="/:id"
          element={
            <ClientList
              clients={filteredClients}
              clientCardColours={clientCardColours}
              hatIcons={hatIcons}
              hatIdString={hatIdString}
            />
          }
        />
      </Routes>
    </>
  );
};

export default ClientContainer;

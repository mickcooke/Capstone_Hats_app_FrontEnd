import React from "react";
import ClientCard from "./ClientCard";
import { useParams, Link } from "react-router-dom";


const ClientList = ({ clients, hatIcons, clientCardColours, hatIdString }) => {
  // const hatId = useParams();

  if (clients.length === 0) {
    return <p>Loading...</p>;
  }

 
  const url = "/clients/new/" + hatIdString

  const clientElements = clients.map((client, index) => {
    return (
      <li key={index}>
        <div>
          <ClientCard client={client} clientCardColours={clientCardColours} hatIcons={hatIcons}/>
        </div>
      </li>
    );
  });

  return (
    <>
      <div className="App">
        <Link to={url}>
          <img
            src={require("../assets/images/create-icon.png")}
            className="create-icon"
          />
        </Link>
      </div>
      <div className="Item-container">{clientElements}</div>
    </>
  );
};

export default ClientList;

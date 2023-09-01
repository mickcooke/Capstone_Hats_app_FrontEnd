import React from "react";
import ClientCard from "./ClientCard";
import { useParams, Link } from "react-router-dom";


const ClientList = ({ clients }) => {
  const hatId = useParams();

  if (clients.length === 0) {
    return <p>Loading...</p>;
  }

 
  const url = "/clients/new"

  const clientElements = clients.map((client, index) => {
    return (
      <li key={index}>
        <div>
          <ClientCard client={client} />
        </div>
      </li>
    );
  });

  return <div>
    {clientElements}
    <Link to={url}>Create New Hat</Link>
    </div>;
};

export default ClientList;

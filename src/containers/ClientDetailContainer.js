import React from "react";
import ClientDetail from "../components/ClientDetail";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';

const ClientDetailContainer = ({ clients }) => {
  const clientId = useParams();

  if (clients.length === 0) {
    return <p>Loading...</p>;
  }

  const foundClient = clients.find((client) => client.id == clientId["*"]);

  const text = `${foundClient.hat.name} > ${foundClient.firstName} ${foundClient.lastName}`;

  return (
    <>
    <Header text={text}/>
      <ClientDetail client={foundClient} />
    </>
  )
};

export default ClientDetailContainer;

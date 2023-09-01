import React from "react";
import { Link } from "react-router-dom";

const ClientCard = ({client}) => {
  const url = `/jobs/${client.id}`;
  const editUrl = `/clients/edit/${client.id}`;

  return (
    <div>
      <Link to={url}>
       <p>{client.firstName}</p>
      </Link>
      <Link to={editUrl}>
        <p>Edit Client</p>
      </Link>
      
    </div>
  );
};

export default ClientCard;

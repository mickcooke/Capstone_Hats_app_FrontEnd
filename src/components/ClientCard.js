import React from "react";
import { Link } from "react-router-dom";

const ClientCard = ({client}) => {
  const url = `/jobs/${client.id}`;

  return (
    <div>
      <Link to={url}>
       <p>{client.firstName}</p>
      </Link>
    </div>
  );
};

export default ClientCard;

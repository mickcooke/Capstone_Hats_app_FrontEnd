import React from "react";
import { Link } from "react-router-dom";

const HatCard = ({hat}) => {
  if(!hat){
    return(
      <p>Loading...</p>
    )
  }

  const url = `/clients/${hat.id}`;

  return (
    <div>
      <Link to={url}>
        <p>{hat.name}</p>
      </Link>
    </div>
  );
};

export default HatCard;

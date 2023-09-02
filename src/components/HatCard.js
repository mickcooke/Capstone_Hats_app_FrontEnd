import React from "react";
import { Link } from "react-router-dom";

const HatCard = ({hat}) => {
  if(!hat){
    return(
      <p>Loading...</p>
    )
  }

  const url = `/clients/${hat.id}`;
  const editUrl = `/hats/edit/${hat.id}`;

  return (
    <div className="Item-box-2">

<div className="leftie">
<img src={require("../assets/images/trilby.png")} className="hat-icon"/>

</div>
<div>

      <Link to={url}>
        <p>{hat.name}</p>
      </Link>
      <Link to={editUrl}>
        <p>Edit Hat</p>
      </Link>

      </div>
    </div>
  );
};

export default HatCard;

import React from "react";
import HatCard from "./HatCard";
import { Link } from "react-router-dom";

const HatList = ({ hats, jobs, hatIcons, hatCardColours }) => {
  if (hats.length === 0) {
    return <p>Loading...</p>;
  }

  const url = "/hats/new";

  const hatElements = hats.map((hat, index) => {
    return (
      <div key={index}>
        <div>
          <HatCard hat={hat} hatIcons={hatIcons} hatCardColours={hatCardColours}/>
        </div>
      </div>
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
      <div className="Item-container">{hatElements}</div>
    </>
  );
};

export default HatList;

import React from "react";
import { Link } from "react-router-dom";

const about2 = () => {

  const url= "/about/3"

  return (
    <div className="about-container">
      <p className="justify">
      As a plumber, Mario currently has two clients:</p>
      <div className="diagram-container">
        <img
          src={require("../assets/images/AboutHatsClients.png")}
          alt="Clients Diagram"
          className="clients-diagram"
        />
      </div>
      <p className="justify">
      Princess Peach needs two plumbing jobs done:</p>
      <div className="diagram-container">
        <img
          src={require("../assets/images/AboutHatsJobs.png")}
          alt="Jobs Diagram"
          className="hats-diagram"
        />
      </div>
      <Link to={url}>
        <p>Next</p>
      </Link>
    </div>
  );
};

export default about2;

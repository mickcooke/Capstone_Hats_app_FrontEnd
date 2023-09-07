import React from "react";
import { Link } from "react-router-dom";

const about1 = () => {

  const url= "/about/2"

  return (
    <div className="about-container">
      <p className="justify">
        Freelancers often wear several different hats. Take Mario, for example.
        <br></br>
        <br></br>
        Mario is a plumber. He also does some teaching at a plumber’s college.
        In his spare time he paints and sells his paintings.
        <br></br>
        <br></br>
        So Mario’s hats are:
      </p>
      <div className="diagram-container">
        <img
          src={require("../assets/images/AboutHatsHats.png")}
          alt="Hats Diagram"
          className="hats-diagram"
        />
      </div>
      <Link to={url}>
        <p>Next</p>
      </Link>
    </div>
  );
};

export default about1;

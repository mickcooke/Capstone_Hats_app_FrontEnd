import React from "react";

const NavBar = () => {
  return (
    <>
      <hr />
      <div className="Nav-bar">
        <div className="Nav-container">
          <div>
            <a href="/hats">Hats</a>
          </div>

          <div>
            <a href="/money">Money</a>
          </div>

          <div>
            <a href="/settings">Settings</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

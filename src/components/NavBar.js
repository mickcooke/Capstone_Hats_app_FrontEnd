import React from "react";

const NavBar = () => {
  return (
    <>
    <footer>
      <hr />
      <div className="Nav-bar">
        <div className="Nav-container">
          <div>
            <a href="/hats"><img src={require("../assets/images/hat.png")} className="hat-icon"/></a>
          </div>

          <div>
            <a href="/money"><img src={require("../assets/images/pound.png")} className="pound-icon"/></a>
          </div>

          <div>
            <a href="/settings"><img src={require("../assets/images/cog.png")} className="cog-icon"/></a>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default NavBar;

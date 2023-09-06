import React from "react";
import './NavBar.css'
import cog from '../assets/icons/cog.svg'
import moneyBag from '../assets/icons/money-bag.svg'
import topHat from '../assets/icons/top-hat.svg'
import wallet from '../assets/icons/wallet.svg'


const NavBar = () => {
  return (
    <>
    <footer>
      <div className="Nav-bar">
        <div className="Nav-container">
          <div>
            <a href="/hats"><i style={{color: "#ffffff"}} class="fa-brands fa-redhat"></i></a>
          </div>

          <div>
            <a href="/money/total"><i style={{color: "#ffffff"}} class="fa fa-sack-dollar" aria-hidden="true"></i></a>
          </div>

          <div>
            <a href="/settings"><i style={{color: "#ffffff"}}class="fa fa-cog" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default NavBar;

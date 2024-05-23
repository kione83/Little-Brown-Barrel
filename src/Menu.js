import React from "react";
import Whiskey from "./Whiskey";

function Menu() {
  return (
    <div className="dropdown">
        <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Whiskeys</a> 
                <a href="#">Link 3</a>
            </div>
    </div>
  );
}

export default Menu;
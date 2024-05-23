import React from "react";
import Whiskey from "./Whiskey";

function Menu() {
  return (
    <div class="dropdown">
        <button class="dropbtn">Menu</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href={Whiskey}>Whiskeys</a> 
                <a href="#">Link 3</a>
            </div>
    </div>
  );
}

export default Menu;
import React from "react";

function Menu() {
  return (
    <div class="dropdown">
        <button class="dropbtn">Menu</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
    </div>
  );
}

export default Menu;
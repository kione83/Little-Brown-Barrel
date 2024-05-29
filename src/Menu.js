import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <Link to="/">Home</Link>
        <Link to="/menu" className="appetizers">Menu</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}

export default Menu;
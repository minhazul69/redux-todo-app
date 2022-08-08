import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/all-book">All Book</NavLink>
        </li>
        <li>
          <NavLink to="/add-book">Add Book</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

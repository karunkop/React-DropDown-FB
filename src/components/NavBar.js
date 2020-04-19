import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link to="/">
        <div className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </div>
      </Link>
      {open && props.children}
    </li>
  );
};

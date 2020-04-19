import React, { useState, useRef, useEffect } from "react";
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
  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <li ref={node} className="nav-item">
      <Link to="/">
        <div className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </div>
      </Link>
      {open && props.children}
    </li>
  );
};

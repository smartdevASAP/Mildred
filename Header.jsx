import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="Home">
        Home{" "}
      </Link>
      <Link to="/About" className="About">
        {" "}
        About Mildred
      </Link>
      <Link to="Projects/Projects" className="Projects">
        {" "}
        Projects
      </Link>
      <Link to="/Contacts/Contacts" className="Contacts">
        {" "}
        Contacts
      </Link>
      {/* header */}
    </div>
  );
}

export default Header;

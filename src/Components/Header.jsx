import React from "react";
import { Link } from "react-router-dom";

//<a> = <Link> and href = to (Link and to is component of react use to move from one page to another without reload)
const Header = () => {
  return (
    <>
      <nav>Get Ready To Complete Daily Goals</nav>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/temID">User</Link>
      </div>
    </>
  );
};

export default Header;

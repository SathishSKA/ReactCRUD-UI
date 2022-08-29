import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-link">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/employees">Employees</Link>
        </span>
        <span>
          <Link to="/employee/create">Add Employee</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span style={{ marginLeft: "auto", fontSize: "20px" }} className="login">
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

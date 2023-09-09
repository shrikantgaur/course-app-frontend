import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/" style={{color:'#fda085'}}>
          CourseApp
        </Link>

        {/* Menus on the right */}
        <div className="d-flex flex-row-reverse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

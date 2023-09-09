// components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <div className="container">
      <nav className='header-navigation'>
        <div className='brand'>
          <Link to="/">CourseApp</Link>
        </div>
        <div className='header-menus'>
          <ul className='menus-items'>
            <li className='menus-item'><Link to="/">Home</Link></li>
            <li className='menus-item'><Link to="/about">About</Link></li>
            <li className='menus-item'><Link to="/contact">Contact</Link></li>
            <li className='menus-item'><Link to="/signup">Sign up</Link></li>
            <li className='menus-item'><Link to="/signin">Sign in</Link></li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Navigation;

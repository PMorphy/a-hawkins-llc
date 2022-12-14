import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='navbar-header'>
      <nav className='navbar-nav'>
        <Link to='/'>
          <h1 className='navbar-logo'>A. Hawkins LLC</h1>
        </Link>

        <ul className='navbar-menu'>
          <li className='navbar-menu-item'>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li className='navbar-menu-item'>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li className='navbar-menu-item'>
            <Link to='/admin'>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/home" clasName="navbar-brand">
        Ghibli Studio Films 
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><NavLink to="/ghibliList" className="nav-link" activeClassName="active">Ghibli Films List</NavLink></li>
      </ul>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><NavLink to="/home" className="nav-link" activeClassName="active">Ghibli Home</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Header;
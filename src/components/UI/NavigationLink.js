import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const NavigationLink = ({ icon, title, to }) => {
  return (
    <li className="nav-item h5">
      <NavLink className="nav-link px-4" to={to}>
        <i className={`bi bi-${icon}`}></i>
        <span className="navigation__link-title ms-3">{title}</span>
      </NavLink>
    </li>
  );
};

export default NavigationLink;

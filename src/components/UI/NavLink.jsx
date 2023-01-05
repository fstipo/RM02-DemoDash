import React from 'react';
import { NavLink as NavigationLink } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../../App.css';

const NavLink = ({ icon, title, to }) => {
  return (
    <li className="nav-item h5 ">
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            {title}
          </Tooltip>
        )}
        placement="right"
      >
        <NavigationLink className="nav-link px-4" to={to}>
          <i className={`bi bi-${icon}`}></i>
          <span className="navigation__link-title ms-3">{title}</span>
        </NavigationLink>
      </OverlayTrigger >
    </li >

  );
};

export default NavLink;

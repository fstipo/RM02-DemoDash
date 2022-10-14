import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';
import '../../App.css';
import NavigationLink from '../UI/NavigationLink';
import { SignInButton } from '../Auth/SignInButton';
import { SignOutButton } from '../Auth/SignOutButton';




const Sidebar = () => {
  const isAuthenticated = useIsAuthenticated();
  const collapseNavbarHandler = (e) => {
    e.preventDefault();
    const navigation = document.querySelector('.section__navigation');
    navigation.classList.toggle('collapsed');
  };


  return (
    <div className="section__navigation col bg-dark">
      <nav className="navbar-dark pt-4 d-flex flex-column">
        <div className="d-flex navigation__logo--box m-auto mb-4 text-danger">
          <Link
            className="navigation__logo--text navbar-brand d-inline-block m-auto text-light "
            to="/"
          >
            <i className="bi bi-dice-5" role="img" aria-label="dice-5"></i>
            <span className="navigation__link-title ms-2">Logo</span>
          </Link>
        </div>
        <ul className="navigation__box navbar-nav flex-column  nav-pills d-flex ">
          <div className="d-grid">
            <NavigationLink title="Home" icon="house-door" to="/" />
            <NavigationLink
              title="Projects"
              icon="folder2-open"
              to="/projects"
            />
            <hr className="text-white border-2  mb-5 align-center" />
            <NavigationLink
              title="People"
              icon="people"
              to="/dashboard"
            />
            <NavigationLink title="Assets" icon="gear" to="/orders" />
            <NavigationLink title="Products" icon="grid" to="/products" />
            <NavigationLink
              title="Costumers"
              icon="person-circle"
              to="/costumers"
            />
            <hr className="text-white border-2  mb-1 text-center" />

            <button
              className="navigation__collapse-button nav-link"
              type="button"
              onClick={collapseNavbarHandler}
            >
              <i className="bi bi-chevron-double-left h5"></i>
              <span className="navigation__link-title ms-2 h5">Collapse</span>
            </button>
          </div>
        </ul>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        {/* <p className='text-white'>Welcome</p> */}


      </nav>
    </div>
  );
};

export default Sidebar;



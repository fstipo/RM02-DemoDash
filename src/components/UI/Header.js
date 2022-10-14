import React from 'react';
import '../../App.css';

const Header = ({ name, icon }) => {
  return (
    <>
      <header>
        <h2 className="display-6 px-3 pt-3 text-secondary ">
          <i className={`bi bi-${icon}`}></i>
          <span className="ms-3">{name}</span>
        </h2>
        <hr className="mx-3" />
      </header>
    </>
  );
};

export default Header;

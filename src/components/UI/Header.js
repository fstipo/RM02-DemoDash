import React from 'react';
import '../../App.css';

const Header = ({ name, icon }) => {
  return (
    <>
      <header>
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h2 className="display-6 px-3 pt-3 fw-bold text-secondary ">
            <i className={`ms-4 bi bi-${icon}`}></i>
            <span className="ms-3">{name}</span>
          </h2>
        </div>
      </header>
    </>
  );
};

export default Header;

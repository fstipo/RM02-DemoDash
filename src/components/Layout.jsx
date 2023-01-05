import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="row min-vh-100">
      <div className="container-fluid d-flex">
        {children}
      </div>
    </div >
  );
};

export default Layout;

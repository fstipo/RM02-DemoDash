import React from 'react';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
  return (
    <div className="row min-vh-100">
      <div className="container-fluid d-flex">
        <ToastContainer />
        {children}
      </div>
    </div >
  );
};

export default Layout;

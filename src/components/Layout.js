import React from 'react';


const Container = ({ children }) => {
  return (
    <div className="row min-vh-100">
      <div className="container-fluid d-flex">
        {children}
      </div>
    </div >
  );
};

export default Container;

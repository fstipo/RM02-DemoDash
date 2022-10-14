import React from 'react';
import NavigationRoutes from './NavigationRoutes';
import Sidebar from './Sidebar';

const Navigation = () => {
  return (
    <div className="row min-vh-100">
      <div className="container-fluid d-flex">
        <Sidebar />
        <div className="section__main col">
          <NavigationRoutes />
        </div>
      </div>
    </div>
  );
};

export default Navigation;

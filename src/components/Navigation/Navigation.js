import React from 'react';
import NavigationSidebar from './NavigationSidebar';
import NavigationRoutes from './NavigationRoutes';

const Navigation = () => {
  return (
    <div className="row min-vh-100">
      <div className="container-fluid d-flex">
        <NavigationSidebar />
        <div className="section__main col">
          <NavigationRoutes />
        </div>
      </div>
    </div>
  );
};

export default Navigation;

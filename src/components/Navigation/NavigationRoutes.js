import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Orders from '../Pages/Orders';
import Products from '../Pages/Products';
import Customers from '../Pages/Customers';
import Details from '../Pages/Dashboard/Details';
import CreateUser from "../Pages/Dashboard/CreateUser"
export const dataContext = React.createContext();

const NavigationRoutes = () => {
  const [selectedUserId, setSelectedUserId] = useState('');
  const selectedUserHandler = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <dataContext.Provider value={selectedUserId}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="dashboard"
          element={<Dashboard onSelectId={selectedUserHandler} userId={selectedUserId} />}
        />
        {/* <Route path={`details/id/${selectedUserId}`} element={<Details userId={selectedUserId} />} /> */}
        <Route path="details/id/:id" element={<Details userId={selectedUserId} />} />
        {/* //userId={selectedUserId}  */}
        {/* <Route path="details" element={<Details userId={selectedUserId} />}>
          <Route path="id/:selectedUserId" element={<h2>Hello</h2>} />
          <Route path="id/:selectedUserId" element={<h2>Hello</h2>} />
        </Route> */}

        <Route path="create-user" element={< CreateUser />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="costumers" element={<Customers />} />
      </Routes>
    </dataContext.Provider>
  );
};

export default NavigationRoutes;

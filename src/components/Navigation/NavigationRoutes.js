import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../features/Home';
import Projects from '../../features/Projects';
import People from '../../features/People/components/People';
import Products from '../../features/Products';
import Customers from '../../features/Customers';
import Assets from '../../features/Assets';
import PeopleDetails from "../../features/People/components/PeopleDetails"
import PeopleCreateUser from '../../features/People/components/Create-User/PeopleCreateUser';

export const dataContext = React.createContext();

const NavigationRoutes = () => {
  const [selectedUserId, setSelectedUserId] = useState('');
  const selectedUserHandler = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <dataContext.Provider value={selectedUserId}>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="people"
          element={<People onSelectId={selectedUserHandler} userId={selectedUserId} />}
        />
        <Route path="people/details/:id" element={<PeopleDetails userId={selectedUserId} />} />
        <Route path="people/create-user" element={< PeopleCreateUser />} />
        <Route path="assets" element={<Assets />} />
        <Route path="products" element={<Products />} />
        <Route path="costumers" element={<Customers />} />
      </Routes>
    </dataContext.Provider>
  );
};

export default NavigationRoutes;

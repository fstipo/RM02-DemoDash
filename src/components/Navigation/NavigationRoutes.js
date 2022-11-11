import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import People from '../Pages/People';
import Products from '../Pages/Products';
import Customers from '../Pages/Customers';
import Assets from '../Pages/Assets';
import PeopleDetails from "../Pages/People/Grid/Details/PeopleDetails"
import PeopleCreateUser from '../Pages/People/Grid/Create-User/PeopleCreateUser';
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

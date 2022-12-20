import React from 'react';
import Layout from "./components/Layout"
import NavigationSidebar from './components/Navigation/NavigationSidebar';
import NavigationRoutes from './components/Navigation/NavigationRoutes';
import './App.css';

const App = () => {
  return (
    <Layout>
      <NavigationSidebar />
      <div className="col">
        <NavigationRoutes />
      </div>
    </Layout>
  );
};

export default App;

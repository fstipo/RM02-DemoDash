import React from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Routes from './components/Routes';
import './App.css';


const App = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="col">
        <Routes />
      </div>
    </Layout>
  );
};

export default App;

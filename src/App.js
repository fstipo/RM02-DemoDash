import React from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Routes from './components/Routes';
import './App.css';
import { ApiContextProvider } from './context/apiContext';

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="col">
        <ApiContextProvider>
          <Routes />
        </ApiContextProvider>
      </div>
    </Layout>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser/dist/app/PublicClientApplication';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
const msalInstance = new PublicClientApplication(msalConfig);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

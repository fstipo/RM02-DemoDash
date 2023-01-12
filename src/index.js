import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser/dist/app/PublicClientApplication';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './auth/authConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
const msalInstance = new PublicClientApplication(msalConfig);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <MsalProvider instance={msalInstance}> */}
        <App />
        {/* </MsalProvider> */}
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
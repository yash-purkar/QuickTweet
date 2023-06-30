import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './utils.css'

import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContextProvider } from './Contexts/AuthContext';
import { DataContextProvider } from './Contexts/DataContext';
import { ModalContextProvider } from './Contexts/ModalContext';


// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataContextProvider>
          <ModalContextProvider>
            <App />
          </ModalContextProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);


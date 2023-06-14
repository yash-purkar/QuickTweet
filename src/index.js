import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './utils.css'
import reportWebVitals from './reportWebVitals';

import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContextProvider } from './Contexts/AuthContext';
import { DataContextProvider } from './Contexts/DataContext';
import { PostContextProvider } from './Contexts/PostContext';


// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataContextProvider>
          <PostContextProvider>
            <App />
          </PostContextProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './App.css';
import AccountPage from './Components/AccountPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <AccountPage />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Register from './Components/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Register />
    </div>
  );
}

export default App;

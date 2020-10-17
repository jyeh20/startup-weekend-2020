import React from 'react';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' ;
import Register from './Components/Register';
import Dashboard from './HomePage/Dashboard';
import Navbar from './HomePage/Navbar';
import Footer from './HomePage/Footer';
=======
import AccountPage from './Components/AccountPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
>>>>>>> bb4303ac511be51d6496b3f25b7108c9a7e4fdc0

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <Router>
      <Navbar />
      <Switch>{/*Switch is to make sure every time we exit the route, it comes back to the / page */}
      <Route path="/" exact component={Dashboard} /> {/*exact making sure it's the main page */}
      </Switch>
    </Router>
    <Footer />
=======
        <AccountPage />
>>>>>>> bb4303ac511be51d6496b3f25b7108c9a7e4fdc0
    </div>
  );
}

export default App;

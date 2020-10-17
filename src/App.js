import React from 'react';
import './App.css';
<<<<<<< HEAD
// import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' ;
// import AccountPage from './Components/Register';
import Dashboard from './HomePage/Dashboard';
import Navbar from './HomePage/Navbar';
import Footer from './HomePage/Footer';
// import AccountPage from './Components/AccountPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import AccountPage from './Components/AccountPage';
=======
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' ;
import AccountPage from './Components/Register';
import Dashboard from './HomePage/Dashboard';
import Navbar from './HomePage/Navbar';
import Footer from './HomePage/Footer';
>>>>>>> aca32bfa37c12fda9b86b07505a8964f7d387ea8

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>{/*Switch is to make sure every time we exit the route, it comes back to the / page */}
      <Route path="/" exact component={Dashboard} /> {/*exact making sure it's the main page */}
      <Route path="/signup" exact component={AccountPage} />
      </Switch>
    </Router>
    <Footer />
<<<<<<< HEAD
        {/* <AccountPage /> */}
=======
        <AccountPage />
>>>>>>> aca32bfa37c12fda9b86b07505a8964f7d387ea8
    </div>
  );
}

export default App;

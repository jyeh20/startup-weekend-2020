import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' ;
import AccountPage from './Components/AccountPage';
import FirstUser from './Components/FirstUser';
import Dashboard from './HomePage/Dashboard';
import Navbar from './HomePage/Navbar';
import Footer from './HomePage/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>{/*Switch is to make sure every time we exit the route, it comes back to the / page */}
      <Route path="/" exact component={Dashboard} /> {/*exact making sure it's the main page */}
      <Route path="/:id" exact component={AccountPage} />
      </Switch>
    </Router>
    <Footer />
        {/* <AccountPage /> */}
    </div>
  );
}

export default App;

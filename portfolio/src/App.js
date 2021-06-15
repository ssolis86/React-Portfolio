import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Portfolio from './components/Portfolio';

// import './App.css';

function App() {
  return (
   <div>
     
      <Router>
        <div>
          <Switch>
            <Route path="/contact">
              <Header />
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Header />
              <Portfolio />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
   </div>
  );
}

export default App;

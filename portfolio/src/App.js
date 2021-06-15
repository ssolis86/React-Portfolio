import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

// import './App.css';

function App() {
  return (
   <div>
     
      <Router>
      <div>
        <Switch>
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

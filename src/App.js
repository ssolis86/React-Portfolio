import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  page: 
  {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
}))
function App() {
  const classes = useStyles();
  return (
   <div>
     
      <Router>
        <div>
          <Switch>
            <Route path="/contact">
              <div className={classes.page}>
                <Header />
                <Contact />
                <Footer />
              </div>
            </Route>
            <Route path="/portfolio">
            <div className={classes.page}>
              <Header />
              <Portfolio />
              <Footer />
              </div>
            </Route>
            <Route path="/">
            <div className={classes.page}>
              <Header />
              <Home />
              <Footer />
            </div>
            </Route>
          </Switch>
        </div>
    </Router>
   </div>
  );
}

export default App;

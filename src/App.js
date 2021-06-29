import React from 'react';
import Header from './components/Header';
import HomeCard from './components/HomeCard';
import ProjectsToVisit from './components/ProjectsToVisit';
import Contact from './components/Contact';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import image from "./assets/office.jpg"

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  bg:{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  ft:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  }
}));
function App() {
  const classes = useStyles();
  return (
   <div>
     
      <Router>
        <div>
          <Switch>
            <Route path="/contact">
              <div className={classes.root}>
                <Header />
                <Contact />
                <Footer />
              </div>
            </Route>
            <Route path="/portfolio">
            <div className={classes.root}>
              <Header />
              <Portfolio />
              <Footer />
              </div>
            </Route>
            <Route path="/">
            <div className={classNames(classes.root, classes.bg)}>
              <Header />
              <ProjectsToVisit />
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

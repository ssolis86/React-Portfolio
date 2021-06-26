import React from 'react';
import Header from './components/Header';
import HomeCard from './components/HomeCard';
import Contact from './components/Contact';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import image from "./assets/background_image.jpg"

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  bg:{
    backgroundImage: `url(${image})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
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
              <HomeCard />
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

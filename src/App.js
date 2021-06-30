import React from 'react';
import Header from './components/Header';
import ProjectsToVisit from './components/ProjectsToVisit';
import Footer from './components/Footer';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import image from "./assets/purple_wallpaper.jpg"

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  bg:{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    backgroundPosition: 'center'

  },
}));
function App() {
  const classes = useStyles();
  return (
   <div className={classNames(classes.root, classes.bg)}>
      <CssBaseline />
      <Header />
      <ProjectsToVisit />
      <Footer />
    </div>
  );
}

export default App;

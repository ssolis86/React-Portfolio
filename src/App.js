import React from 'react';
import Header from './components/Header';
import ProjectsToVisit from './components/ProjectsToVisit';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import image from "./assets/green_wallpaper.jpg"

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
    minHeight: '100vh'
  },
}));
function App() {
  const classes = useStyles();
  return (
   <div className={classNames(classes.root, classes.bg)}>
      <Header />
      <ProjectsToVisit />
      <Footer />
    </div>
  );
}

export default App;

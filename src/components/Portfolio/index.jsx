import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from '../Project';
import projectOne from '../../assets/fitness_tracker.png';
import projectTwo from '../../assets/ecommerce.png';
import projectThree from '../../assets/weather.png'
import projectFour from '../../assets/weather.png';
import projectFive from '../../assets/vaccine.png';
import projectSix from '../../assets/roadtrippers.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
            <Project 
            title={'Fitness Tracker'} 
            deployed={'https://still-fjord-86390.herokuapp.com/'} 
            ghub={'https://github.com/ssolis86/Fitness-Tracker'} 
            image={projectOne} />
        </Grid>
        <Grid item xs>
          <Project 
            title={'e-Commerce Back End'} 
            deployed={'https://github.com/ssolis86/ORM-Ecommerce-Back-End'} 
            ghub={'https://github.com/ssolis86/ORM-Ecommerce-Back-End'} 
            image={projectTwo} />
        </Grid>
        <Grid item xs>
          <Project 
            title={'Weather Dashboard'} 
            deployed={'https://ssolis86.github.io/weather-dashboard/'} 
            ghub={'https://github.com/ssolis86/weather-dashboard'} 
            image={projectThree} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Project 
            title={'Workday Scheduler'} 
            deployed={'https://ssolis86.github.io/workdayscheduler/'} 
            ghub={'https://github.com/ssolis86/workdayscheduler'} 
            image={projectFour} />
        </Grid>
        <Grid item xs>
          <Project 
            title={'Digital Vaccine Tracker'} 
            deployed={'https://ancient-hollows-23369.herokuapp.com/'} 
            ghub={'https://github.com/wrp90/Vaccination_Tracker'} 
            image={projectFive} />
        </Grid>
        <Grid item xs>
          <Project 
            title={'RoadTrippers'} 
            deployed={'https://enigmatic-taiga-76938.herokuapp.com/'} 
            ghub={'https://github.com/KannaVairavan/Travel-App'} 
            image={projectSix} />
        </Grid>
      </Grid>
    </div>
  );
}
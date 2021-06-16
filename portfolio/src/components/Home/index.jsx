import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import me from '../../assets/me.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  avatar: {
    height: '100px',
    width: '100px',
  }
}));

const message =  `I am a full stack developer based in San Antonio, TX. 
                  I love programming, traveling, golfing and playing guitar. 
                  I am currently completing a Full Stack Developer Bootcamp through University of Texas at Austin. 
                  Check out my Portfolio to see some of the work I've done!`;

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} alt="picture of me" src={me} />
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
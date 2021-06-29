import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import me from '../../assets/me.jpg';
import classNames from 'classnames';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  avatar: {
    height: '100px',
    width: '100px',
  },
  linear: {
    background: 'linear-gradient(45deg, #B2B2B2 30%, #FFFFFF 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgb(177, 177, 177)',
    color: 'black',
  }
}));

const message =  `THANKS FOR STOPPING BY! \n
                  Check out my Portfolio to see some of my work!
                  `;

export default function HomeCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Paper className={classNames(classes.paper, classes.linear)}>
        <Grid container wrap="nowrap" spacing={2}>
          {/* <Grid item>
            <Avatar className={classes.avatar} alt="picture of me" src={me} />
          </Grid> */}
          <Grid item xs>
            <Typography variant="h3">{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      
    </div>
  );
}
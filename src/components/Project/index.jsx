import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Project(props) {
    const classes = useStyles();

    return(
        <div>
        <Paper className={classes.paper}>
          <div>
            <h3>{props.title}</h3>
          </div>
          <div>
            <a href={props.deployed} target="_blank">
              Project Link
            </a>
          </div>
          <div>
            <a href={props.ghub} target="_blank">
              GitHub Repository
            </a>
          </div>
          <div>
            <img width='275px' height='200px' alt="project screenshot" src={props.image}></img>
          </div>
        </Paper>
        </div>
    )
}

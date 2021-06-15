import React from 'react';
import ContactForm from '../ContactForm';
import Header from '../Header';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function Contact() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <Header />
            <ContactForm />
        </div>
    );
  }

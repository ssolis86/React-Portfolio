import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
    footer: {
        flexShrink: 0,
        textAlign: 'center',
        backgroundColor: 'tomato',
        color: 'white',
      }
  }));



export default function Footer() 
{
    const classes = useStyles();
    return (
  <footer className={classes.footer}>
    <IconButton onClick={() => window.open('https://github.com/ssolis86?tab=repositories')}>
      <GitHubIcon />
    </IconButton>
    <IconButton onClick={() => window.open('https://www.linkedin.com/in/stephen-solis')}>
      <LinkedInIcon />
    </IconButton>
  </footer>
)};
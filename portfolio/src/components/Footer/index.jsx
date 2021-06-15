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
    <IconButton>
      <GitHubIcon />
    </IconButton>
    <IconButton>
      <LinkedInIcon />
    </IconButton>
    <p>Some footer nonsense!</p>
  </footer>
)};
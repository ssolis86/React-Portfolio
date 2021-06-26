import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import Resume from '../../assets/Revised_Resume.pdf';


const useStyles = makeStyles((theme) => ({
    footer: {
        flexShrink: 0,
        textAlign: 'center',
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
    <IconButton onClick={() => window.open('mailto:stephensolis@sbcglobal.net')}>
      <EmailIcon />
    </IconButton>
    <IconButton>
      
      <a href={Resume} target="_blank" rel="noreferrer noopener" download="Stephen-Solis-Resume">
      <DescriptionIcon />
      </a>
      
    </IconButton>
  </footer>
)};
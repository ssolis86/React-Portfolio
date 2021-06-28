import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import Resume from '../../assets/Revised_Resume.pdf';
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";


const Footer = () => <>
        
        <AppBar position="static" elevation={0} component="footer" color="default">
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">©2020</Typography>
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
              </Toolbar>
        </AppBar>
    </>

export default Footer;








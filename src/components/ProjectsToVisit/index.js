import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from '../ProjectCard';
import project from '../../static/projects';
import useWindowPosition from '../../hook/useWindowPosition';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function ProjectsToVisit () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="project-to-visit">

      <ProjectCard place={project[1]} checked={checked} />
      <ProjectCard place={project[2]} checked={checked} />
      <ProjectCard place={project[3]} checked={checked} />
      <ProjectCard place={project[4]} checked={checked} />
      <ProjectCard place={project[5]} checked={checked} />

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
      </Collapse>
    </div>
  );
}
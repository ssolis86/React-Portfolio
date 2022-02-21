import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../hook/useWindowPosition';
import ClientCard from '../ClientCard';
import clients from '../../static/clients';
import { Typography } from '@material-ui/core';


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
  container: {
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Cormorant Garamond',
    color: '#FFD700',
    fontSize: '10.0rem',
    textAlign: 'center',
  },
}));
export default function Clients () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="clientCard">
      <ClientCard place={clients[0]} checked={checked} />
    </div>
  );
}
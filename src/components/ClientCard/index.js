import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
    textAlign: 'center',
  },
  media: {
    height: 140,

  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
    padding: 3
  },
  btn: {
    // background: 'linear-gradient(45deg, #F3EB0F 30%, #FFD700 90%)',
    background: '#FFD700',
    border: 1,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: 'rgba(0,0,0,0.5)',
    height: 48,
    padding: '1 30px',
    textAlign: 'center'
  }
});

export default function ClientCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={place.imageUrl}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            <Button href={place.deployed} className={classes.btn}>Deployed Link</Button>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            <Button href={place.ghub} className={classes.btn}>GitHub Repository</Button>
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


const useStyles = makeStyles({
    bg: {
      background: "linear-gradinet(45deg, 3FE6B8B 30%, #FF8E53 90%)"
    }
  });

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      
    </div>
  );
}
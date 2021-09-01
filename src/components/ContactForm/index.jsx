import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}));
 
export default function ContactForm() 
{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <form>
            <TextField label="Full Name" fullWidth autocomplete="none"/>
            <TextField label="Email" fullWidth autocomplete="none"/>
            <TextField label="Message" fullWidth multiline rows={5} autocomplete="none"/>
            <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
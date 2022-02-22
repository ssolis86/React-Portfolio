import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2, 3),
    background: 'linear-gradient(45deg, #FFFDD0 30%, #FFFDD0 90%)',
    // width: '40ch',
    maxWidth: 500,
    textAlign: 'center',
    borderRadius: 3,
  }
}));
 
export default function ContactForm() 
{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <form>
            <TextField variant="outlined" label="Full Name" fullWidth autocomplete="none"/>
            <TextField variant="outlined" label="Email" fullWidth autocomplete="none"/>
            <TextField variant="outlined" label="Message" fullWidth multiline rows={5} autocomplete="none"/>
            <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}
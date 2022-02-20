import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Button } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import name from '../../assets/name_new.gif';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import { yellow } from '@mui/material/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Cormorant Garamond',
  },
  appbar: {
    background: 'none',
    fontFamily: 'Cormorant Garamond',
    
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    background: '#0B5345',
  },
  appbarTitle: {
    //appbar and landing text
    fontFamily: 'Cormorant Garamond',
    color: '#FFD700',
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#FFD700',
    fontFamily: 'Cormorant Garamond',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#FFD700',
    fontSize: '10.0rem',
  },
  goDown: {
    color: '#FFD700',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0} position='fixed'>
        <Toolbar className={classes.appbarWrapper}>
          <Scroll className={classes.appbarTitle} to='header' smooth={true}>
            <Button>
              <CottageSharpIcon sx={{ color: yellow[500] }}></CottageSharpIcon>
              {/* <h1 className={classes.appbarTitle}>Stephen<span className={classes.colorText}>Solis</span></h1> */}
            </Button>
          </Scroll>
          <Scroll to='clientCard' smooth={true}>
            <Button color='inherit' className={classes.colorText}>Clients</Button>
          </Scroll>

          <Scroll to='project-to-visit' smooth={true}>
            <Button color='inherit' className={classes.colorText}>Projects</Button>
          </Scroll>
          
          <Scroll to='contact-form' smooth={true}>
            <Button color='inherit' className={classes.colorText}>Contact</Button>
          </Scroll>

          <Scroll to='socialFooter' smooth={true}>
            <Button color='inherit' className={classes.colorText}>Social + Resume</Button>
          </Scroll>
          {/* <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Stephen Solis 
            <br />
            <span className={classes.colorText}>Web Developer</span>
          </h1>
          <Scroll to="clientCard" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}










// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { CssBaseline } from '@material-ui/core';
// import clsx from 'clsx';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
// import FolderIcon from '@material-ui/icons/Folder';
// import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
// import { Link } from 'react-router-dom';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     background: 'none',
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     fontSize: '2rem',
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     background: 'gray',
//     width: drawerWidth,
//     color: 'white'
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));



// export default function Header() {

//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   }

// return (

// <div className={classes.root}>
//     <CssBaseline />
//     <AppBar  position="static" className={clsx(classes.appBar, {[classes.appBarShift]: open, })}>
//       <Toolbar>
//         <IconButton edge="start" aria-label="menu" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.hide)}>
//           <MenuIcon />
//         </IconButton>
//             <Typography variant="h6" noWrap>
              
//             </Typography>
//       </Toolbar>
//     </AppBar>
//       <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper, }}>
//             <div className={classes.drawerHeader}>
//               <IconButton onClick={handleDrawerClose}>
//                 {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//               </IconButton>
//             </div>
//             <Divider />
//             <List>
//               {['Home', 'Portfolio', 'Contact'].map((text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemIcon>
//                     {(index === 0 && <Link to="/"><HomeIcon/></Link>) || (index === 1 && <Link to="/portfolio"><FolderIcon/></Link>) || (index === 2 && <Link to="/contact"><PermContactCalendarIcon/></Link>)}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>
//       </Drawer>
//   </div>  
// )
// };




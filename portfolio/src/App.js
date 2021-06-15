import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// import './App.css';

function App() {
  return (
   <div>
     <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div>
            <span>Stephen Solis</span>
          </div>
        </Toolbar>
      </AppBar>
   </div>
  );
}

export default App;

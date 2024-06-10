import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        </Typography>
        <Typography variant="h6" style={{ marginLeft: '20px' }}>
          <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarComp;

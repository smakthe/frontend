import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6"><a href='/'>Record Management</a></Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;

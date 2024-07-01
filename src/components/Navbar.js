import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">Record Management</Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;

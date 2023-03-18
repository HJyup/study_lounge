import React from 'react';
import { AppBar, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';

import styles from './Navbar.module.scss';
const Navbar = () => (
  <div className={styles['navbar-container']}>
    <React.Fragment>
      <AppBar position={'fixed'} className={styles['navbar']}>
        <Toolbar>
          <Typography variant={'subtitle1'}>Study Lounge</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  </div>
);

export default Navbar;

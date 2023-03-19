import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

import styles from './Navbar.module.scss';
const Navbar = () => (
  <div className={styles['navbar-container']}>
    <React.Fragment>
      <AppBar position={'fixed'} className={styles['navbar']}>
        <Toolbar className={styles['navbar-container']}>
          <div className={styles['title']}>Study Lounge</div>
          <div className={styles['subtitle']}>
            Different knowledge in one place.
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  </div>
);

export default Navbar;

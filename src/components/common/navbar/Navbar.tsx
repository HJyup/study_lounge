import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

import styles from './Navbar.module.scss';

interface NavbarProps {
  text?: string;
}
const Navbar: React.FC<NavbarProps> = ({
  text = 'Different knowledge in one place',
}) => (
  <div className={styles['navbar-container']}>
    <React.Fragment>
      <AppBar position={'fixed'} className={styles['navbar']}>
        <Toolbar className={styles['navbar-container']}>
          <div className={styles['title']}>Study Lounge</div>
          <div className={styles['subtitle']}>{text}</div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  </div>
);

export default Navbar;

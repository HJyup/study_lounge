import styles from './Navbar.module.scss'
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import {Typography} from "@mui/material";
import {Fragment} from "react";
import React from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
const Navbar = () => (
    <div className={styles['navbar-container']}>
        <React.Fragment>
            <AppBar position="fixed" className={styles['newnavbar']}>
                <Toolbar>{/* content */}</Toolbar>
            </AppBar>
        </React.Fragment>
    </div>
)

export default Navbar;
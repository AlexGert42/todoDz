import {AppBar, IconButton, Typography, Button, Toolbar, LinearProgress} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, {useState} from "react";
import styles from './Header.module.scss'
import {useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import {initialStateType} from "../../store/app/appReducer";


export const Header: React.FC = () => {

    const progress = useSelector<AppRootState, boolean>(state => state.app.initApp)


    return (
        <AppBar position="fixed" className={styles.header}>
            <Toolbar className={styles.header__inner}>
                <div className={styles.header__menu}>
                    <IconButton className={styles.header__icon} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h4">
                        Todolist
                    </Typography>
                </div>
                <Button className={styles.header__btn} color="inherit">Login</Button>
            </Toolbar>
            {!progress && <LinearProgress className={styles.progressbar}/>}
        </AppBar>
    )
}
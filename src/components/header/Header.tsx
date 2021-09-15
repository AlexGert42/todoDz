import {AppBar, IconButton, Typography, Button, Toolbar, LinearProgress} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import styles from './Header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import {logoutThunk} from "../../store/app/appAction";


export const Header: React.FC = () => {
    const dispatch = useDispatch()
    const progress = useSelector<AppRootState, boolean>(state => state.app.progressLoading)

    const auth = useSelector<AppRootState, boolean>(state => state.app.authMe)

    const clickHendler = () => {
        dispatch(logoutThunk())
    }

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


                {
                    auth ?
                        <Button
                            className={styles.header__btn}
                            color="inherit"
                            onClick={clickHendler}
                        >
                            Logout
                        </Button>
                        :
                        <></>
                }

            </Toolbar>
            {progress && <LinearProgress className={styles.progressbar}/>}
        </AppBar>
    )
}
import {AppBar, Button, IconButton, LinearProgress, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, {useState} from "react";
import styles from './Header.module.scss'
import {useSelector} from "react-redux";
import {selectors} from '../selectors'
import {useActions} from "../../store/store";
import {appActions} from "../../store";
import { Nav } from "../common";


export const Header: React.FC = () => {
    const [value, setValue] = useState<boolean>(false)



    const {logoutThunk} = useActions(appActions)

    const progress = useSelector(selectors.progresSelector)

    const auth = useSelector(selectors.authSelector)

    const clickHendler = () => {
        logoutThunk()
    }

    return (
        <AppBar position="fixed" className={styles.header}>
            <Nav.NavBar show={value} setValue={setValue}/>


            <Toolbar className={styles.header__inner}>
                <div className={styles.header__menu}>
                    <IconButton className={styles.header__icon} edge="start" color="inherit" aria-label="menu" onClick={() => setValue(true)}>
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



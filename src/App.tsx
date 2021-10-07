import React, {useEffect} from 'react';
import {Header} from "./components/header/Header";

import {useSelector} from "react-redux";
import {Content} from "./components/content/Content";
import loading from './styles/grid-1.1s-200px.svg'

import {selectors} from './components/selectors';
import {useActions} from "./store/store";
import {appActions} from "./store";
import {Alert} from './components/common'
import {createTheme, ThemeProvider} from '@material-ui/core';





const theme = createTheme({
    palette: {
        primary: {
            main: '#294B59FF'
        },
        secondary: {
            main: '#BD5C5CFF'
        },
    }
})





export const App = () => {
    const initial = useSelector(selectors.initialSelect)
    const alertList = useSelector(selectors.alertSelect)

   const {authMeThunk, removeAlertAction} = useActions(appActions)
    useEffect(() => {
        authMeThunk()
    }, [])


    const onCloseAlert = (id: string) => {
        removeAlertAction({id})
    }

    if (!initial) {
        return <div className="install_app">
            <img className="install_app__icon" src={loading} alt=" "/>
        </div>
    }

    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <div className="container">
                <Content/>
            </div>
            <Alert.AlertComponent alertList={alertList} onCloseAlert={onCloseAlert}/>
        </ThemeProvider>

    )
}



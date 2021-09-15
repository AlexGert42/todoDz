import React, {useEffect} from 'react';
import {Header} from "./components/header/Header";
import {Footer} from './components/footer/Footer';
import {AlertComponent} from "./components/alertComponent/alertComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {Content} from "./components/content/Content";
import loading from './styles/grid-1.1s-200px.svg'
import {removeAlertAction} from './store/app/appReducer';
import {AlertContentType, authMeThunk} from './store/app/appAction';

export const App = () => {
    const initial = useSelector<AppRootState, boolean>(state => state.app.initApp)
    const alertList = useSelector<AppRootState, AlertContentType[]>(state => state.app.alertContent)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMeThunk())
    }, [])


    const onCloseAlert = (id: string) => {
        dispatch(removeAlertAction({id}))
    }

    if (!initial) {
        return <div className="install_app">
            <img className="install_app__icon" src={loading} alt=" "/>
        </div>
    }

    return (
        <>
            <Header/>
            <div className="container">
                <Content/>
            </div>
            <Footer/>
            <AlertComponent alertList={alertList} onCloseAlert={onCloseAlert}/>
        </>

    )
}



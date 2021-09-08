import React from 'react';
import {CreateTodoList} from "./components/content/todolist/CreateTodoList";
import {Header} from "./components/header/Header";
import {Footer} from './components/footer/Footer';
import {AlertComponent} from "./components/alertComponent/alertComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {removeAlertAction} from "./store/app/appAction";


export const App = () => {
    const alertList = useSelector<AppRootState, any>(state => state.app.alertContent)
    const dispatch = useDispatch()

    const onCloseAlert = (id: string) => {
        dispatch(removeAlertAction(id))
    }

    return (
        <>
            <Header/>
            <div className="container">
                <CreateTodoList/>
            </div>
            <Footer/>
            <AlertComponent alertList={alertList} onCloseAlert={onCloseAlert}/>
        </>

    )
}

export default App;

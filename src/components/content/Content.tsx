import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CreateTodoList } from './todolist/CreateTodoList';
import {Login} from "./login/Login";


const mainStyle = {

}

export const Content: React.FC = () => {

    return (
        <main style={mainStyle}>
            <Switch>
                <Route path={'/todolist'} component={CreateTodoList}/>
                <Route path={'/'} component={Login}/>
            </Switch>
        </main>
    )
}
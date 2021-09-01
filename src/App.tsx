import React from 'react';
import './App.scss';
import {CreateTodoList} from "./components/content/todolist/CreateTodoList";







export const App = () => {

    return (
        <div style={{padding: '50px'}}>

            <CreateTodoList/>

        </div>
    )
}

export default App;

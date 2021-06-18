import React from 'react';
import './App.scss';
import {CreateTodoList} from "./components/CreateTodoList";


export const App = () => {

    return (
        <div className="App">
            <CreateTodoList/>
        </div>
    )

}

export default App;

import React from 'react';
import {CreateTodoList} from "../components/CreateTodoList";
import {store} from "../store/store";
import {Provider} from "react-redux";


export default {
    title: 'TodoList/CreateTodo',
    component: CreateTodoList
}

export const createTodoList = () => <Provider store={store}><CreateTodoList/></Provider>


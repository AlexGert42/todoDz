import React from 'react';
import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";
import {CreateTodoList} from "../components/content/todolist/CreateTodoList";


export default {
    title: 'TodoList/CreateTodo',
    component: CreateTodoList,
    decorators: [ReduxStoreProviderDecorator]
}

export const createTodoList = () => <CreateTodoList/>


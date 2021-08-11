import React from 'react';
import {CreateTodoList} from "../components/CreateTodoList";
import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";


export default {
    title: 'TodoList/CreateTodo',
    component: CreateTodoList,
    decorators: [ReduxStoreProviderDecorator]
}

export const createTodoList = () => <CreateTodoList/>


import React from 'react';
import {v1} from 'uuid';
// @ts-ignore
import {action} from '@storybook/addon-actions';
import {PropsTypeTodolist, TodoList} from "../components/TodoList";
import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";


export default {
    title: 'TodoList/TodoList',
    component: TodoList,
    decorators: [ReduxStoreProviderDecorator]
}

const chengeFilter = action('chengeFilter')
const chengeTitle = action('chengeTitle')
const removeTodoList = action('removeTodoList')

const args_1: PropsTypeTodolist = {
    id: v1(),
    title: 'Test_1',
    tasks: [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false}
    ],
    filter: 'all',
    chengeFilter,
    chengeTitle,
    removeTodoList
}

const args_2: PropsTypeTodolist = {
    id: v1(),
    title: 'Test_2',
    tasks: [
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false}
    ],
    filter: 'active',
    chengeFilter,
    chengeTitle,
    removeTodoList
}
export const TaskBaseExample = () => {
    return (
        <>
            <TodoList
                id={args_1.id}
                title={args_1.title}
                tasks={args_1.tasks}
                filter={args_1.filter}
                chengeFilter={args_1.chengeFilter}
                chengeTitle={args_1.chengeTitle}
                removeTodoList={args_1.removeTodoList}
            />
            <TodoList
                id={args_2.id}
                title={args_2.title}
                tasks={args_2.tasks}
                filter={args_2.filter}
                chengeFilter={args_2.chengeFilter}
                chengeTitle={args_2.chengeTitle}
                removeTodoList={args_2.removeTodoList}
            />
        </>

    )
}
import {v1} from 'uuid';
import React from 'react';
// @ts-ignore
import {action} from '@storybook/addon-actions';
import {PropsTypeTodolist, TodoList} from "../components/content/tasks/TodoList";
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
    entiryStatus: '',
    tasks: [
        {
            id: v1(),
            title: 'HTML&CSS',
            addedDate: '',
            order: 0,
            status: 0,
            deadline: '',
            description: '',
            priority: 0,
            startDate: '',
            todoListId: '6546546',
            statusProcess: 'loading'
        },
        {
            id: v1(),
            title: 'JS',
            addedDate: '',
            order: 0,
            status: 0,
            deadline: '',
            description: '',
            priority: 0,
            startDate: '',
            todoListId: '6546546',
            statusProcess: ''
        },

    ],
    filter: 'all',
    chengeFilter,
    chengeTitle,
    removeTodoList
}

const args_2: PropsTypeTodolist = {
    id: v1(),
    title: 'Test_2',
    entiryStatus: 'loading',
    tasks: [

        {
            id: v1(),
            title: 'TS-JS',
            addedDate: '',
            order: 0,
            status: 0,
            deadline: '',
            description: '',
            priority: 0,
            startDate: '',
            todoListId: '6546546',
            statusProcess: ''
        },
        {
            id: v1(),
            title: 'SQL',
            addedDate: '',
            order: 0,
            status: 0,
            deadline: '',
            description: '',
            priority: 0,
            startDate: '',
            todoListId: '6546546',
            statusProcess: ''
        },
    ],
    filter: 'active',
    chengeFilter,
    chengeTitle,
    removeTodoList
}
export const TaskBaseExample = (): React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> => {
    return (
        <div>
            <TodoList
                entiryStatus={args_1.entiryStatus}
                id={args_1.id}
                title={args_1.title}
                tasks={args_1.tasks}
                filter={args_1.filter}
                chengeFilter={args_1.chengeFilter}
                chengeTitle={args_1.chengeTitle}
                removeTodoList={args_1.removeTodoList}
            />
            <TodoList
                entiryStatus={args_2.entiryStatus}
                id={args_2.id}
                title={args_2.title}
                tasks={args_2.tasks}
                filter={args_2.filter}
                chengeFilter={args_2.chengeFilter}
                chengeTitle={args_2.chengeTitle}
                removeTodoList={args_2.removeTodoList}
            />
        </div>

    )
}
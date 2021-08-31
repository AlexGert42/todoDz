import React from 'react';
import { Task } from '../components/Task';
import { v1 } from 'uuid';
// @ts-ignore
import { action } from '@storybook/addon-actions';
import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";


export default {
    title: 'TodoList/Task',
    component: Task,
    decorators: [ReduxStoreProviderDecorator]
}

const chengeTaskTitle = action('chengeTaskTitle')
const chengeIsDone = action('chengeIsDone')
const removeTask = action('removeTask')



const args_1 = {
    id: v1(),
    chengeTaskTitle,
    chengeIsDone,
    removeTask,
    item: {
        id: v1(),
        title: 'HTML&CSS_test',
        status: 2,
        order: 0,
        addedDate: '',
        deadline: '',
        description: '',
        priority: 0,
        startDate: '',
        todoListId: '6546546'
    },
}
const args_2 = {
    id: v1(),
    chengeTaskTitle,
    chengeIsDone,
    removeTask,
    item:  {
        id: v1(),
        title: 'HTML&CSS_test_2',
        status: 1,
        order: 0,
        addedDate: '',
        deadline: '',
        description: '',
        priority: 0,
        startDate: '',
        todoListId: '6546546'
    },
}

export const TaskBaseExample = () => {
    return (
        <>
            <Task id={args_1.id} chengeTaskTitle={args_1.chengeTaskTitle} chengeIsDone={args_1.chengeIsDone} removeTask={args_1.removeTask} item={args_1.item}/>
            <Task id={args_2.id} chengeTaskTitle={args_2.chengeTaskTitle} chengeIsDone={args_2.chengeIsDone} removeTask={args_2.removeTask} item={args_2.item}/>
        </>
    )
}


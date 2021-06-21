import React from 'react';
import {TodoList} from "../components/TodoList";


export default {
    title: 'TodoList/TodoList',
    component: TodoList
}

const Template = (args: any) => <TodoList {...args}/>

export const todoList = Template.bind({})


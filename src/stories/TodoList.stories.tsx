import React from 'react';
import {TodoList} from "../components/TodoList";
import {Provider} from "react-redux";
import { store } from '../store/store';


export default {
    title: 'TodoList/TodoList',
    component: TodoList
}

const Template = (args: any) =>  <Provider store={store}><TodoList {...args}/></Provider>

export const todoList = Template.bind({})


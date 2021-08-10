import React from 'react';
import {Provider} from "react-redux";
import {store} from "../store/store";
import { Task } from '../components/Task';
import {v1} from "uuid";
import {taskType} from "../store/todolistReducer";

export default {
    title: 'TodoList/Task',
    component: Task
}



let args_1 = {
    id: v1(),
    item: {id: v1(), title: 'ReactJS', isDone: false},
}
let args_2 = {
    id: v1(),
    item: {id: v1(), title: 'ReactJSgfsdgfdgfdg', isDone: true},
}

export const Template = (args_1: any) => {
    return <Provider store={store}><Task {...args_1}/></Provider>
}




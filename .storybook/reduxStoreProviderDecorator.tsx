import React from 'react';
import {Provider} from "react-redux";

import {combineReducers, createStore} from "redux";
import {CreateTodolistReducer} from "../src/store/todolist/todolistReducer";
import {TodolistReducer} from "../src/store/tasks/tasksReducer";
import {v1} from "uuid";


const rootReducer = combineReducers({
    todolist: CreateTodolistReducer,
    tasks: TodolistReducer
})

let todoListId1 = v1()
let todoListId2 = v1()

const initialStateStorybook = {
    todolist: [
        {id: todoListId1, title: 'Test_1', filter: 'all'},
        {id: todoListId2, title: 'Test_2', filter: 'all'},
    ],
    tasks: {
        [todoListId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GrphQL', isDone: false},
        ],
        [todoListId2]: [
            {id: v1(), title: 'Book', isDone: true},
            {id: v1(), title: 'Apple', isDone: true},
            {id: v1(), title: 'Milk', isDone: false},
        ]
    }
}


export const storeStoryBook = createStore(rootReducer, initialStateStorybook)

export type AppRootState = ReturnType<typeof rootReducer>


export const ReduxStoreProviderDecorator = (story: any) => {
    return <Provider store={storeStoryBook}>{story()}</Provider>
}
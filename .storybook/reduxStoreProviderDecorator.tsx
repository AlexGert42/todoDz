import React from 'react';
import {Provider} from "react-redux";

import {applyMiddleware, combineReducers, createStore} from "redux";
import {TodolistReducer} from "../src/store/todolist/todolistReducer";
import {TasksReducer} from "../src/store/tasks/tasksReducer";
import {v1} from "uuid";
import ThunkMiddleware from "redux-thunk";
import {AppReducer} from "../src/store/app/appReducer";


const rootReducer = combineReducers({
    todolist: TodolistReducer,
    tasks: TasksReducer,
    app: AppReducer
})

let todoListId1 = v1()
let todoListId2 = v1()

const initialStateStorybook: AppRootStateStorybook = {
    app: {
        initApp: false,
        progressLoading: false,
        alertContent: [],
        dataUser: null,
        authMe: true,
    },
    todolist: [
        {id: todoListId1, title: 'Test_1', filter: 'all', addedDate: '4343435425', order: 3, entiryStatus: ''},
        {id: todoListId2, title: 'Test_2', filter: 'all', addedDate: '4343435425', order: 2, entiryStatus: ''},
    ],
    tasks: {
        [todoListId1]: [
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '', title: 'HTML&CSS'},
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '', title: 'JS'},
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '', title: 'ReactJS'},
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '',title: 'Rest API'},
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '',title: 'GrphQL'},
        ],
        [todoListId2]: [
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '', title: 'Book'},
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '',title: 'Apple'},
            {id: v1(), addedDate: '454543543', statusProcess: '', deadline: '', description: '', order: '', priority: 2, startDate: '', status: 1, todoListId: '',title: 'Milk'},
        ]
    }
}

export const storeStoryBook = createStore(rootReducer, initialStateStorybook, applyMiddleware(ThunkMiddleware))


type AppRootStateStorybook = ReturnType<typeof rootReducer>


export const ReduxStoreProviderDecorator = (story: any) => {
    return <Provider store={storeStoryBook}>{story()}</Provider>
}



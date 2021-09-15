import {combineReducers} from "redux";
import {TasksReducer} from "./tasks/tasksReducer";
import ThunkMiddleware from 'redux-thunk';
import {AppReducer} from "./app/appReducer";
import { configureStore } from '@reduxjs/toolkit'
import {TodolistReducer} from "./todolist/todolistReducer";



const rootReducer = combineReducers({
    todolist: TodolistReducer,
    tasks: TasksReducer,
    app: AppReducer
})



export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ThunkMiddleware)
})

export type AppRootState = ReturnType<typeof rootReducer>



// @ts-ignore
window.store = store
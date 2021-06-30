import {combineReducers, createStore} from "redux";
import {CreateTodolistReducer} from "./createTodolistReducer";
import {TodolistReducer} from "./todolistReducer";


const rootReducer = combineReducers({
    todolist: CreateTodolistReducer,
    tasks: TodolistReducer
})


export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
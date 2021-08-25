import {applyMiddleware, combineReducers, createStore} from "redux";
import {CreateTodolistReducer} from "./createTodolistReducer";
import {TodolistReducer} from "./todolistReducer";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    todolist: CreateTodolistReducer,
    tasks: TodolistReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
import {applyMiddleware, combineReducers, createStore} from "redux";
import {CreateTodolistReducer} from "./todolist/createTodolistReducer";
import {TodolistReducer} from "./tasks/todolistReducer";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    todolist: CreateTodolistReducer,
    tasks: TodolistReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
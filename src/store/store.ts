import {ActionCreatorsMapObject, bindActionCreators, combineReducers} from "redux";
import {TasksReducer} from "./tasks/tasksReducer";
import ThunkMiddleware from 'redux-thunk';
import {AppReducer} from "./app/appReducer";
import { configureStore } from '@reduxjs/toolkit'
import {TodolistReducer} from "./todolist/todolistReducer";
import {useDispatch} from "react-redux";
import {useMemo} from "react";





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


export function useActions<T extends ActionCreatorsMapObject<any>>(action: T) {
    const dispatch = useDispatch()
    const boundActions = useMemo(() => {
        return bindActionCreators(action, dispatch)
    }, [])
    return boundActions
}




// @ts-ignore
window.store = store
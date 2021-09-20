import {ServTodoListType} from "../../api/todoApi";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type FilterValuesType = 'all' | 'complete' | 'active';
export type TodoListType = ServTodoListType & {
    filter: FilterValuesType,
    entiryStatus: string
}

const initialState: Array<TodoListType> = []


const slice = createSlice({
    name: 'todolist',
    initialState: initialState,
    reducers: {
        setTodolistAction(state, action: PayloadAction<{ todolists: TodoListType[] }>) {
            return action.payload.todolists.map(el => {
                    el.filter = 'all'
                    el.entiryStatus = ''
                return el
            })

        },
        addTodolistAction(state, action: PayloadAction<{ newTodolist: TodoListType }>) {
           return [...state, action.payload.newTodolist]
        },
        removeTodolistAction(state, action: PayloadAction<{ idTodolist: string }>) {
           return state.filter(el => el.id !== action.payload.idTodolist)
        },
        chengeTitleTodolistAction(state, action: PayloadAction<{ idTodolist: string, newTitleTodolist: string }>) {
            const index = state.findIndex(el => el.id === action.payload.idTodolist)
            state[index].title = action.payload.newTitleTodolist
        },
        chengeFilterTodolistAction(state, action: PayloadAction<{ idTodolist: string, newfilterTodolist: FilterValuesType }>) {
            const index = state.findIndex(el => el.id === action.payload.idTodolist)
            state[index].filter = action.payload.newfilterTodolist
        },
        disabledAction(state, action: PayloadAction<{ idTodolist: string, value: string }>) {
            const index = state.findIndex(el => el.id === action.payload.idTodolist)
            state[index].entiryStatus = action.payload.value
        },
    }
})


export const TodolistReducer = slice.reducer

export const {setTodolistAction} = slice.actions
export const {addTodolistAction} = slice.actions
export const {removeTodolistAction} = slice.actions
export const {chengeTitleTodolistAction} = slice.actions
export const {chengeFilterTodolistAction} = slice.actions
export const {disabledAction} = slice.actions


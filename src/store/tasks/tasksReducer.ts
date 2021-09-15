import {ServTaskType} from "../../api/todoApi";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type TaskType = ServTaskType & {
    statusProcess: string
}


export type StateTaskType = {
    [key: string]: Array<TaskType>
}

const initialState: StateTaskType = {}


const slice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        setTaskTodolistAction(state, action: PayloadAction<{ tasks: TaskType[], id: string }>) {
            state[action.payload.id] = action.payload.tasks
        },
        addTaskTodolistAction(state, action: PayloadAction<{ id: string, newTask: TaskType }>) {
            state[action.payload.id] = [...state[action.payload.id], action.payload.newTask]
        },
        removeTaskTodolistAction(state, action: PayloadAction<{ id: string, taskId: string }>) {
            state[action.payload.id] = state[action.payload.id].filter(el => el.id !== action.payload.taskId)
        },
        updateTaskTodolistAction(state, action: PayloadAction<{ id: string, taskId: string, task: TaskType }>) {
            state[action.payload.id] = state[action.payload.id].map(el => {
                if (el.id === action.payload.taskId) {
                    el = action.payload.task
                    return el
                }
                return el
            })
        },
        setDisabledAction(state, action: PayloadAction<{ id: string, taskId: string, value: string }>) {
            state[action.payload.id] = state[action.payload.id].map(el => {
                if (el.id === action.payload.taskId) {
                    el.statusProcess = action.payload.value
                    return el
                }
                return el
            })
        },
    }
})

export const TasksReducer = slice.reducer

export const {setTaskTodolistAction} = slice.actions
export const {addTaskTodolistAction} = slice.actions
export const {removeTaskTodolistAction} = slice.actions
export const {updateTaskTodolistAction} = slice.actions
export const {setDisabledAction} = slice.actions


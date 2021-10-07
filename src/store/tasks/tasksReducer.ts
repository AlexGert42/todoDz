import {ServTaskType, TaskApi, TaskPriorities, TaskStatuses} from "../../api/todoApi";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {configAlert, setAlertAction} from "../app/appReducer";
import {AppRootState} from "../store";

export const getTaskThunk = createAsyncThunk('tasks/getTaskThunk', async (id: string, {dispatch, rejectWithValue}) => {
    try {
        let res = await TaskApi.getTask(id)
        if (res.status === 200) {
            return {tasks: res.data.items, id}
        } else {
            dispatch(setAlertAction({alert: configAlert('error', res.statusText)}))
            return {}
        }
    } catch (error) {
        return rejectWithValue({error: error.message})
    }
})

export const addTaskThunk = createAsyncThunk('tasks/addTaskThunk', async (params: {id: string, nameTask: string}, {dispatch, rejectWithValue}) => {
    try {
        let res = await  TaskApi.setTask(params.id, params.nameTask)
        if (res.resultCode === 0) {
            dispatch(setAlertAction({alert: configAlert('success', `Создан Task: ${params.nameTask}`)}))
            return {id: res.data.item.todoListId, newTask: res.data.item}
        } else {
            dispatch(setAlertAction({alert: configAlert('error', res.statusText)}))
            return {}
        }
    } catch (error) {
        return rejectWithValue({error: error.message})
    }
})



export const removeTaskThunk = createAsyncThunk('tasks/removeTaskThunk', async (
    params: {id: string, taskId: string},
    {dispatch, rejectWithValue, getState}) => {

    const state = getState() as AppRootState
    const item = state.tasks[params.id].find(el => el.id === params.taskId)

    if (!item) {
        return
    }

    dispatch(setDisabledAction({id: params.id, taskId: params.taskId, value: 'loading'}))
    try {
        let res = await   TaskApi.deleteTask(params.id, params.taskId)
        if (res.resultCode === 0) {
            dispatch(setAlertAction({alert: configAlert('success', `Удален Task: ${item.title}`)}))
            return {id: params.id, taskId: params.taskId}
        } else {
            dispatch(setAlertAction({alert: configAlert('error', res.statusText)}))
            return {}
        }
    } catch (error) {
        return rejectWithValue({error: error.message})
    }
})



type ModelType = {
    addedDate?: string
    deadline?: string | null
    description?: string | null
    id?: string
    order?: number
    priority?: TaskPriorities
    startDate?: string | null
    status?: TaskStatuses
    title?: string
    todoListId?: string
}

export const updateTaskThunk = createAsyncThunk('tasks/updateTaskThunk', async (
    params: {id: string, taskId: string, update: ModelType},
    {dispatch, getState, rejectWithValue}) => {

    const state = getState() as AppRootState

    const task = state.tasks[params.id].find((el: ModelType) => el.id === params.taskId)
    if (!task) {
        return
    }

    const update = Object.keys(params.update).join(' ')


    const apiModel: TaskType = {
        id: task.id,
        title: task.title,
        addedDate: task.addedDate,
        description: task.description,
        priority: task.priority,
        order: task.order,
        startDate: task.startDate,
        todoListId: task.todoListId,
        deadline: task.deadline,
        status: task.status,
        statusProcess: task.statusProcess,
        ...params.update
    }

    dispatch(setDisabledAction({id: params.id, taskId: params.taskId, value: 'chengeStatus'}))

    try {
        let res = await TaskApi.updateTask(params.id, params.taskId, apiModel)
        if (res.resultCode === 0) {
            dispatch(setAlertAction({alert: configAlert('success', `Изменен ${update} Task: ${task.title}`)}))
            return {id: params.id, taskId: params.taskId, task: apiModel}
        } else {
            dispatch(setAlertAction({alert: configAlert('error', res.statusText)}))
            return {}
        }
    } catch (error) {
        return rejectWithValue({error: error.message})
    }

})













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
        setDisabledAction(state, action: PayloadAction<{ id: string, taskId: string, value: string }>) {
            state[action.payload.id] = state[action.payload.id].map(el => {
                if (el.id === action.payload.taskId) {
                    el.statusProcess = action.payload.value
                    return el
                }
                return el
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTaskThunk.fulfilled, (state, action) => {
            if (action.payload.id) {
                state[action.payload.id] = action.payload.tasks
            }
        });
        builder.addCase(addTaskThunk.fulfilled, (state, action) => {
            if (action.payload) {
                state[action.payload.id] = [...state[action.payload.id], action.payload.newTask]
            }
        });
        builder.addCase(removeTaskThunk.fulfilled, (state, action) => {
            if (action.payload?.id) {
                state[action.payload.id] = state[action.payload.id].filter(el => el.id !== action.payload?.taskId)
            }
        });
        builder.addCase(updateTaskThunk.fulfilled, (state, action) => {
            if (action.payload?.id) {
                state[action.payload.id] = state[action.payload.id].map(el => {
                    if (el.id === action.payload?.taskId) {
                        el = action.payload.task
                        return el
                    }
                    return el
                })
            }
        });
    }
})

export const TasksReducer = slice.reducer

export const {setDisabledAction} = slice.actions


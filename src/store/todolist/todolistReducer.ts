import {ServTodoListType, TodolistApi} from "../../api/todoApi";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {configAlert, setAlertAction} from "../app/appReducer";
import {AppRootState} from "../store";



//thunks

export const getTodolistThunk = createAsyncThunk('todolist/getTodolistThunk', async (arg, thunkAPI) => {
        try {
            let res = await TodolistApi.getTodolist()
            return {todolists: res.data}
        } catch (er) {
            const error: AxiosError = er
            thunkAPI.dispatch(setAlertAction({alert: configAlert('error', error.message)}))
            return thunkAPI.rejectWithValue({errors: error.message})
        }
    }
)


export const addTodolistThunk = createAsyncThunk('todolist/addTodolistThunk', async (title: string, {
    dispatch,
    rejectWithValue
}) => {
    try {
        let res = await TodolistApi.setTodolist(title)
        if (res.resultCode === 0) {
            dispatch(setAlertAction({alert: configAlert('success', `Создан Todolist: ${title}`)}))
            return {newTodolist: res.data.item}
        } else {
            dispatch(setAlertAction({alert: configAlert('error', `${res.messages}`)}))
            return {}
        }
    } catch (error) {
        dispatch(setAlertAction({alert: configAlert('error', `${error.message}`)}))
        return rejectWithValue({errors: error.message})
    }
})


export const removeTodolistThunk = createAsyncThunk('todolist/removeTodolistThunk', async (id: string, {
    getState,
    dispatch,
    rejectWithValue
}) => {
    const state = getState() as AppRootState

    const item = state.todolist.find(el => el.id === id)
    if (!item) {
        return
    }
    dispatch(disabledAction({idTodolist: item.id, value: 'loading'}))
    try {
        let res = await TodolistApi.deleteTodolist(id)
        if (res.resultCode === 0) {
            dispatch(setAlertAction({alert: configAlert('success', `Удален Todolist: ${item.title}`)}))
            return {idTodolist: id}
        } else {
            dispatch(setAlertAction({alert: configAlert('error', res.messages)}))
            return {}
        }
    } catch (error) {
        dispatch(setAlertAction({alert: configAlert('error', error.message)}))
        return rejectWithValue({errors: error.message})
    }

})


export const chengeNameTodolistThunk = createAsyncThunk('todolist/chengeNameTodolistThunk', async (
    param: { id: string, text: string },
    {dispatch, rejectWithValue}) => {
    try {
        let res = await TodolistApi.updateTodolist(param.id, param.text)
        if (res.resultCode === 0) {
            dispatch(setAlertAction({alert: configAlert('success', `Изменен Todolist: ${param.text}`)}))
            return {idTodolist: param.id, newTitleTodolist: param.text}
        } else {
            return
        }
    } catch (error) {
        return rejectWithValue({errors: error.message})
    }
})


//reduser



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
        chengeFilterTodolistAction(state, action: PayloadAction<{ idTodolist: string, newfilterTodolist: FilterValuesType }>) {
            const index = state.findIndex(el => el.id === action.payload.idTodolist)
            state[index].filter = action.payload.newfilterTodolist
        },

        disabledAction(state, action: PayloadAction<{ idTodolist: string, value: string }>) {
            const index = state.findIndex(el => el.id === action.payload.idTodolist)
            state[index].entiryStatus = action.payload.value
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodolistThunk.fulfilled, (state, action) => {
            return action.payload.todolists.map((el: any) => {
                el.filter = 'all'
                el.entiryStatus = ''
                return el
            })
        });
        builder.addCase(addTodolistThunk.fulfilled, (state, action) => {
            if (action.payload.newTodolist) {
                return [...state, action.payload.newTodolist]
            }
        });
        builder.addCase(removeTodolistThunk.fulfilled, (state, action) => {
            if (action.payload) {
                return state.filter(el => el.id !== action.payload?.idTodolist)
            }
        });
        builder.addCase(chengeNameTodolistThunk.fulfilled, (state, action) => {
            if (action.payload) {
                const index = state.findIndex(el => el.id === action.payload?.idTodolist)
                state[index].title = action.payload.newTitleTodolist
            }
        });
    }
})


export const TodolistReducer = slice.reducer

export const {chengeFilterTodolistAction} = slice.actions
export const {disabledAction} = slice.actions


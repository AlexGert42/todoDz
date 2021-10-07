import {createAsyncThunk, createSlice, PayloadAction, AsyncThunkAction} from "@reduxjs/toolkit";
import {DataLogin} from "../../components/content/login/Login";
import {LoginApi} from "../../api/todoApi";
import {v1} from "uuid";


export type AlertContentType = {
    id: string
    type: "error" | "success" | "info" | "warning"
    title: string
}


export const configAlert = (type: "error" | "success" | "info" | "warning", message: string) => ({
    id: v1(),
    type,
    title: message
})

export type DataUser = {
    email: string
    id: number
    login: string
}


//thunks

export const authMeThunk = createAsyncThunk('app/authMeThunk', async (arg, thunkAPI) => {
        try {
            let res = await LoginApi.authMe()
            if (res.resultCode === 0) {
                thunkAPI.dispatch(setDataAction({dataUser: res.data, value: true}))
                return {value: true}
            } else {
                return {value: true}
            }
        } catch (err) {
            thunkAPI.rejectWithValue({error: err.message})
            return {value: true}
        }
    }
)

export const loginThunk = createAsyncThunk('app/loginThunk', async (data: DataLogin, thunkAPI) => {
    thunkAPI.dispatch(initAppAction({value: true}))
    try {
        let res = await LoginApi.login(data)
        if (res.resultCode === 0) {
            thunkAPI.dispatch(initAppAction({value: false}))
            return {value: true}
        } else {
            thunkAPI.dispatch(setAlertAction({alert: configAlert('error', res.messages)}))
            thunkAPI.dispatch(initAppAction({value: false}))
            return thunkAPI.rejectWithValue({error: [res.messages]})
        }
    } catch (err) {
        thunkAPI.dispatch(initAppAction({value: false}))
        thunkAPI.dispatch(setAlertAction({alert: configAlert('error', err.message)}))
        return thunkAPI.rejectWithValue({error: [err.message], })
    }
})


export const logoutThunk = createAsyncThunk('app/logoutThunk', async (arg, thunkAPI) => {
    thunkAPI.dispatch(initAppAction({value: true}))
    try {
        let res = await LoginApi.logout()
        if (res.resultCode === 0) {
            thunkAPI.dispatch(initAppAction({value: false}))
            return {value: false}
        } else {
            return thunkAPI.rejectWithValue({value: false})
        }
    } catch (err) {
        thunkAPI.dispatch(setAlertAction({alert: configAlert('error', err.message)}))
        return thunkAPI.rejectWithValue({error: err.message})
    }
})


//reduser

export type initialStateType = {
    initApp: boolean
    progressLoading: boolean,
    alertContent: AlertContentType[]
    dataUser: DataUser | null
    authMe: boolean
}

const initialState: initialStateType = {
    initApp: false,
    progressLoading: false,
    alertContent: [],
    dataUser: null,
    authMe: false
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setDataAction(state, action: PayloadAction<{ value: boolean, dataUser: DataUser }>) {
            state.authMe = action.payload.value
            state.dataUser = action.payload.dataUser
        },
        initAppAction(state, action: PayloadAction<{ value: boolean }>) {
            state.progressLoading = action.payload.value
        },
        setAlertAction(state, action: PayloadAction<{ alert: AlertContentType }>) {
            state.alertContent.push(action.payload.alert)
        },
        removeAlertAction(state, action: PayloadAction<{ id: string }>) {
            state.alertContent = state.alertContent.filter(el => el.id !== action.payload.id)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.authMe = action.payload.value
        });
        builder.addCase(logoutThunk.fulfilled, (state, action) => {
            state.authMe = action.payload.value
        });
        builder.addCase(authMeThunk.fulfilled, (state, action) => {
            state.initApp = action.payload.value
        });
    }
})


export const AppReducer = slice.reducer

export const {setDataAction} = slice.actions
export const {initAppAction} = slice.actions
export const {setAlertAction} = slice.actions
export const {removeAlertAction} = slice.actions



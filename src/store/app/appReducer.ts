
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AlertContentType } from "./appAction";






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

export type DataUser = {
    email: string
    id: number
    login: string
}


const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        initialAction(state, action: PayloadAction<{ value: boolean }>) {
            state.initApp = action.payload.value
        },
        loginAction(state, action: PayloadAction<{ value: boolean }>) {
            state.authMe = action.payload.value
        },
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
    }
})


export const AppReducer = slice.reducer




export const {initialAction} = slice.actions
export const {loginAction} = slice.actions
export const {setDataAction} = slice.actions
export const {initAppAction} = slice.actions
export const {setAlertAction} = slice.actions
export const {removeAlertAction} = slice.actions



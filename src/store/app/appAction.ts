import {v1} from "uuid";
import {Dispatch} from "redux";
import {LoginApi} from "../../api/todoApi";
import {DataLogin} from "../../components/content/login/Login";
import {initialAction, setDataAction, initAppAction, loginAction } from "./appReducer";



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

//////////////////////////////////////////////////////////////////////////////////////////////////////

export const authMeThunk = () => (dispatch: Dispatch) => {
    LoginApi.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setDataAction({dataUser: res.data, value: true}))
                dispatch(initialAction({value: true}))
            } else {
                dispatch(initialAction({value: true}))
            }
        })
}


export const loginThunk = (data: DataLogin) => (dispatch: Dispatch) => {
    dispatch(initAppAction({value: true}))
    LoginApi.login(data)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(loginAction({value: true}))
                dispatch(initAppAction({value: false}))
            }
        })
}

export const logoutThunk = () => (dispatch: Dispatch) => {
    dispatch(initAppAction({value: true}))
    LoginApi.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(loginAction({value: false}))
                dispatch(initAppAction({value: false}))
            }
        })
}
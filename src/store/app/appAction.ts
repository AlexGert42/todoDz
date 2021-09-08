import {v1} from "uuid";


export type initAppActionType = {
    type: 'INITIALIZATION'
}

export const initAppAction = (): initAppActionType => ({
    type: 'INITIALIZATION'
})

//////////////////////////////////////

export type AlertContentType = {
    id: string
    type: "error" | "success" | "info" | "warning"
    title: string
}

export type SetAlertActionType = {
    type: 'SET_ALERT',
    payload: AlertContentType
}

export const configAlert = (type: "error" | "success" | "info" | "warning", message: string) => ({
    id: v1(),
    type,
    title: message
})

export const setAlertAction = (alert: AlertContentType): SetAlertActionType => ({
    type: "SET_ALERT",
    payload: alert
})


export type RemoveAlertActionType= {
    type: 'REMOVE_ALERT',
    payload: string
}

export const removeAlertAction = (id: string): RemoveAlertActionType => ({
    type: "REMOVE_ALERT",
    payload: id
})


////////////////////////////////////////
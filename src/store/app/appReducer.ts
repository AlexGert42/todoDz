import {
    AlertContentType,
    initAppActionType,
    RemoveAlertActionType,
    SetAlertActionType
} from "./appAction";
import { v1 } from "uuid";


type AppActionType = initAppActionType | SetAlertActionType | RemoveAlertActionType;

export type initialStateType = {
    initApp: boolean,
    alertContent: AlertContentType[]
}

const initialState = {
    initApp: false,
    alertContent: []


}



export const AppReducer = (state: initialStateType = initialState, action: AppActionType): initialStateType => {
    switch (action.type) {
        case 'INITIALIZATION':
            return {
                ...state,
                initApp: true
            }
        case 'SET_ALERT':
            const list = [...state.alertContent, {...action.payload}]
            return {
                ...state,
                alertContent: list
            }
        case 'REMOVE_ALERT':
            let newArr = state.alertContent.filter(el => el.id !== action.payload)
            return {
                ...state,
                alertContent: newArr
            }

        default:
            return state
    }
}
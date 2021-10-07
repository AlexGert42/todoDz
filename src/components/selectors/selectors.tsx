import {AppRootState} from "../../store/store";

//app
export const initialSelect = (state: AppRootState) => state.app.initApp

export const alertSelect = (state: AppRootState) => state.app.alertContent

//header
export const progresSelector = (state: AppRootState) => state.app.progressLoading
export const authSelector = (state: AppRootState) => state.app.authMe

//todolist

export const todolistArraySelector = (state: AppRootState) => state.todolist
export const allTaskSelector = (state: AppRootState) => state.tasks